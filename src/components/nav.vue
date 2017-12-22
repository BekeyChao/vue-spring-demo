<template>
    <el-aside>
      <!-- :router='true' 意思是导航中 index属性将指定路由地址 -->
        <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true">
            <el-menu-item index="/page1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航1</span>
            </el-menu-item>
            <el-menu-item index="/page2">
                <i class="el-icon-setting"></i>
                <span slot="title">导航2</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
  export default {
    data: function () {
      return {
        // 默认激活的路由地址
        defaultActive: '/page1'
      }
    },
    methods: {
      // 打开事件
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      // 关闭事件
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
