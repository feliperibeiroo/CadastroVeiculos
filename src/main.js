import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ConteudoHome from './components/Home/ConteudoHome'
import ConteudoClientes from './components/Clientes/ConteudoClientes'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: ConteudoHome
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/clientes',
      component: ConteudoClientes
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
