<template>
  <div id="corpo">
    <barra-lateral/>
    <barra-titulo/>
    <div id="conteudo">
      <router-view/>
    </div>
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral'
import BarraTitulo from './components/BarraTitulo'
export default {
  name: 'app',
  components: {
    BarraLateral,
    BarraTitulo
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
  overflow: hidden;
}

#corpo {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 220px auto;
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
  position: relative;
}
</style>
