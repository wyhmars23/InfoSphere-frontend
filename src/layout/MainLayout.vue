<template>
  <div class="header">
    <div class="menu-demo">
      <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']" title="科技信息资源汇聚与智能分析平台">
        <a-menu-item key="0" :style="{ marginRight: '12px', fontSize: '20px', color: 'white' }" disabled>
          科技信息资源汇聚与智能分析平台
        </a-menu-item>
        <a-menu-item key="1" @click="navigateTo('/entrance')">
          数据检索
        </a-menu-item>
        <a-menu-item key="2" @click="navigateTo('/KnowledgeEvolution')">
          知识演化
        </a-menu-item>
        <a-menu-item key="3" @click="navigateTo('/TechnicalPedigree')">
          技术谱系
        </a-menu-item>
        <a-menu-item key="4" @click="navigateTo('')">
          科学知识角色转变
        </a-menu-item>
        <a-menu-item key="5" @click="navigateTo('')">
          知识问答
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// 获取 router 实例
const router = useRouter();

// 定义导航函数
const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;

  .menu-demo {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
