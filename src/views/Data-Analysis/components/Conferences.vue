<template>
  <div class="page">
    <h1>通过会议筛选</h1>
    <div class="information"><span class="title">title标题：</span></div>
    <div class="information"><span class="title">authors作者：</span></div>
    <div class="information"><span class="title">organ作者机构：</span></div>
    <div class="information"><span class="title">abstract摘要：</span></div>
    <div class="information"><span class="title">keywords关键词：</span></div>
    <div class="information"
      ><span class="title">meeting_name会议名称：</span></div
    >
    <div class="information"
      ><span class="title">meeting_date会议召开时间：</span></div
    >
    <div class="information"
      ><span class="title">meeting_addr会议召开地点：</span></div
    >
    <div class="information"
      ><span class="title">meeting_type_num会议分类号：</span></div
    >
  </div>
</template>

<script setup lang="ts"></script>

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
    justify-content: center; /* 水平居中 */
    padding: 20px;
  }

  .information {
    display: flex;
    width: auto;
    padding: 50px 100px;
    font-size: 20px;
  }
</style>
