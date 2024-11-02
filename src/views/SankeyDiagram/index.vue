<template>
  <div class="page">
    <div ref="chartDom" class="picture"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { SankeyChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import type { ECharts } from 'echarts/core';

echarts.use([GridComponent, SankeyChart, CanvasRenderer]);

const chartDom = ref<HTMLElement | null>(null);
let myChart: ECharts | null = null;

onMounted(() => {
  if (chartDom.value) {
    myChart = echarts.init(chartDom.value);

    // 模拟数据
    const data = {
      nodes: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' }
      ],
      links: [
        { source: 'A', target: 'B', value: 5 },
        { source: 'A', target: 'C', value: 3 },
        { source: 'B', target: 'D', value: 8 },
        { source: 'C', target: 'D', value: 2 },
        { source: 'D', target: 'E', value: 6 }
      ]
    };

    // 设置图表配置
    myChart.setOption({
      title: {
        text: 'Sankey Diagram'
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'sankey',
          data: data.nodes,
          links: data.links,
          emphasis: {
            focus: 'adjacency'
          },
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: '#fbb4ae'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: '#b3cde3'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: '#ccebc5'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 3,
              itemStyle: {
                color: '#decbe4'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            }
          ],
          lineStyle: {
            curveness: 0.5
          }
        }
      ]
    });
  }
});

onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>

<style scoped lang="less">
.page {
  display: flex;
  flex-direction: column;
  width: 1264px;
  height: auto;
  background-color: rgb(248, 247, 247);
}

.picture {
  display: flex;
  width: 600px;
  height: 400px;
  margin: 20px auto;
}
</style>
