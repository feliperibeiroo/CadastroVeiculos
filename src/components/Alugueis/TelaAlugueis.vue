<template>
<div id="master">
  <div id="sub-title">
    Pesquisar Aluguéis
  </div>
  <caixa-pesquisa @pesquisar="atualizarAlugueis"/>
  <result-table :alugueis="alugueis"/>
  <rodape btnName="Cadastrar Aluguel"/>
  <modal-cadastro-aluguel/>
</div>
</template>

<script>
import CaixaPesquisa from './CaixaPesquisa'
import ResultTable from './ResultTable.vue'
import Rodape from '../Rodape.vue'
import api from '../../services/api.js'
import ModalCadastroAluguel from './ModalCadastroAluguel.vue'

export default {
  name: 'conteudo-clientes',
  components: { 
    CaixaPesquisa,
    ResultTable,
    Rodape,
    ModalCadastroAluguel
  },
  data: function () {
    return {
      alugueis: []
    }
  },
  methods: {
    atualizarAlugueis (entradas) {
      function filtro (data) {
        if (entradas.id!='')
            data = data.filter(entrada => (entrada.id.toString() == entradas.id));
          
          if (entradas.idVeiculo!='')
            data = data.filter(entrada => (entrada.idVeiculo.toString() == entradas.idVeiculo));
          
          if (entradas.nomeProp!='')
            data = data.filter(entrada => (entrada.proprietario.toString().toLowerCase().includes(entradas.nomeProp.toLowerCase())));

          if (entradas.modelo!='')
            data = data.filter(entrada => (entrada.modelo.toString().toLowerCase().includes(entradas.modelo.toLowerCase())));

          if (entradas.marca!='')
            data = data.filter(entrada => (entrada.marca.toString().toLowerCase().includes(entradas.marca.toLowerCase())));
          
          if (entradas.cor!='')
            data = data.filter(entrada => (entrada.cor.toString().toLowerCase().includes(entradas.cor.toLowerCase())));

          if (entradas.nomeCliente!='')
            data = data.filter(entrada => (entrada.cliente.toString().toLowerCase().includes(entradas.nomeCliente.toLowerCase())));
          
          if (entradas.placa!='')
            data = data.filter(entrada => (entrada.placa.toString().toLowerCase().includes(entradas.placa.toLowerCase())));

          return data;
      }

      api
      .get("/alugueis")
      .then((res) => {
          this.alugueis = filtro(res.data)
      })
      .catch((error) => {
          console.log(error);
          this.alugueis = []
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
