<template>
  <div id="master">
    <div id="sub-title">
      Pesquisar Clientes
    </div>
    <caixa-pesquisa @pesquisar="atualizarClientes"/>
    <result-table :clientes="pessoas"/>
    <modal-cadastro-cliente @ok="cadastrarCliente" ref="modalCadastro"/>
    <SuccessAlert v-if="statusCadastro.sucesso" variant="success" show="2">Cadastro efetuado com sucesso!</SuccessAlert>
    <SuccessAlert v-if="statusCadastro.falha" variant="danger" show="2">Falha no cadastro!</SuccessAlert>
  </div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ModalCadastroCliente from './ModalCadastroCliente'
import ResultTable from './ResultTable.vue'
import api from '../../services/api.js'
import SuccessAlert from '../SuccessAlert.vue'

export default {
  name: 'conteudo-clientes',
  data: function () {
    return {
      statusCadastro : {
        sucesso: false,
        falha: false
      },
      pessoas: []
    }
  },
  components: {
    CaixaPesquisa,
    ResultTable,
    ModalCadastroCliente,
    SuccessAlert
  },
  methods: {
    showModalCadastro () {
      this.statusCadastro.sucesso = false;
      this.statusCadastro.falha = false;
      this.$refs.modalCadastro.showModal()
    },
    atualizarClientes (entradas) {
      function filtro (data) {
          if (entradas.id!='')
            data = data.filter(entrada => (entrada.id.toString() == entradas.id));
          
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
    },
    cadastrarCliente (entradas) {
      console.log(entradas)
      api
      .post("/pessoas/cadastrar", entradas)
      .then((res) => {
        console.log(res)
          this.statusCadastro.sucesso = true;
      })
      .catch((error) => {
          console.log(error);
          this.statusCadastro.falha = true;
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

</style>
