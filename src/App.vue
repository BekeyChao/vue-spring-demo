<template>
  <!-- 这里的Html写的比较丑，是(技术有限)为了布局结构更清晰一些 -->
  <div id="app" style="height:600px">
    <!-- element的布局 v-if:根据返回值决定是否渲染  -->
    <el-container v-if="isLogin" class="main-container" >
      <el-header >
        <!-- header组件 -->
        <Header></Header>
      </el-header>
      <el-container>
        <!-- 导航组件 -->
        <Nav></Nav>
        <el-main>
          <!-- 这里放置的是路由的页面 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 登陆组件，v-if:根据返回值决定是否渲染 -->
    <Login v-if="!isLogin"></Login>
  </div>
</template>

<script>
  import Nav from './components/nav.vue'
  import Header from './components/header.vue'
  import Login from './pages/login.vue'

  export default {
    components: {
      // ES6简写语法 Nav:Nav
      Nav,
      Header,
      Login
    },
    name: 'app',
    computed: {
      isLogin () {
        // 读取全局状态，获取用户是否登陆，决定渲染状态
        return this.$store.state.login.isLogin
      }
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  .main-container {
    height: 100%;
    border: 1px solid #eee;
    margin: 10px 50px 0 50px;
  }
  /* 加上红色边框看出布局 */
  .el-container, .el-aside {
    border: 1px solid red;
  }
</style>
