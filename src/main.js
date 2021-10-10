import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Axios from 'axios';
import ConteudoHome from './components/Home/ConteudoHome'
import ConteudoClientes from './components/Clientes/ConteudoClientes'
import ConteudoVeiculos from './components/Veiculos/ConteudoVeiculos'
import ConteudoAlugueis from './components/Alugueis/ConteudoAlugueis'

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
    },
    {
      path: '/veiculos',
      component: ConteudoVeiculos
    },
    {
      path: '/alugueis',
      component: ConteudoAlugueis
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
