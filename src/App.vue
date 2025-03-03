<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import MainLayout from './layout/MainLayout.vue';

const route = useRoute();
const showNavbar = computed(() => route.path !== '/login' && !route.path.startsWith('/Data-Analysis'));

</script>

<template>
  <div class="layout">
    <MainLayout v-if="showNavbar" />
    <RouterView />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
