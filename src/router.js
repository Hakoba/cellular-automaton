import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Pass from './views/Pass.vue'
import Second from './views/Second-stage.vue'
import Valid from './components/Val.vue'
<<<<<<< HEAD
import City from './views/City.vue'
import Rules from './views/Rules.vue'
=======
import Excel from './views/Xlsx.vue'
import Pass from './views/Pass.vue'
>>>>>>> 1ca5c8aee536d34d43ed4dbfbe65047e75ad5ef5
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
     name: 'first',
      component: Pass,
      created: () => {console.log('something')}
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/third',
      name: 'validation',
      component: Valid
    },
   

   
  ]
})
