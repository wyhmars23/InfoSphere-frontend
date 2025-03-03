<template>
  <a-space direction="horizontal" size="large">
    <a-select v-model:model-value="selectedOption" :style="{ width: '120px' }" placeholder="Please select ...">
      <a-option value="keywords">标题</a-option>
      <a-option value="inventors">申请人</a-option>
      <a-option value="publication_number">公开号</a-option>
      <a-option value="countries">公开国别</a-option>
      <a-option value="publication_year">公开年份</a-option>
      <a-option value="application_year">申请年份</a-option>
    </a-select>
    <a-input-search v-model:model-value="searchText" :style="{ width: '500px', margin: '-15px' }"
      placeholder="Please enter something" @search="SearchData1" search-button />
  </a-space>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { postSearch} from '../api';
import type { Search,Item,Aggregations,pages,SelectContext} from '../api';
import { eventBus } from '../eventBus';

const SendAggregations = (aggregations:Aggregations) => {
  eventBus.emit('eventForSelect', aggregations);
};

const SendItems = (items:Item[]) => {
  eventBus.emit('eventForCard', items);
};

const SendTotalPages = (totalPages:number) => {
  eventBus.emit('eventForTotal', totalPages);
};

// 选中的搜索类别
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedOption = ref<any>('keywords');
// 输入框的值
const searchText = ref('');

// 正确使用 reactive
const postData = reactive<Search>({
  keywords: null,
  publication_number: null,
  inventors: null,
  countries: null,
  publication_year: null,
  application_year: null,
  page: 1,
  size: 10
})

const handlePages = (PagesCondition:pages) => {
  postData.page = PagesCondition.page;
  postData.size = PagesCondition.size;
  SearchData();
};

const handleSelect = (Select:SelectContext) => {
  postData.inventors = Select.inventors;
  postData.countries = Select.countries;
  postData.publication_year = Select.publication_year;
  postData.application_year = Select.application_year;
  SearchData();
};

// 搜索逻辑
const SearchData = async () => {
  try {
    console.log("发送的请求"+ JSON.stringify(postData ?? {}));
    const response = await postSearch(postData);
    SendAggregations(response.aggregations);
    SendItems(response.items);
    SendTotalPages(response.total);
  } catch (error) {
    console.error('查询失败:', error);
  }
};

// 搜索逻辑
const SearchData1 = async () => {
  try {
    // 清空所有搜索字段，避免残留
  Object.keys(postData).forEach(key => {
    if (key !== "page" && key !== "size") {
      postData[key as keyof Search] = null;
    }
  });
  console.log("搜索类别"+selectedOption.value);
  // 只设置当前选中的字段
  if (selectedOption.value === 'inventors'||selectedOption.value === 'countries') {
    postData[selectedOption.value as keyof Search] = [searchText.value] ;
  }
  else {
    postData[selectedOption.value as keyof Search] = searchText.value || null;
  }
  //  console.log("发送的请求"+ JSON.stringify(postData ?? {}));
    const response = await postSearch(postData);
    SendAggregations(response.aggregations);
    SendItems(response.items);
    SendTotalPages(response.total);
  } catch (error) {
    console.error('查询失败:', error);
  }
};

onMounted(() => {
  // 监听事件
  eventBus.on('conditionForPage', handlePages);
  eventBus.on('conditionForSelect', handleSelect);
  postData[selectedOption.value as keyof Search] = searchText.value || null;
});

onUnmounted(() => {
  // 组件销毁时取消监听，避免内存泄漏
  eventBus.off('conditionForPage', handlePages);
  eventBus.off('conditionForSelect', handleSelect);
});

defineOptions({
  name: 'Search'
});
</script>

<style scoped lang="less"></style>
