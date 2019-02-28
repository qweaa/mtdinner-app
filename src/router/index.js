import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import { getToken } from '@/utils/auth' // getToken from cookie

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/login', name: 'login', component: () => import('@/pages/login/index.vue')},
    {path: '/register', name: 'register', component: () => import('@/pages/register/index.vue')},

    {path: '/', name: 'home', component: () => import('@/pages/home/index.vue')},
  ],
})

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, form , next)=>{
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    }else if (!store.getters.name) {
      store.dispatch('GetInfo').then(res => { // 拉取用户信息
        next()
      }).catch((err) => {
        store.dispatch('FedLogOut').then(() => {
          // Message.error(err || 'Verification failed, please login again')
          next({ path: '/login' })
        })
      })
    } else {
      if(!store.getters.rules){
        store.dispatch('GetRules').then(res => { // 拉取规则
          next()
        }).catch((err) => {
          store.dispatch('GetRules').then(res => { // 拉取规则
            next()
          }).catch((err) => {next()})
        })
      }else{
        next()
      }
    }
  }else{
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

export default router