<template>
<div id="master">
  <div id="sub-title">
        Pesquisar Aluguéis
  </div>
  <caixa-pesquisa/>
  <result-table/>
  <rodape/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'

export default {
  name: 'conteudo-clientes',
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape
  }
  
}
</script>

<style scoped>
#master {
  height: 100%;
  display: contents;
}

#sub-title {
  height: 30px;
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  padding-left: 15px;
}

#rodape {
  position: fixed;
  height: 35px;
  bottom: 0;
}
</style>
