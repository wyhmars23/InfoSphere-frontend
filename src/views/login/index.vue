<template>
  <div class="container">
    <div class="login-wrap">
      <h1>科技信息资源汇聚与智能分析平台</h1>
      <form @submit.prevent="login">
        <label for="email">用户名:</label>
        <input id="email" v-model="username" type="username" required />
        <br />
        <label for="password">密码:</label>
        <input id="password" v-model="password" type="password" required />
        <br />
        <button type="button" @click="login">登录</button>
        <button type="button" @click="register">注册</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';
import { postLogin , postRegister } from './api';
import { useRouter } from 'vue-router';

const router = useRouter();

// 定义响应式数据
const username = ref('');
const password = ref('');

const postData = computed(() => ({
  username: username.value,
  password: password.value
}));

// 登录逻辑
const login = async () => {
  try {
    const response = await postLogin(postData.value);
    console.log('登录成功，返回的数据:', response); // 直接访问 response
    localStorage.setItem('token', response.token); // 保存 token
    localStorage.setItem('isAuthenticated', 'true'); //设置登录状态
    router.push('/entrance');
  } catch (error) {
    console.error('登录失败:', error);
    alert("登录失败，请重试");
  }
};

// 注册逻辑
const register = async () => {
  try {
    const response = await postRegister(postData.value);
    console.log('注册成功:', response.message);
    alert("注册成功");
  } catch (error) {
    console.error('注册失败:', error);
    alert("注册失败，请重试");
  }
};
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  background-image: url('./1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap {
  text-align: center;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.1);
  border-radius: 10px;
  opacity: 0.7;
}

h1 {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type='username'],
input[type='password'] {
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 0 1px #03a9f4;
  padding: 10px 15px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color: #03a9f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  margin: 10px 10px;
}

button:hover {
  background-color: #0279bd;
}

/* 移除重复的:hover样式 */
</style>
