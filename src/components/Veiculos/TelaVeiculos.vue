<template>
<div id="master">
  <div id="sub-title">
        Pesquisar Veículos
  </div>
    <caixa-pesquisa @pesquisar="atualizarVeiculos"/>
    <result-table :veiculos="veiculos"/>
    <rodape btnName="Cadastrar Veículo" />
    <modal-cadastro-veiculo/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'
import api from '../../services/api.js'
import ModalCadastroVeiculo from './ModalCadastroVeiculo.vue'

export default {
  name: 'conteudo-veiculos',
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape,
    ModalCadastroVeiculo
  },
  data: function () {
    return {
      veiculos: []
    }
  },

  methods: {
    atualizarVeiculos (entradas) {
      function filtro (data) {
          if (entradas.id!='')
            data = data.filter(entrada => (entrada.id.toString().toLowerCase().includes(entradas.id.toLowerCase())));
          
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
