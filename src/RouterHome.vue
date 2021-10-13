<template>
  <div id="corpo-home">
    <barra-lateral/>
    <barra-titulo/>
    <div id="conteudo">
      <home ref="routerElement"/>
    </div>
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral'
import BarraTitulo from './components/BarraTitulo'
import Home from './components/Home/TelaHome.vue'

export default {
  name: 'router-home',
  components: {
    BarraLateral,
    BarraTitulo,
    Home
  },
  methods: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  --roxo-basico: #040341;
  --fundo-branco-menus: #EBEBEB;
  --texto-hover: #000530;
  --hover-item: #92b4e2;
  font-family: 'Red Hat Text', 'Arial';
  box-sizing: border-box;
  overflow-x: hidden;
}

#corpo-home {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 90px auto;
  grid-template-areas: "n h"
                       "n c";
}

barra-lateral {
  grid-area: n;
}

barra-titulo {
  grid-area: h;
}

#conteudo {
  grid-area: c;
}
</style>
