<template>
  <a-space direction="horizontal" size="large">
    <a-select :style="{ width: '100px' }" placeholder="Please select ...">
      <a-option>序号</a-option>
      <a-option>标题</a-option>
      <a-option>申请人</a-option>
      <a-option>公开号</a-option>
      <a-option>公开日</a-option>
      <a-option>申请日</a-option>
      <a-option>专利类型</a-option>
      <a-option>公开国别</a-option>
      <a-option>IPC</a-option>
      <a-option>CPC</a-option>
    </a-select>
    <a-input-search :style="{ width: '500px', margin: '-15px' }" placeholder="Please enter something" search-button />
  </a-space>
</template>
<script setup lang="ts">
defineOptions({
  name: 'Search'
});
</script>

<style scoped lang="less"></style>
