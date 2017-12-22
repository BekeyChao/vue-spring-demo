<template>
  <!-- 我不会做页面，请将就使用 -->
    <div>
      <!-- 通过$store.state.user 可以获得登陆时记录的用户 -->
      <el-button type="success" class="userIcon">{{$store.state.user.name}}</el-button>
      <el-button type="primary" @click="onLogout" round class="signout">注销</el-button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      // 从store.actions中引入方法
      ...mapActions(['logOut', 'loginFail']),
      onLogout: function () {
        this.logOut() // 退出登陆，将user重置为空
        this.loginFail()  // 设置isLogging 为false
      }
    }
  }
</script>

<style>
  .userIcon {

  }
  .signout {

  }
</style>
