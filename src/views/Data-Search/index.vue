<template>
  <div class="page">
    <div class="head">
      <Search />
    </div>
    <div class="main">
      <div class="left">
        <selectMenu />
      </div>
      <div class="right">
        <cardList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import cardList from './components/CardList.vue';
import Search from './components/Search.vue';
import selectMenu from './components/Select.vue';
</script>

<style scoped lang="less">
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.head {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;

  .left {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgb(2, 86, 253);
  }


  .right {
    width: 75%;
    display: flex;
    padding: 1px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
