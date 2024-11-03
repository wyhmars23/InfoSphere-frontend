<template>
  <div class="topics" v-for="item in items" :key="item.key">
    <a :href="`/SankeyDiagram?id=${item.title}`">
      <a-image width="200px" :src="item.src" :title="item.title" :description="item.description" :preview=false
        footerPosition="outer" style="vertical-align: top;" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义模拟数据
const items = ref(
  [1, 2, 3, 4, 5, 6].map(i => ({
    key: `key-${i}`,
    src: 'https://via.placeholder.com/200', // 替换为实际图片 URL
    title: `Item ${i}`,
    description: `Description for Item ${i}`
  }))
);

defineOptions({
  name: 'Topics'
});
</script>

<style scoped lang="less">
.topics {
  display: flex;
  width: 25%;
  margin-bottom: 50px;
}
</style>
