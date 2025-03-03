<template>
  <div style="margin-top: 8px">
    <div class="select">
      <a-select v-model="selectedCountry" :style="{ width: '280px' }" @change="callbackSelect"
        placeholder="Select Country" multiple :max-tag-count="5">
        <a-option v-for="item in countries" :key="item.key" :value="item.value" :label="item.label" />
      </a-select>
    </div>
    <div class="select">
      <a-select v-model="selectedApplicationYear" :style="{ width: '280px' }" @change="callbackSelect"
        placeholder="Select Application Year" allow-clear>
        <a-option v-for="item in application_years" :key="item.key" :value="item.value" :label="item.label" />
      </a-select>
    </div>
    <div class="select">
      <a-select v-model="selectedPublicationYear" :style="{ width: '280px' }" @change="callbackSelect"
        placeholder="Select Publication Year" allow-clear>
        <a-option v-for="item in publication_years" :key="item.key" :value="item.value" :label="item.label" />
      </a-select>
    </div>
    <div class="select">
      <a-select v-model="selectedApplicant" :style="{ width: '280px' }" @change="callbackSelect"
        placeholder="Select Top Applicant" multiple :max-tag-count="5">
        <a-option v-for="item in top_applicants" :key="item.key" :value="item.value" :label="item.label" />
      </a-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { eventBus } from '../eventBus';
import type { Aggregations, SelectContext } from '../api';

const aggregationsData = ref<Aggregations | null>(null);
const countries = ref<{ key: string, label: string; value: string }[]>([]);
const application_years = ref<{ key: string, label: string; value: string }[]>([]);
const publication_years = ref<{ key: string, label: string; value: string }[]>([]);
const top_applicants = ref<{ key: string, label: string; value: string }[]>([]);

const selectedCountry = ref();
const selectedApplicationYear = ref();
const selectedPublicationYear = ref();
const selectedApplicant = ref();

// **修改为 computed 保持响应性**
const selectContext = computed<SelectContext>(() => ({
  countries: selectedCountry.value,
  inventors: selectedApplicant.value,
  application_year: selectedApplicationYear.value,
  publication_year: selectedPublicationYear.value,
}));

// 回调函数直接读取 selectContext.value
const callbackSelect = () => {
  eventBus.emit('conditionForSelect', selectContext.value);
};

// 修正类型
const transformCountry = (normaldata: { country: string | number; count: number }[]) => {
  return normaldata.map((item) => ({
    label: String(item.country),
    value: String(item.country),
    key: String(item.country),
  }));
};

const transformApplicants = (normaldata: { name: string; count: number }[]) => {
  return normaldata.map((item) => ({
    label: item.name,
    value: item.name ?? '',
    key: item.name
  }));
};

// 修正类型转换
const transformYears1 = (data: Record<number, number>) => {
  return Object.entries(data).map(([year, count]) => ({
    year: String(year),
    count,
  }));
};

const transformYears2 = (normaldata: { year: string; count: number }[]) => {
  return normaldata.map((item) => ({
    label: item.year,
    value: item.year ?? '',
    key: item.year
  }));
};

//修正空数据判断
const handleAggregations = (aggregations: Aggregations | null) => {
  if (!aggregations) return;
  aggregationsData.value = aggregations;

  countries.value = aggregations.countries ? transformCountry(aggregations.countries) : [];
  application_years.value = aggregations.application_years ? transformYears2(transformYears1(aggregations.application_years)) : [];
  publication_years.value = aggregations.publication_years ? transformYears2(transformYears1(aggregations.publication_years)) : [];
  top_applicants.value = aggregations.top_applicants ? transformApplicants(aggregations.top_applicants) : [];
};

onMounted(() => {
  eventBus.on('eventForSelect', handleAggregations);
});

onUnmounted(() => {
  eventBus.off('eventForSelect', handleAggregations);
});
</script>

<style scoped lang="less">
.select {
  margin: 15px;
}
</style>
