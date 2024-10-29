<template>
  <div class="page">
    <h1>通过期刊筛选</h1>
    <div class="information"><span class="title">title文章标题：</span></div>
    <div class="information"><span class="title">authors文章作者：</span></div>
    <div class="information"
      ><span class="title">institution作者机构：</span></div
    >
    <div class="information"><span class="title">abstract摘要：</span></div>
    <div class="information"><span class="title">keywords关键词：</span></div>
    <div class="information"
      ><span class="title">type_num中图分类号：</span></div
    >
    <div class="information"><span class="title">journal期刊名称：</span></div>
    <div class="information"><span class="title">issn Issn号：</span></div>
    <div class="information"><span class="title">date发表日期：</span></div>
    <div class="information"><span class="title">fund文章支撑项目：</span></div>
    <div class="information"
      ><span class="title">downloads下载次数：</span></div
    >
    <div class="information"><span class="title">filename文章编号：</span></div>
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
