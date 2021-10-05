<template>
<div>
  <caixa-pesquisa/>
  <result-table/>
  <rodape/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from './Rodape'

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
div {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
