<template>
  <div id="corpo">
    <barra-lateral/>
    <barra-titulo/>
    <div id="conteudo">
      <tela-veiculos ref="routerElement"/>
    </div>
    <rodape @adicionar="adicionarNoRouter" btnName="Cadastrar Cliente"/>
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral'
import BarraTitulo from './components/BarraTitulo'
import TelaVeiculos from './components/Veiculos/TelaVeiculos.vue'
import Rodape from './components/Rodape.vue'

export default {
  name: 'app',
  components: {
    BarraLateral,
    BarraTitulo,
    Rodape,
    TelaVeiculos
  },
  methods: {
    adicionarNoRouter () {
      this.$refs.routerElement.showModalCadastro()
    }
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

#corpo {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 90px auto 50px;
  grid-template-areas: "n h"
                       "n c"
                       "n r";
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

#rodape {
  grid-area: r;
}
</style>
