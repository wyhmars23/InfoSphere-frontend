<template>
  <div class="head">
    <div class="title">
      <span style="color: aliceblue">科技信息资源汇聚与智能分析平台</span>
    </div>
    <button class="long-button" @click="navigateTo2('/Data-storage')"
      >文档存储入口</button
    >
    <button class="long-button" @click="navigateTo1('/Data-Search')"
      >数据检索入口</button
    >
  </div>
  <div class="bottom"></div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const navigateTo1 = (path: string) => {
    router.push(path);
  };

  const navigateTo2 = (path: string) => {
    router.push(path);
  };
</script>

<style scoped lang="less">
  .head {
    display: flex;
    flex-direction: column;
    align-items: center; /* 垂直居中子元素 */
    justify-content: center; /* 水平居中子元素 */
    width: 100%;
    height: 630px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./科技风背景.jpg');
  }

  .bottom {
    display: flex;
    justify-content: center; /* 水平居中（如果需要的话） */
    align-items: center; /* 垂直居中（如果需要的话） */
    width: 100%;
    height: 57px;
    background-color: rgb(91, 85, 85);
  }

  .title {
    width: 100%;
    padding: 0 100px; /* 调整padding以适配中心对齐 */
    margin-top: -80px;
    margin-bottom: 80px;
    text-align: center;
    font-family: '微软雅黑', serif; /* 确保字体名称正确，通常不需要引号 */
    font-size: 60px;
    font-weight: bold;
  }

  .long-button {
    background-color: #9d9595;
    color: white;
    padding: 10px 20px;
    margin: 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 400px;
    transition: background-color 0.3s;
  }

  .long-button:hover {
    background-color: #666666;
  }
</style>
