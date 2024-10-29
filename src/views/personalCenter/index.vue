<template>
  <div id="app">
    <div class="personal-center">
      <div class="user-info">
        <div class="avatar">
          <img :src="user.avatar" alt="用户头像" class="img" />
        </div>
        <div class="info">
          <h2>{{ user.name }}</h2>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <button @click="editProfile">编辑资料</button>
      <button @click="logout">退出登录</button>
    </div></div
  >
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface User {
    name: string;
    email: string;
    avatar: string;
  }

  const user = ref<User>({
    name: '张三',
    email: 'zhangsan@example.com',
    avatar: 'path/to/your/avatar.jpg', // 替换为你的头像路径
  });

  const editProfile = () => {
    alert('编辑资料功能待实现');
  };

  const logout = () => {
    alert('退出登录功能待实现');
    // 这里可以添加退出登录的逻辑，比如清除本地存储的用户信息等
  };
</script>

<style scoped>
  /* 确保body和html的高度为100%，这是可选的，但有助于确保header的正确布局 */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%; /* 使Vue应用的根元素高度为100% */
    display: flex; /* 使用flex布局 */
    flex-direction: column; /* 设置为列方向，从上到下排列子元素 */
  }

  .personal-center {
    width: 80%;
    height: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #1e1d1d;
    border-radius: 8px;
  }

  main {
    flex-grow: 1; /* 使main元素占据剩余的空间 */
    padding: 15px; /* 内边距 */
    text-align: center; /* 文本居中 */
    display: flex; /* 使用flex布局 */
    flex-direction: column; /* 设置为列方向，从上到下排列子元素 */
  }
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .img {
    width: 100px; /* 设置一个合适的宽度 */
    height: 100px; /* 高度与宽度相同，确保图片为正方形 */
    border-radius: 50%; /* 设置border-radius为50% */
    margin-right: 20px;
    object-fit: cover; /* 确保图片内容适应容器，不会变形 */
  }

  .info h2 {
    margin: 0;
    font-size: 1.5em;
  }

  .info p {
    margin: 5px 0;
    color: #666;
  }

  button {
    margin-right: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #409eff;
    color: white;
    cursor: pointer;
    outline: none;
  }

  button:hover {
    background-color: #66b1ff;
  }
</style>
