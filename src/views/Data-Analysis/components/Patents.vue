<template>
  <div class="page">
    <h1>通过专利筛选</h1>
    <div class="information"><span class="title">title专利题目：</span></div>
    <div class="information"
      ><span class="title">application_num专利申请编号：</span></div
    >
    <div class="information"
      ><span class="title">application_date专利申请时间：</span></div
    >
    <div class="information"
      ><span class="title">public_num专利出版编号：</span></div
    >
    <div class="information"
      ><span class="title">public_date专利出版时间：</span></div
    >
    <div class="information"
      ><span class="title">type_num专利分类号：</span></div
    >
    <div class="information"
      ><span class="title">application_person专利申请人：</span></div
    >
    <div class="information"
      ><span class="title">invent_person专利发明人：</span></div
    >
    <div class="information"
      ><span class="title">proxy_institution代理机构：</span></div
    >
    <div class="information"
      ><span class="title">proxy_person代理人：</span></div
    >
    <div class="information"
      ><span class="title">province_code省份代码：</span></div
    >
    <div class="information"><span class="title">abstract专利摘要：</span></div>
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
