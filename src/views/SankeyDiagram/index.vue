<template>
  <div class="page">
    <div ref="picture" class="picture"></div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { useRoute } from 'vue-router';
import { postPicture } from './api';

const picture = ref<HTMLElement | null>(null);
const route = useRoute();

const getPicture = async () => {
  const id = route.params.id as string;
  console.log("请求 ID:", id);

  try {
    const response = await postPicture(id+".html");
    console.log("API 响应数据:", response);

    if (!response) {
      console.error("API 返回数据为空");
      return;
    }

    if (!picture.value) {
      console.error("picture 组件未挂载");
      return;
    }

    // 解析 HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(response, "text/html");

    // 插入 body 内的 HTML
    picture.value.innerHTML = doc.body.innerHTML;

    // 先加载 echarts.min.js
    const echartsScript = doc.querySelector("script[src*='echarts.min.js']")as HTMLScriptElement | null;;
    if (echartsScript) {
      const newScript = document.createElement("script");
      newScript.src = echartsScript.src;
      newScript.async = false;
      newScript.onload = () => {
        console.log("echarts.min.js 加载完成");

        // **再执行剩下的 script**
        const scripts = doc.querySelectorAll("script:not([src*='echarts.min.js'])");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          newScript.textContent = script.textContent;
          document.body.appendChild(newScript);
          document.body.removeChild(newScript);
        });
      };
      document.body.appendChild(newScript);
    }

  } catch (error) {
    console.error("获取 HTML 失败:", error);
  }
};


onMounted(() => {
  getPicture();
});
</script>

<style scoped lang="less">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100vw;
  height: auto;
  padding-top:50px ;
  background-color: rgb(248, 247, 247);
}

.picture {
  display: flex;
  width: 100%;
  height: 1000px;
}
</style>
