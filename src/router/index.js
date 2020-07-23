import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '@/store'
import { setTitle } from '@/lib/tools' // 设置浏览器头部标题
// 引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 这个样式必须引入
Vue.use(VueRouter)
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    NProgress.start() // 启动Progress
    const browserHeaderTitle = to.meta.title
    store.commit('SET_BROWSERHEADERTITLE', {
        browserHeaderTitle: browserHeaderTitle
    })
    next()
})
router.afterEach(() => {
    NProgress.done() // 结束Progress
    setTimeout(() => {
        const browserHeaderTitle = store.getters.browserHeaderTitle
        setTitle(browserHeaderTitle)
    }, 0)
})
export default router
