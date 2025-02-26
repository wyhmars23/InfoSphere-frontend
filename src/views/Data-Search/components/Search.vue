<template>
  <a-space direction="horizontal" size="large">
    <a-select v-model:value="selectedOption" :style="{ width: '120px' }" placeholder="Please select ...">
      <a-option value="keywords">标题</a-option>
      <a-option value="abstract">摘要</a-option>
      <a-option value="publication_number">公开号</a-option>
      <a-option value="inventors">发明人</a-option>
      <a-option value="ipc_class">IPC分类号</a-option>
      <a-option value="publication_year">公开年份</a-option>
      <a-option value="application_year">申请年份</a-option>
    </a-select>
    <a-input-search v-model:value="searchText" :style="{ width: '500px', margin: '-15px' }"
      placeholder="Please enter something" @search="SearchData" search-button />
  </a-space>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { postSearch} from '../api';
import type { Search,Item,Aggregations} from '../api';
import { eventBus } from '../eventBus';

const SendAggregations = (aggregations:Aggregations) => {
  eventBus.emit('eventForSelect', aggregations);
};

const SendItems = (items:Item[]) => {
  eventBus.emit('eventForCard', items);
};

// 选中的搜索类别
const selectedOption = ref('keywords');
// 输入框的值
const searchText = ref('');

// 正确使用 reactive
const postData = reactive<Search>({
  keywords: null,
  publication_number: null,
  inventors: null,
  ipc_class: null,
  abstract: null,
  publication_year: null,
  application_year: null,
  page: 1,
  size: 10
});

// 监听 selectedOption 和 searchText 变化
watch([selectedOption, searchText], () => {
  postData[selectedOption.value] = searchText.value;
});

// 登录逻辑
const SearchData = async () => {
  try {
    const response = await postSearch(postData);
    console.log('查询成功，返回的数据:', response.aggregations);
    SendAggregations(response.aggregations);
    SendItems(response.items);
  } catch (error) {
    console.error('查询失败:', error);
  }
};


defineOptions({
  name: 'Search'
});
</script>

<style scoped lang="less"></style>
