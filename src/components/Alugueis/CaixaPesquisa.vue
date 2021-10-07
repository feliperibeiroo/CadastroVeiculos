<template>
  <div id="searchbox">
      <input-field id="id-veiculo" titulo="ID veiculo"></input-field>
      <input-field id="nome-prop" titulo="Nome do proprietário"></input-field>
      <input-field id="modelo" titulo="Modelo"></input-field>
      <input-field id="marca" titulo="Marca"></input-field>
      <input-field id="cor" titulo="Cor"></input-field>
      <input-field id="nome-cliente" titulo="Nome do cliente"></input-field>
      <input-field id="placa" titulo="Placa"></input-field>
      <button-search @pesquisar="$emit('pesquisar')">Pesquisar</button-search>
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

#id-veiculo {
  grid-column-start: 1;
  grid-column-end: 2;
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
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 1;
}

#marca {
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row: 1;
}

button {
  grid-column-start:7;
  grid-column-end: 8;
  grid-row: 2;
}
</style>
