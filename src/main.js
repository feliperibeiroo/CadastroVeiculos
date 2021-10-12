import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import RouterHome from './RouterHome'
import RouterClientes from './RouterClientes'
import RouterVeiculos from './RouterVeiculos'
import RouterAlugueis from './RouterAlugueis'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: RouterHome
    },
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/clientes',
      component: RouterClientes
    },
    {
      path: '/veiculos',
      component: RouterVeiculos
    },
    {
      path: '/alugueis',
      component: RouterAlugueis
    }
  ]
});

console.log(router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')