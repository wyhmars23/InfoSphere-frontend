<template>
  <div ref="chartDom" class="tree-chart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts/core';
import { TreeChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { ECharts } from 'echarts/core';

echarts.use([TreeChart, TooltipComponent, CanvasRenderer]);

const chartDom = ref<HTMLElement | null>(null);
let myChart: ECharts | null = null;

// 模拟数据
const data = {
  name: "Root",
  children: [
    {
      name: "Frontend",
      children: [
        { name: "Vue.js", collapsed: true },
        { name: "React", collapsed: true },
        { name: "Angular" }
      ]
    },
    {
      name: "Backend",
      children: [
        { name: "Node.js" },
        { name: "Python", children: [{ name: "Django" }, { name: "Flask" }] },
        { name: "Java" }
      ]
    }
  ]
};

onMounted(() => {
  if (chartDom.value) {
    myChart = echarts.init(chartDom.value);

    myChart.setOption({
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      series: [
        {
          type: 'tree',
          data: [data],
          top: '1%',
          left: '7%',
          bottom: '1%',
          right: '20%',
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 9
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },
          emphasis: {
            focus: 'descendant'
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
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

<style scoped>
.tree-chart {
  width: 100%;
  height: 600px;
}
</style>
