<template>
<div>
  <barra-lateral/>
  <div id="corpo">
    <barra-titulo/>
    <conteudo-home/>
  </div>
</div>
</template>

<script>
import ConteudoHome from './components/ConteudoHome'
import BarraLateral from './components/BarraLateral'
import BarraTitulo from './components/BarraTitulo'

export default {
  name: 'home',
  components: {
    BarraLateral,
    BarraTitulo,
    ConteudoHome
  }
}
</script>

<style>
#corpo {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
}
</style>
