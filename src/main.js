import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home/Home'
import Clientes from './components/Home/Clientes'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/clientes',
      component: Clientes
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
