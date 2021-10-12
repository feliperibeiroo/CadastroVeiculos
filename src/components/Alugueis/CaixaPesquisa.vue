<template>
  <div id="searchbox">
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.id" id="id-aluguel" titulo="ID aluguel"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.idVeiculo" id="id-veiculo" titulo="ID veiculo"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.nomeProp" id="nome-prop" titulo="Nome do proprietário"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.modelo" id="modelo" titulo="Modelo"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.marca" id="marca" titulo="Marca"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.cor" id="cor" titulo="Cor"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.nomeCliente" id="nome-cliente" titulo="Nome do cliente"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.placa" id="placa" titulo="Placa"></input-field>
      <button-search @pesquisar="$emit('pesquisar', entradas)">Pesquisar</button-search>
  </div>
</template>

<script>
import InputField from './../InputField.vue'
import ButtonSearch from './../ButtonSearch.vue'

export default {
  name: 'caixa-pesquisa',
  components: {
    InputField,
    ButtonSearch
  },
  data: function () {
    return {
      entradas: {
        id: "",
        idVeiculo: "",
        nomeProp: "",
        modelo: "",
        marca: "",
        cor: "",
        nomeCliente: "",
        placa: ""
      }
    }
  }
}

</script>

<style scoped>
#master-container {
  display: flex;
  flex-direction: column;
}

#searchbox {
  margin: 15px;
  border: 1px solid #828282;
  border-radius: 8px;
  padding: 10px 15px;
  display: grid;
  grid-gap: 10px 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px;
}

#id-aluguel {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
}

#id-veiculo {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 1;
}

#nome-prop {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 2;
}

#nome-cliente {
  grid-column-start: 4;
  grid-column-end: 7;
  grid-row: 2;
}

#modelo {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 1;
}

#marca {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row: 1;
}

button {
  grid-column-start:7;
  grid-column-end: 8;
  grid-row: 2;
}
</style>
