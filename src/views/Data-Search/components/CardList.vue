<template>
  <a-space direction="vertical" size="large">
    <a href="/Data-Analysis" style="text-decoration: none;">
      <a-descriptions
        title="User Info"
        :column="{ xs: 1, md: 3, lg: 4 }"
        :style="{ width: '800px', border: '1px solid gray', borderRadius: '4px', padding: '16px' }"
      >
        <a-descriptions-item
          v-for="item in data"
          :key="item.label"
          :label="item.label"
          :span="item.span ?? 1"
        >
          <a-tag>{{ item.value }}</a-tag>
        </a-descriptions-item>
      </a-descriptions>
    </a>
  </a-space>
</template>

<script setup lang="ts">

const data = [
  { label: 'Name', value: 'Socrates', span: 3 },
  { label: 'Mobile', value: '123-1234-1234' },
  { label: 'Residence', value: 'Beijing' },
  { label: 'Hometown', value: 'Beijing' },
  { label: 'Address', value: 'Yingdu Building, Zhichun Road, Beijing' }
];

defineOptions({
  name: 'cardList'
});
</script>

<style scoped lang="less"></style>
