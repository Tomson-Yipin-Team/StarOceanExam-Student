import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/forget',
    component: () => import('@/views/forget/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 考试页面
  {
    path: '/exam',
    hidden: false,
    component: () => import('@/views/examination/test/index.vue')
  },
  // 成绩分析页面
  {
    path: '/analysis-detail',
    hidden: true,
    component: () => import('@/views/analyse/detail/index')
  },
  // 考生须知和人脸识别页面
  {
    path: '/examination-Notice',
    hidden: true,
    component: () => import('@/views/examination/joyexam/index')
  },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  {
    path: '/examination',
    component: Layout,
    redirect: '/examination/wait',
    name: 'Exam',
    meta: { title: '考试中心', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'wait',
        name: 'Wait',
        component: () => import('@/views/examination/wait/index'),
        meta: { title: '待参加的考试', icon: 'table' }
      },
      {
        path: 'finish',
        name: 'Finish',
        component: () => import('@/views/examination/finish/index'),
        meta: { title: '已结束的考试', icon: 'tree' }
      }
    ]
  },
  // {
  //   path: '/grzx',
  //   component: Layout,
  //   redirect: '/grzx/wdbj',
  //   name: 'grzx',
  //   meta: {
  //     title: '个人中心',
  //     icon: 'nested'
  //   },
  //   // children: [
  //   //   {
  //   //     path: 'wdbj',
  //   //     component: () => import('@/views/nested/menu1/index'),
  //   //     name: '我的班级',
  //   //     meta: { title: '我的班级' }
  //   //   },
  //   //   {
  //   //     path: 'cjfx',
  //   //     component: () => import('@/views/nested/menu1/menu1-1/index'),
  //   //     name: '成绩分析',
  //   //     meta: { title: '成绩分析' }
  //   //   },
  //   //   {
  //   //     path: 'jbzl',
  //   //     component: () => import('@/views/nested/personal/index'),
  //   //     name: '基本资料',
  //   //     meta: { title: '基本资料' }
  //   //   }
  //   // ]

  // },
  {
    path: '/class',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Class',
      component: () => import('@/views/classroom/index'),
      meta: { title: '我的班级', icon: 'el-icon-chat-dot-round' }
    }]
  },
  {
    path: '/analysis',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Analysis',
      component: () => import('@/views/analyse/index'),
      meta: { title: '成绩分析', icon: 'el-icon-s-data' }
    }]
  },
  {
    path: '/information',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Information',
      component: () => import('@/views/personal/index'),
      meta: { title: '基本资料', icon: 'el-icon-s-custom' }
    }]
  }
]

export const asyncRoutes = [
  {
    path: '/ceshi',
    component: Layout,
    children: [
      {
        path: 'admin',
        component: () => import('@/views/ceshi/1/index'),
        meta: { title: '提交反馈', icon: 'el-icon-s-check', roles: ['admin'] }
      },
      {
        path: 'zhu',
        component: () => import('@/views/ceshi/2/index'),
        meta: { title: 'zhu', icon: 'el-icon-s-check', roles: ['admin'] }
      }
    ]
  },
  // 404 页面必须放置在最后一个页面
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
