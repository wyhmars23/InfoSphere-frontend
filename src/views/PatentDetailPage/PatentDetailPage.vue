<template>
  <q-page class="patent-detail-page" padding>
    <div v-if="patentData" class="content">
      <q-card class="patent-card">
        <q-card-section class="info-group">
          <h4>基本信息</h4>
          <div class="info-item">
            <h5>公布标题:</h5>
            <p>{{ patentData.publication_title }}</p>
          </div>
          <div class="info-item">
            <h5>公布号:</h5>
            <p>{{ patentData.publication_number }}</p>
          </div>
          <div class="info-item">
            <h5>公布日期:</h5>
            <p>{{ patentData.publication_date }}</p>
          </div>
          <!-- <div class="info-item">
            <h5>授权日期:</h5>
            <p>{{ patentData.grant_date }}</p>
          </div> -->
          <!-- 其他基本信息 -->
        </q-card-section>

        <q-card-section class="info-group">
          <h4>申请人信息</h4>
          <div class="info-item">
            <h5>发明人:</h5>
            <p>{{ patentData.authors.join(', ') }}</p>
          </div>
          <div class="info-item">
            <h5>申请人/专利权人:</h5>
            <p>{{ patentData.organizations.join(', ') }}</p>
          </div>
        </q-card-section>

        <q-card-section class="info-group">
          <h4>专利信息</h4>
          <div class="info-item">
            <h5>申请号:</h5>
            <p>{{ patentData.application_number }}</p>
          </div>
          <div class="info-item">
            <h5>申请类型:</h5>
            <p>{{ patentData.application_type }}</p>
          </div>
          <div class="info-item">
            <h5>申请时间:</h5>
            <p>{{ patentData.application_date }}</p>
          </div>
          <div class="info-item">
            <h5>申请状态:</h5>
            <p>{{ patentData.application_status }}</p>
          </div>
        </q-card-section>

        <div class="info-group">
          <h4>分类信息</h4>
          <div class="info-item">
            <h5>CPC分类号/IPC分类号:</h5>
            <p v-for="code in patentData.CPC_IPC" :key="code">{{ code }}</p>
          </div>
          <div class="info-item">
            <h5>权利要求:</h5>
            <p>{{ patentData.claims }}</p>
          </div>
          <!-- 其他分类信息 -->
        </div>

        <div class="info-group">
          <h4>摘要</h4>
          <div class="info-item">
            <h5>英文摘要:</h5>
            <p>{{ patentData.abstract }}</p>
          </div>
          <div v-if="patentData.abstract_zh">
            <h5>中文摘要:</h5>
            <p>{{ patentData.abstract_zh }}</p>
          </div>
        </div>

        <!-- 其他信息部分可以继续添加 -->
      </q-card>
    </div>
    <div v-else> Loading patent details... </div>
  </q-page>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';

  // 定义一个接口来描述专利信息的形状
  interface Patent {
    publication_title: string[];
    publication_number: string[];
    publication_date: string[];
    grant_date: string[];
    application_number: string[];
    application_type: string[];
    application_date: string[];
    application_status: string[];
    authors: string[];
    organizations: string[];
    CPC_IPC: string[];
    abstract: string[];
    descriptions: string[];
    claims: string[];
    abstract_zh: string[];
    descriptions_zh: string[];
    claims_zh: string[];
  }

  const route = useRoute();
  const queryParams = route.query;
  const patentData = ref<Patent | null>(null);

  const fetchPatent = async () => {
    try {
      const url = `http://localhost:8000/getPatentById?Id=${encodeURIComponent(
        queryParams.id as string
      )}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'same-origin',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      patentData.value = (await response.json()) as Patent;
    } catch (error) {
      console.error('Error fetching patent:', error);
    }
  };

  onMounted(fetchPatent);
</script>

<style scoped>
  .patent-detail-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
    /* 设置最小高度为视窗高度 */
    background-color: #f5f5f5;
    /* 轻微灰色背景，提升层次感 */
  }

  .patent-card {
    width: 100%;
    display: flex;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    /* 增加圆角 */
    overflow: hidden;
    /* 防止内容溢出 */
    margin-top: 30px;
    /* 增加顶部间距 */
    background-color: #fff;
    /* 白色背景 */
  }

  .info-group {
    border-bottom: 1px solid #eee;
    /* 组之间添加分隔线 */
    padding-bottom: 15px;
    /* 组内内容底部间距 */
    margin-bottom: 25px;
    /* 组外部底部间距 */
    display: block;
    width: 100%;
  }

  .info-item {
    margin-bottom: 10px;
  }

  .info-item h5 {
    color: #333;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    /* 标题加粗 */
  }

  .info-item p {
    color: #666;
    line-height: 1.6;
    font-size: large;
    /* 调整行高，增加可读性 */
  }

  .abstract-section {
    margin-bottom: 30px;
    /* 摘要部分底部间距 */
  }

  h4 {
    color: cornflowerblue;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
  }
</style>
