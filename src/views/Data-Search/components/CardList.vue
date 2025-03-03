<template>
  <a-space direction="vertical" size="large">
    <div class="patent-card-list">
      <a-row :gutter="0">
        <a-col :span="24" v-for="(row, index) in transformedData" :key="index">
          <router-link :to="`/Data-Analysis/${row[row.length - 1]?.value}`" style="text-decoration: none;" target="_blank">
            <a-card :title="'专利标题: ' + (row[0]?.value || '未知标题')" bordered style="margin-bottom: -10px;">
              <a-descriptions>
                <a-descriptions-item v-for="(item, itemIndex) in row.slice(1,5)" :key="itemIndex" :label="item.label">
                  <a-tag>{{ item.value || '暂无数据' }}</a-tag>
                </a-descriptions-item>
              </a-descriptions>
            </a-card>
          </router-link>
        </a-col>
      </a-row>

      <!-- 如果没有数据，显示“暂无数据”提示 -->
      <div v-if="!transformedData || transformedData.length === 0" class="empty-container">
        <a-empty description="暂无数据" :image-size="200" />
      </div>
    </div>
  </a-space>
  <div class="bottom">
    <a-pagination :total="totalPages" @change=getCurrent @page-size-change=getSize show-page-size/>
  </div>
  <div style="height: 80px;"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { eventBus } from '../eventBus';
import type { Item,pages} from '../api';

const totalPages =ref<number>(0);
const PagesCondition = ref<pages>({
  page: 1,
  size: 10
});
const itemsData = ref<Item[] | null>(null);
const transformedData = ref<{ label: string; value: string | null }[][]>([]); // 存储转换后的数据


const getCurrent = (page: number) => {
  PagesCondition.value.page = page;
  callbackPages(PagesCondition.value);
}


const getSize = (size: number) => {
  PagesCondition.value.size = size;
  callbackPages(PagesCondition.value);
}

const transformPatentData = (data: Item[]): { label: string; value: string | null }[][] => {
  return data.map((item) => [
    { label: "标题", value: item.title },
    { label: "申请人", value: item.applicant },
    { label: "公开号", value: item.pub_number },
    { label: "发布日期", value: item.pub_date },
    { label: "IPC 分类", value: item.ipc },
    { label: "专利ID", value: item.id },
  ]);
};

//返回筛选数据
const callbackPages = (Page:pages ) => {
  eventBus.emit('conditionForPage', Page);
};


// 处理接收到的数据
const handleItems = (items: Item[]) => {
  itemsData.value = items;
  if (!itemsData.value) return;
  transformedData.value = transformPatentData(itemsData.value); // 存入响应式变量
};

const handleTotal = (total: number) => {
  totalPages.value = total;
}



onMounted(() => {
  // 监听 'eventForCard' 事件
  eventBus.on('eventForCard', handleItems);
  eventBus.on('eventForTotal', handleTotal);
});

onUnmounted(() => {
  // 组件销毁时取消监听，避免内存泄漏
  eventBus.off('eventForCard', handleItems);
  eventBus.off('eventForTotal', handleTotal);
});

defineOptions({
  name: 'cardList'
});
</script>

<style scoped lang="less">
.patent-card-list {
  padding-left:4%;
}

.empty-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
  /* 增大空状态区域 */
}

.bottom {
  width: 100%;
  height: 150px;
  padding-left: 20%;
  padding-bottom: 80px;
  margin-top: 30px;
  display: flex;
  align-items: center;

}
</style>
