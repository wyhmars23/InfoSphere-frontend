<template>
  <div class="page">
    <div class="header">
      <a-tabs default-active-key="1">
        <a-tab-pane v-for="item in items" :key="item.key" :title="item.title" size="large">
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="main">
      <Topics />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Topics from './components/Topics.vue';
import { ref } from 'vue';

interface Topics {
  key: string;
  title: string;
}

// const router = useRouter();
const items = ref<Topics[]>([
  { key: '1', title: 'Tab 1' },
  { key: '2', title: 'Tab 2' },
  { key: '3', title: 'Tab 3' }
]);

</script>

<style scoped lang="less">
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;

  .header {
    display: flex;
    margin: 20px 50px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    margin: 0 50px;
  }
}
</style>
