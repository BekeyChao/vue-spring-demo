import Vue from 'vue'
import Router from 'vue-router'

// 加载组件，如果需要懒加载请参阅文档
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'

Vue.use(Router)

// routes要求为一个数组，path指定路由，component指定组件，更多配置及懒加载请参阅文档
export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
