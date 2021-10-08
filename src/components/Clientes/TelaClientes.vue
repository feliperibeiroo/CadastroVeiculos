<template>
  <div id="master">
    <div id="sub-title">
      Pesquisar Clientes
    </div>
    <caixa-pesquisa @pesquisar="atualizarClientes"/>
    <result-table :clientes="pessoas"/>
    <rodape btnName="Cadastrar Cliente"/>
    <modal-cadastro-cliente/>
  </div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ModalCadastroCliente from './ModalCadastroCliente'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'
import api from '../../services/api.js'

export default {
  name: 'conteudo-clientes',
  data: function () {
    return {
      pessoas: []
    }
  },
  components: {
    CaixaPesquisa,
    ResultTable,
    Rodape,
    ModalCadastroCliente
  },
  methods: {
    atualizarClientes (entradas) {
      function filtro (data) {
          if (entradas.id!='')
            data = data.filter(entrada => (entrada.id.toString().toLowerCase().includes(entradas.id.toLowerCase())));
          
          if (entradas.nome!='')
            data = data.filter(entrada => (entrada.nome.toString().toLowerCase().includes(entradas.nome.toLowerCase())));

          if (entradas.rua!='')
            data = data.filter(entrada => (entrada.endereco.rua.toString().toLowerCase().includes(entradas.rua.toLowerCase())));

          if (entradas.cidade!='')
            data = data.filter(entrada => (entrada.endereco.cidade.toString().toLowerCase().includes(entradas.cidade.toLowerCase())));
          
          if (entradas.estado!='')
            data = data.filter(entrada => (entrada.endereco.estado.toString().toLowerCase().includes(entradas.estado.toLowerCase())));

          return data;
      }

      api
      .get("/pessoas")
      .then((res) => {
          this.pessoas = filtro(res.data)
      })
      .catch((error) => {
          console.log(error);
          this.pessoas = []
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
  height: 50px;
  bottom: 0;
}
</style>
