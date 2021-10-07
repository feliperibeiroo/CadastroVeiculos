<template>
<div id="master">
  <div id="sub-title">
    Pesquisar Aluguéis
  </div>
  <caixa-pesquisa @pesquisar="atualizarAlugueis"/>
  <result-table :alugueis="alugueis"/>
  <rodape/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'
import api from '../../services/api.js'

export default {
  name: 'conteudo-clientes',
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape
  },
  data: function () {
    return {
      alugueis: []
    }
  },
  methods: {
    atualizarAlugueis () {
      api
        .get("/alugueis")
        .then((res) => {
            this.alugueis = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    }
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
