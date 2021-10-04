<template>
<div>
  <caixa-pesquisa/>
  <result-table/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'

export default {
  name: 'conteudo-clientes',
  components: { 
    CaixaPesquisa,
    ResultTable
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
