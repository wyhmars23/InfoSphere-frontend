<!-- eslint-disable prettier/prettier -->
<template>
  <div id="app">
    <main>
      <span class="menu-demo">
        <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
          breakpoint="xl"
        >
          <a-sub-menu key="0">
            <template #icon>
              <IconApps />
            </template>
            <template #title>结果筛选</template>
            <a href="#/"><a-menu-item key="0_0">基金</a-menu-item></a>
            <a href="#/Journals"><a-menu-item key="0_1">期刊</a-menu-item></a>
            <a href="#/Conferences"
              ><a-menu-item key="0_2">会议</a-menu-item></a
            >
            <a href="#/Patents"><a-menu-item key="0_3">专利</a-menu-item></a>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon>
              <IconBug />
            </template>
            <template #title>可视化发展</template>
            <a href="#/AuthorStatistics"
              ><a-menu-item key="1_0">作者统计图</a-menu-item></a
            >
            <a href="#/InstitutionStatisticsGraph"
              ><a-menu-item key="1_1">机构统计图</a-menu-item></a
            >
            <a href="#/KeywordStatisticsGraph"
              ><a-menu-item key="1_2">关键词统计图</a-menu-item></a
            >
            <a href="#/KeywordCloudGraph"
              ><a-menu-item key="1_3">关键词词云图</a-menu-item></a
            >
            <a href="#/FrontierSankeyDiagram"
              ><a-menu-item key="1_4">前沿桑基图</a-menu-item></a
            >
            <a href="#/KeywordFunctionalIdentification"
              ><a-menu-item key="1_5">关键词功能识别</a-menu-item></a
            >
            <a href="#/KeywordFunctionalEvolutionPath"
              ><a-menu-item key="1_6">关键词功能演化路径</a-menu-item></a
            >
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

<script lang="ts" setup >
  import { ref, computed } from 'vue';
  import { IconApps, IconBug } from '@arco-design/web-vue/es/icon';
  import Funds from './components/Funds.vue';
  import Journals from './components/Journals.vue';
  import Conferences from './components/Conferences.vue';
  import Patents from './components/Patents.vue';
  import AuthorStatistics from './components/Author-Statistics.vue';
  import InstitutionStatisticsGraph from './components/Institution-Statistics-Graph.vue';
  import KeywordStatisticsGraph from './components/Keyword-Statistics-Graph.vue';
  import KeywordCloudGraph from './components/Keyword-Cloud-Graph.vue';
  import FrontierSankeyDiagram from './components/Frontier-Sankey-Diagram.vue';
  import KeywordFunctionalIdentification from './components/Keyword-Functional-Identification.vue';
  import KeywordFunctionalEvolutionPath from './components/Keyword-Functional-Evolution-Path.vue';

  const routes = {
    '/': Funds,
    '/Journals': Journals,
    '/Conferences': Conferences,
    '/Patents': Patents,
    '/AuthorStatistics': AuthorStatistics,
    '/InstitutionStatisticsGraph': InstitutionStatisticsGraph,
    '/KeywordStatisticsGraph': KeywordStatisticsGraph,
    '/KeywordCloudGraph': KeywordCloudGraph,
    '/FrontierSankeyDiagram': FrontierSankeyDiagram,
    '/KeywordFunctionalIdentification': KeywordFunctionalIdentification,
    '/KeywordFunctionalEvolutionPath': KeywordFunctionalEvolutionPath,
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) as keyof typeof routes || '/'] || null;

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
