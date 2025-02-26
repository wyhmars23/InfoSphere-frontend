<template>
  <div style="margin-top:8px ;">
  <div class="select">
    <a-select v-model="value" :style="{ width: '300px' }" placeholder="Please select ..." multiple :max-tag-count="5">
      <a-option v-for="item in data" :key="item.key" :value="item.value" :label="item.label" />
    </a-select>
  </div>
  <div class="select">
    <a-select v-model="value" :style="{ width: '300px' }" placeholder="Please select ..." multiple :max-tag-count="5">
      <a-option v-for="item in data" :key="item.key" :value="item.value" :label="item.label" />
    </a-select>
  </div>
  <div class="select">
    <a-select v-model="value" :style="{ width: '300px' }" placeholder="Please select ..." multiple :max-tag-count="5">
      <a-option v-for="item in data" :key="item.key" :value="item.value" :label="item.label" />
    </a-select>
  </div>
  <div class="select">
    <a-select v-model="value" :style="{ width: '300px' }" placeholder="Please select ..." multiple :max-tag-count="5">
      <a-option v-for="item in data" :key="item.key" :value="item.value" :label="item.label" />
    </a-select>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { eventBus } from '../eventBus';
import type { Aggregations } from '../api';

const aggregationsData = ref<Aggregations | null>(null);

// const transform =(normaldata:Aggregations):{key:string; label: string; value: string | null }[]=> {
//   return normaldata.map((item) => [
//     { label: "标题", value: item.title },
//     { label: "申请人", value: item.applicant },
//     { label: "公开号", value: item.pub_number },
//     { label: "发布日期", value: item.pub_date },
//     { label: "IPC 分类", value: item.ipc },
//     { label: "专利ID", value: item.id },
//   ]);
// };

// 处理接收到的数据
const handleAggregations = (aggregations: Aggregations) => {
  aggregationsData.value = aggregations;
  console.log(aggregationsData.value);
};

onMounted(() => {
  // 监听 'eventForSelect' 事件
  eventBus.on('eventForSelect', handleAggregations);
});

onUnmounted(() => {
  // 组件销毁时取消监听，避免内存泄漏
  eventBus.off('eventForSelect', handleAggregations);
});



const value = ref();
const data = [
  { value: 'beijing', label: 'Beijing', key: 'extra1' },
  { value: 'shanghai', label: 'Shanghai', key: 'extra2' },
  { value: 'guangzhou', label: 'Guangzhou', key: 'extra3' },
  { value: 'chengdu', label: 'Chengdu', key: 'extra4' }
];

defineOptions({
  name: 'selectMenu'
});
</script>

<style scoped lang="less">
.select {
  margin: 15px;
}
</style>
