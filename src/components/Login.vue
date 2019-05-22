<template>
  <div id="login">
    用户名：
    <input type="text" name="username" id="username" v-model="user.username">
    <br>密码：
    <input type="text" name="password" id="password" v-model="user.password">
    <br>
    <input type="button" value="提交" @click="login">
  </div>
</template>
<script>
import api from './api/api';
export default {
  // name = 'Login',
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
        api.login(this.user);
    }
  }
};
</script>