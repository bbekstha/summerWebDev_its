import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import stock from './views/stock.vue'
import repo from './views/repo.vue'
import protectedCont from './views/protectedCont.vue'
import searchPerson from './views/searchPerson.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/stock',
      name: 'stock',
      component: stock
    },
    {
      path: '/repo',
      name: 'repo',
      component: repo
   },
    {
      path: '/protected',
      name: 'protected',
      component: protectedCont,
      meta: { requiresAuth: true }
    },
    {
      path: '/personSearch',
      name: 'personSearch',
      component: searchPerson
    }
  ]
})
