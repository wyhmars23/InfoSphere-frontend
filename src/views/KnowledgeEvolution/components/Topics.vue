<template>
  <div class="topics" v-for="item in items" :key="item.key">
    <a :href="`/SankeyDiagram/${item.title}`">
      <a-image width="200px" :src="item.src" :title="item.title" :description="item.description" :preview=false
        footerPosition="outer" style="vertical-align: top;" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义模拟数据
const items = ref(
  [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
    key: `key-${i}`,
    src: "https://pic3.zhimg.com/v2-fe67b60f575992ea22ddfb6b7bfcb306_r.jpg", // 替换为实际图片 URL
    title:   `T${i}_to_T${i+1}`,
    description: `Time period${i}`
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
