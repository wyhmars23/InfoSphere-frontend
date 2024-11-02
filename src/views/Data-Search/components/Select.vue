<template>
  <a-select v-model="value" :style="{ width: '300px' }" placeholder="Please select ..." multiple :max-tag-count="5">
    <a-option v-for="item in data" :key="item.key" :value="item.value" :label="item.label" />
  </a-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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

<style scoped lang="less"></style>

