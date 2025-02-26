<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
    <main>
      <span class="menu-demo">
        <a-menu :style="{ width: '200px', height: '100%' }" :default-open-keys="['0']" :default-selected-keys="['0_0']"
          breakpoint="xl">
          <a-sub-menu key="0">
            <template #icon>
              <IconApps />
            </template>
            <template #title>结果筛选</template>
            <a href="#/"><a-menu-item key="0_0">专利基本信息</a-menu-item></a>
            <a href="#/ApplicantInfo"><a-menu-item key="0_1">申请人信息</a-menu-item></a>
            <a href="#/InventorInfo"><a-menu-item key="0_2">发明人信息</a-menu-item></a>
            <a href="#/AgencyInfo"><a-menu-item key="0_3">代理与审查信息</a-menu-item></a>
            <a href="#/CitationFamilyInfo"><a-menu-item key="0_4">引证与同族信息</a-menu-item></a>
            <a href="#/PriorityPCTInfo"><a-menu-item key="0_5">优先权与PCT信息</a-menu-item></a>
            <a href="#/LegalStatus"><a-menu-item key="0_6">法律状态与有效性</a-menu-item></a>
            <a href="#/Assessment"><a-menu-item key="0_7">标准与价值评估</a-menu-item></a>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon>
              <IconBug />
            </template>
            <template #title>可视化发展</template>
            <a href="#/AuthorStatistics"><a-menu-item key="1_0">作者统计图</a-menu-item></a>
            <a href="#/InstitutionStatisticsGraph"><a-menu-item key="1_1">机构统计图</a-menu-item></a>
            <a href="#/KeywordStatisticsGraph"><a-menu-item key="1_2">关键词统计图</a-menu-item></a>
            <a href="#/KeywordCloudGraph"><a-menu-item key="1_3">关键词词云图</a-menu-item></a>
            <a href="#/FrontierSankeyDiagram"><a-menu-item key="1_4">前沿桑基图</a-menu-item></a>
            <a href="#/KeywordFunctionalIdentification"><a-menu-item key="1_5">关键词功能识别</a-menu-item></a>
            <a href="#/KeywordFunctionalEvolutionPath"><a-menu-item key="1_6">关键词功能演化路径</a-menu-item></a>
          </a-sub-menu>
        </a-menu>
      </span>
      <span class="content">
        <!-- 动态内容区 -->
        <component :is="currentView" />
      </span>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { IconApps, IconBug } from '@arco-design/web-vue/es/icon';
import BasicInfo from './components/BasicInfo.vue';
import ApplicantInfo from './components/ApplicantInfo.vue';
import InventorInfo from './components/InventorInfo.vue';
import AgencyInfo from './components/AgencyInfo.vue';
import CitationFamilyInfo from './components/CitationFamilyInfo.vue';
import PriorityPCTInfo from './components/PriorityPCTInfo.vue';
import LegalStatus from './components/LegalStatus.vue';
import Assessment from './components/Assessment.vue';
import AuthorStatistics from './components/Author-Statistics.vue';
import InstitutionStatisticsGraph from './components/Institution-Statistics-Graph.vue';
import KeywordStatisticsGraph from './components/Keyword-Statistics-Graph.vue';
import KeywordCloudGraph from './components/Keyword-Cloud-Graph.vue';
import FrontierSankeyDiagram from './components/Frontier-Sankey-Diagram.vue';
import KeywordFunctionalIdentification from './components/Keyword-Functional-Identification.vue';
import KeywordFunctionalEvolutionPath from './components/Keyword-Functional-Evolution-Path.vue';
import { useRoute } from 'vue-router';
import { useDataStore } from '../../stores/useDataStore';
import { postDetail } from './api'
const route = useRoute();


const routes = {
  '/': BasicInfo,
  '/ApplicantInfo': ApplicantInfo,
  '/InventorInfo': InventorInfo,
  '/AgencyInfo': AgencyInfo,
  '/CitationFamilyInfo': CitationFamilyInfo,
  '/PriorityPCTInfo': PriorityPCTInfo,
  '/LegalStatus': LegalStatus,
  '/Assessment': Assessment,
  '/AuthorStatistics': AuthorStatistics,
  '/InstitutionStatisticsGraph': InstitutionStatisticsGraph,
  '/KeywordStatisticsGraph': KeywordStatisticsGraph,
  '/KeywordCloudGraph': KeywordCloudGraph,
  '/FrontierSankeyDiagram': FrontierSankeyDiagram,
  '/KeywordFunctionalIdentification': KeywordFunctionalIdentification,
  '/KeywordFunctionalEvolutionPath': KeywordFunctionalEvolutionPath,
};

const currentPath = ref(window.location.hash);
const id = route.params.id;
const dataStore = useDataStore();

const searchDetail = async () => {
  try {
    const response = await postDetail(id, id);
    console.log('查询成功，返回的数据:', response);
    const Detail = Object.entries(response);
    dataStore.setData('basicInfo', Detail.slice(0, 48));  // ✅ 取索引 0 到 47
    dataStore.setData('applicantInfo', Detail.slice(48, 72));  // ✅ 取索引 48 到 71
    dataStore.setData('inventorInfo', Detail.slice(72, 80));  // ✅ 取索引 72 到 79
    dataStore.setData('agencyInfo', Detail.slice(80, 85));  // ✅ 取索引 80 到 84
    dataStore.setData('citationFamilyInfo', Detail.slice(85, 121));  // ✅ 取索引 85 到 120
    dataStore.setData('priorityPCTInfo', Detail.slice(121, 132));  // ✅ 取索引 121 到 131
    dataStore.setData('legalStatus', Detail.slice(132, 185));  // ✅ 取索引 132 到 184
    dataStore.setData('assessment', Detail.slice(185, 194));  // ✅ 取索引 185 到 193

  } catch (error) {
    console.error('查询失败:', error);
  }
}

// 组件挂载时调用
onMounted(() => {
  searchDetail();
});

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || null;

});
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
  flex-direction: row;
  /* 内边距 */
  display: flex;
}

.menu-demo {
  box-sizing: border-box;
  width: 200px;
  height: 600px;
  background-color: var(--color-neutral-2);
  display: flex;
}

.content {
  display: flex;
  width: 1264px;
  height: auto;
}

a {
  padding: 0;
}
</style>
