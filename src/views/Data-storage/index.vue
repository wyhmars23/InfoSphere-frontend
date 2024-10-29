<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <main>
      <div class="container">
        <h1>数据存储</h1>

        <!-- 查询关键词 -->
        <div class="section">
          <label for="query-location">查询位置：</label>
          <select id="query-location" v-model="search.queryLocation">
            <option value="title">标题</option>
            <option value="keyword">关键词</option>
            <option value="abstract">摘要</option>
          </select>
          <label for="query-string">检索式：</label>
          <input id="query-string" v-model="search.queryString" type="text" />
        </div>

        <!-- 作者信息 -->
        <div class="section">
          <label for="author-name">作者：</label>
          <input id="author-name" v-model="search.authorName" type="text" />
          <label for="author-affiliation">作者单位：</label>
          <input
            id="author-affiliation"
            v-model="search.authorAffiliation"
            type="text"
          />
        </div>

        <!-- 年份信息 -->
        <div class="section">
          <label for="publication-from">发布时间：从</label>
          <input
            id="publication-from"
            v-model.number="search.publicationFrom"
            type="number"
            placeholder="年"
          />
          <label for="publication-to">到</label>
          <input
            id="publication-to"
            v-model.number="search.publicationTo"
            type="number"
            placeholder="年"
          />
        </div>

        <!-- 项目来源 -->
        <div class="section">
          <label for="project-source">项目来源：</label>
          <select id="project-source" v-model="search.projectSource">
            <option value="">请选择</option>
            <option value="regional-science">地区科学基金项目</option>
            <option value="innovation-group">创新研究群体科学基金</option>
            <option value="international-cooperation"
              >国际(地区)合作与交流项目</option
            >
            <option value="national-excellent">国家杰出青年科学基金</option>
            <option value="overseas-cooperation"
              >海外及港澳学者合作研究项目</option
            >
            <option value="general-project">面上项目</option>
            <option value="youth-science">青年科学基金项目</option>
            <option value="outstanding-youth">优秀青年科学基金项目</option>
            <option value="major-project">重大项目</option>
            <option value="major-research">重大研究计划</option>
            <option value="key-project">重点项目</option>
            <option value="special-fund">专项基金项目</option>
          </select>
        </div>

        <!-- 所属学科 -->
        <div class="section">
          <label>所属学科：</label>
          <select id="discipline" v-model="search.discipline">
            <option value="">请选择</option>
            <option value="biology">生物学</option>
            <option value="aquaculture">水产畜牧学</option>
            <option value="plant-protection">植物保护园艺学</option>
            <option value="veterinary">兽医学</option>
            <option value="developmental-psychology">发展心理学</option>
            <option value="crop-science">作物学</option>
            <option value="forestry">林学</option>
            <option value="grassland">草学</option>
            <option value="educational-psychology">教育心理学</option>
            <option value="engineering-psychology">工程心理学</option>
            <option value="business-management">工商管理</option>
            <option value="sports-psychology">运动心理学</option>
          </select>
        </div>

        <!-- 语言分类 -->
        <div class="section">
          <label>语言分类：</label>
          <div class="radio-group">
            <label
              ><input
                v-model="search.language"
                type="radio"
                name="language"
                value="chinese"
              />
              中文</label
            >
            <label
              ><input
                v-model="search.language"
                type="radio"
                name="language"
                value="english"
              />
              英文</label
            >
          </div>
        </div>

        <!-- 提交按钮 -->
        <div class="section">
          <button @click="submitSearch">存储</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';

  // interface SearchParent {
  //   title: string; // 标题
  //   abstract: string; // 摘要
  //   applicant: string; // 申请人
  //   publicationNumber: string; // 公开号
  //   publicationDate: string; // 公开日
  //   applicationNumber: string; // 申请号
  //   applicationDate: string; // 申请日
  //   publicationType: string; // 公开类型
  //   mainClaim: string; // 首项权利要求
  //   mainClaimTranslation: string; // 首权翻译
  //   independentClaims: string[]; // 独立权利要求
  //   dependentClaims: string[]; // 从属权利要求
  //   technicalEffectSentence: string; // 技术功效句
  //   technicalEffectPhrase: string; // 技术功效短语
  //   ipcMainClassification: string; // IPC主分类
  //   priorityCountry: string; // 优先权国别
  //   firstPublicationNumber: string; // 首次公开号
  //   firstPublicationDate: string; // 首次公开日
  //   authorizationAnnouncementNumber: string; // 授权公告号
  // }

  const search = ref({
    queryLocation: 'title',
    queryString: '',
    authorName: '',
    authorAffiliation: '',
    publicationFrom: '',
    publicationTo: '',
    projectSource: '',
    discipline: '',
    language: '未选择',
  });

  // 计算属性确保年份逻辑正确
  const isYearValid = computed(() => {
    return search.value.publicationFrom <= search.value.publicationTo;
  });

  // 方法：构建查询字符串
  function buildSearchQuery() {
    return `查询位置: ${search.value.queryLocation}\n检索式: ${search.value.queryString}\n作者: ${search.value.authorName}\n作者单位: ${search.value.authorAffiliation}\n发布时间从: ${search.value.publicationFrom} 到: ${search.value.publicationTo}\n项目来源: ${search.value.projectSource}\n所属学科: ${search.value.discipline}\n语言: ${search.value.language}`;
  }

  // 方法：提交搜索
  function submitSearch() {
    if (!isYearValid.value) {
      alert('结束年份应大于或等于开始年份');
      return;
    }

    const searchQuery = buildSearchQuery();
    alert(searchQuery);
    // 这里可以添加发送请求的逻辑
  }

  // 监视search对象，以便在数据变化时执行其他操作
  // watch(
  //   search,
  //   (newVal, oldVal) => {
  //     // 可以在这里添加逻辑，比如更新UI或发送请求
  //   },
  //   { deep: true }
  // );
</script>

<style scoped lang="less">
  /* 确保body和html的高度为100%，这是可选的，但有助于确保header的正确布局 */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%;
    /* 使Vue应用的根元素高度为100% */
    display: flex;
    /* 使用flex布局 */
    flex-direction: column;
    /* 设置为列方向，从上到下排列子元素 */
  }

  main {
    flex-grow: 1;
    /* 使main元素占据剩余的空间 */
    padding: 80px;
    /* 内边距 */
    text-align: center;
    /* 文本居中 */
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    /* Ensures that elements will wrap if needed */
  }

  .section label {
    width: 150px;
    margin-right: 10px;
    font-weight: bold;
    display: inline-block;
    /* Ensures labels are aligned properly */
  }

  .section input[type='text'],
  .section input[type='number'],
  .section select {
    flex: 1;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    /* Ensures padding and border are included in the element's total width */
  }

  .section input[type='text']:focus,
  .section input[type='number']:focus,
  .section select:focus {
    border-color: #007bff;
    outline: none;
  }

  .radio-group {
    display: flex;
    align-items: center;
  }

  .radio-group label {
    margin-right: 15px;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
