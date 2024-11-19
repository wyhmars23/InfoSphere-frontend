<template>
  <div class="header">
    <div class="menu-demo">
      <a-menu
        mode="horizontal"
        theme="dark"
        :selected-keys="[activeKey]"
        title="科技信息资源汇聚与智能分析平台"
      >
        <a-menu-item
          key="0"
          :style="{ marginRight: '12px', fontSize: '20px', color: 'white' }"
          disabled
        >
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
        <a-menu-item key="4" @click="navigateTo('/ScientificRoleChange')">
          科学知识角色转变
        </a-menu-item>
        <a-menu-item key="5" @click="navigateTo('/KnowledgeQA')">
          知识问答
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 获取路由实例
const router = useRouter();
const route = useRoute();

// 动态设置当前选中菜单项
const activeKey = ref(getKeyFromPath(route.path));

// 根据路径获取对应菜单的 key
function getKeyFromPath(path: string): string {
  switch (path) {
    case '/entrance':
      return '1';
    case '/KnowledgeEvolution':
      return '2';
    case '/SankeyDiagram':
      return '2';
    case '/TechnicalPedigree':
      return '3';
    case '/ScientificRoleChange':
      return '4';
    case '/KnowledgeQA':
      return '5';
    default:
      return '1'; // 默认选中
  }
}

// 监听路径变化，更新选中状态
watch(
  () => route.path,
  (newPath) => {
    activeKey.value = getKeyFromPath(newPath);
  }
);

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
