import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pass from './views/Pass.vue'
import Second from './views/Second-stage.vue'
import Valid from './components/Val.vue'
import Excel from './views/Xlsx.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
     name: 'first',
      component: Home,
      created: () => {console.log('something')}
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/third',
      name: 'validation',
      component: Valid
    },
    {
      path: '/excel',
      name: 'Excel',
      component: Excel
    },


   
  ]
})
