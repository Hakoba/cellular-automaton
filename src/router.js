import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Second from './views/Second-stage.vue'

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
   
  ]
})
