<template>
  <a-space direction="horizontal" size="large">
    <a-select :style="{width:'100px'}" placeholder="Please select ...">
      <a-option>Beijing</a-option>
      <a-option>Shanghai</a-option>
      <a-option>Guangzhou</a-option>
      <a-option disabled>Disabled</a-option>
    </a-select>
    <a-input-search :style="{width:'400px', margin:'-15px'}" placeholder="Please enter something" search-button/>
  </a-space>
</template>
<script setup lang="ts">
defineOptions({
  name: 'Search'
});
</script>

<style scoped lang="less">

</style>
