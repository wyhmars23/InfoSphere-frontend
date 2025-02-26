<template>
  <div class="page">
    <h1>标准与价值评估</h1>
    <div v-for="([key, value], index) in dataStore.assessmentData" :key="index">
      <span class="information" v-if="value !== '' && value !== null && value !== undefined">
        {{ key }}: {{ value }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../../../stores/useDataStore';
const dataStore = useDataStore();

</script>

<style scoped lang="less">
.page {
  display: flex;
  flex-direction: column;
  width: 1264px;
  height: auto;
  background-color: rgb(248, 247, 247);
}

h1 {
  display: flex;
  font-size: 40px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgb(83, 156, 239);
  justify-content: center;
  /* 水平居中 */
  padding: 20px;
}

.information {
  display: flex;
  width: auto;
  padding: 50px 20px;
  font-size: 20px;
}
</style>
