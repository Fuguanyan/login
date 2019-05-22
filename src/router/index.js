import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Failed from '@/components/Failed'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:'isLogin'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/failed',
      name:'Failed',
      component: Failed
    }
  ]
})
// 验证客户是否登录
router.beforeEach((to,from,next) => {
  if(to.meta === 'isLogin') {
    if(localStorage.getItem('token')) {
      next()
    } else {
      next('Failed')
    }  
  } 
  next()
})
export default router