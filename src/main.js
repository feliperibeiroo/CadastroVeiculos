import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import TelaHome from './components/Home/TelaHome'
import TelaClientes from './components/Clientes/TelaClientes'
import TelaVeiculos from './components/Veiculos/TelaVeiculos'
import TelaAlugueis from './components/Alugueis/TelaAlugueis'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: TelaHome
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/clientes',
      component: TelaClientes
    },
    {
      path: '/veiculos',
      component: TelaVeiculos
    },
    {
      path: '/alugueis',
      component: TelaAlugueis
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
