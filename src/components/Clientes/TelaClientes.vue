<template>
  <div id="master">
    <div id="sub-title">
      Pesquisar Clientes
    </div>
    <caixa-pesquisa @pesquisar="atualizarClientes"/>
    <result-table :clientes="pessoas"/>
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
  data: function () {
    return {
      pessoas: [],
      entradas: {
        id: "",
        nome: "",
        rua: "",
        cidade: "",
        estado: ""
      }
    }
  },
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape
  },
  methods: {
    atualizarClientes (entradas) {
      console.log(entradas);
        api
        .get("/pessoas")
        .then((res) => {
            this.pessoas = res.data;
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
