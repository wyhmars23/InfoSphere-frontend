<template>
  <div class="page">
    <h1>专利基本信息</h1>
    <div v-for="([key, value], index) in dataStore.basicInfoData" :key="index">
      <div class="information" v-if="value !== '' && value !== null && value !== undefined">
        <div style="padding: 2.2px 20px;">
          <svg t="1740566756422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2109" width="20" height="20">
          <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1296db" p-id="2110"></path>
        </svg>
        </div>
        <div>
        {{ key }}: {{ value }}
      </div>
      </div>
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
  padding: 20px 80px;
  font-size: 23px;
  align-items: top;
}
</style>
