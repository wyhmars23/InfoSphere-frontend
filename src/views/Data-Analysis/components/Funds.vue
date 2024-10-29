<template>
  <div class="page">
    <h1>通过基金筛选</h1>
    <div class="information"><span class="title">title基金题目：</span></div>
    <div class="information"><span class="title">author作者：</span></div>
    <div class="information"
      ><span class="title">completeAbstractZh全部中文摘要：</span></div
    >
    <div class="information"
      ><span class="title">abstractZh中文摘要：</span></div
    >
    <div class="information"
      ><span class="title">abstractEn英文摘要：</span></div
    >
    <div class="information"
      ><span class="title">keywordsZh中文关键词：</span></div
    >
    <div class="information"
      ><span class="title">keywordsEn英文关键词：</span></div
    >
    <div class="information"
      ><span class="title">StartDate开始时间：</span></div
    >
    <div class="information"><span class="title">EndDate结束时间：</span></div>
    <div class="information"
      ><span class="title">projectType基金类型：</span></div
    >
    <div class="information"
      ><span class="title">projectLevel项目等级：</span></div
    >
    <div class="information"
      ><span class="title">projectTypeStandard基金所属项目系列：</span></div
    >
    <div class="information"
      ><span class="title">projectDetailUrl基金项目公示网址：</span></div
    >
    <div class="information"
      ><span class="title">authorTitle作者职称：</span></div
    >
    <div class="information"
      ><span class="title">authorState作者所在省份：</span></div
    >
    <div class="information"
      ><span class="title">authorCity作者所在城市：</span></div
    >
    <div class="information"><span class="title">funding基金数额：</span></div>
    <div class="information"
      ><span class="title">applyDomain基金所属领域：</span></div
    >
    <div class="information"
      ><span class="title">authorOrganization作者所在机构：</span></div
    >
    <div class="information"><span class="title">country国家：</span></div>
    <div class="information"
      ><span class="title">applyYear基金申请时间：</span></div
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
