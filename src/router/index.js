import { createRouter, createWebHistory } from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

// Create <RouterLayout> component.
const RouterLayout = createRouterLayout(layout => {
  // Resolves a layout component with layout type string.
  return import('@/views/layouts/' + layout + '.vue')
})

const routes = [
  {
    path: '/',

    // Pass <RouterLayout> as the route component
    component: RouterLayout,

    // All child components will be applied with corresponding layout component
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'login',
        component: Login
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
