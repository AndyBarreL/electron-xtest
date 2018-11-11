import Vue from 'vue'
import Router from 'vue-router'
import System from '../components/System.vue'
import Cyclin from '../components/Cyclincs.vue'
import Nonbinary from '../components/Nonbinary.vue'
import Other from '../components/Other.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/cyclin',
      name: 'Cyclin',
      component: Cyclin
    },
    {
      path: '/nonbinary',
      name: 'Nonbinary',
      component: Nonbinary
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
