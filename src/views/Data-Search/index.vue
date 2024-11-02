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
    <div class="bottom">
      <a-pagination :total="200" show-page-size />
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
  height: 180px;
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
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid rgb(2, 86, 253);
  }


  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.bottom {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
