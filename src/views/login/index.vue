<template>
  <div class="container">
    <div class="login-wrap">
      <h1>科技信息资源汇聚与智能分析平台</h1>
      <form @submit.prevent="login">
        <label for="email">用户名:</label>
        <input id="email" v-model="email" type="email" required />
        <br />
        <label for="password">密码:</label>
        <input id="password" v-model="password" type="password" required />
        <br />
        <button type="submit">登录</button>
        <button type="button" @click="register">注册</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // 登录逻辑
        // console.log(`登录: 用户名：${this.email}, 密码：${this.password}`);
        // 这里可以添加登录的API请求
      },
      register() {
        // 注册逻辑
        // console.log(`注册: 用户名：${this.email}, 密码：${this.password}`);
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        fetch('/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email, password: this.password }),
        }).then((response) => response.json());
        //   .then((data) => console.log(data))
        //   .catch((error) => console.error(error));
      },
    },
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

  input[type='email'],
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
