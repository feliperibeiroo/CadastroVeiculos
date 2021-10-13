<template>
<div id="master">
  <div id="sub-title">
        Pesquisar Veículos
  </div>
    <caixa-pesquisa @pesquisar="atualizarVeiculos"/>
    <result-table :veiculos="veiculos"/>
    <rodape btnName="Cadastrar Veículo" />
    <modal-cadastro-veiculo @ok="cadastrarVeiculo" ref="modalCadastro"/>
    <SuccessAlert v-if="statusCadastro.sucesso" variant="success" show="2">Cadastro efetuado com sucesso!</SuccessAlert>
    <SuccessAlert v-if="statusCadastro.falha" variant="danger" show="2">Falha no cadastro!</SuccessAlert>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'
import api from '../../services/api.js'
import ModalCadastroVeiculo from './ModalCadastroVeiculo.vue'
import SuccessAlert from '../SuccessAlert.vue'

export default {
  name: 'conteudo-veiculos',
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape,
    ModalCadastroVeiculo,
    SuccessAlert
  },
  data: function () {
    return {
      veiculos: [],
      statusCadastro : {
        sucesso: false,
        falha: false
      }
    }
  },

  methods: {
    showModalCadastro () {
      this.statusCadastro.sucesso = false;
      this.statusCadastro.falha = false;
      this.$refs.modalCadastro.showModal()
    },
    atualizarVeiculos (entradas) {
      function filtro (data) {
          if (entradas.id!='')
            data = data.filter(entrada => (entrada.id.toString() == entradas.id));
          
          if (entradas.modelo!='')
            data = data.filter(entrada => (entrada.modelo.toString().toLowerCase().includes(entradas.modelo.toLowerCase())));

          if (entradas.cor!='')
            data = data.filter(entrada => (entrada.cor.toString().toLowerCase().includes(entradas.cor.toLowerCase())));

          if (entradas.marca!='')
            data = data.filter(entrada => (entrada.marca.toString().toLowerCase().includes(entradas.marca.toLowerCase())));
          
          if (entradas.placa!='')
            data = data.filter(entrada => (entrada.placa.toString().toLowerCase().includes(entradas.placa.toLowerCase())));
          
          if (entradas.proprietario!='')
            data = data.filter(entrada => (entrada.proprietario.nome.toString().toLowerCase().includes(entradas.proprietario.toLowerCase())));

          return data;
      }

      api
      .get("/veiculos")
      .then((res) => {
          this.veiculos = filtro(res.data)
      })
      .catch((error) => {
          console.log(error);
          this.veiculos = []
      });
    },
    cadastrarVeiculo (entradas) {
      api
      .post("/veiculos/cadastrar", entradas)
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

#rodape {
  position: fixed;
  height: 50px;
  bottom: 0;
}
</style>
