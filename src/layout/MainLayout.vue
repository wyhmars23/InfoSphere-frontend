<template>
  <div class="header">
    <div class="menu-demo">
      <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']" title="科技信息资源汇聚与智能分析平台">
        <a-menu-item key="0" :style="{ marginRight: '12px', fontSize: '20px', color: 'white' }" disabled>
          科技信息资源汇聚与智能分析平台
        </a-menu-item>
        <a-menu-item key="1">
          <RouterLink to="/entrance">数据检索</RouterLink>
        </a-menu-item>
        <a-menu-item key="2">
          <RouterLink to="">知识演化</RouterLink>
        </a-menu-item>
        <a-menu-item key="3">
          <RouterLink to="">技术谱系</RouterLink>
        </a-menu-item>
        <a-menu-item key="4">
          <RouterLink to="">科学知识角色转变</RouterLink>
        </a-menu-item>
        <a-menu-item key="5">
          <RouterLink to="">知识问答</RouterLink>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 58px;
  display: flex;
  /* 使得header内的内容也可以flex布局 */
  align-items: center;

  .menu-demo {
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
