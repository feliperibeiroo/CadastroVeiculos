<template>

  <div id="searchbox">
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.id" id="id-cliente-input" titulo="ID cliente"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.nome" id="nome-input" titulo="Nome completo"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.rua" id="rua-input" titulo="Rua"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.cidade" id="cidade-input" titulo="Cidade"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.estado" id="estado-input" titulo="Estado"></input-field>
      <button-search @pesquisar="$emit('pesquisar', entradas)">Pesquisar</button-search>
  </div>
</template>

<script>
import InputField from './../InputField.vue'
import buttonSearch from './../ButtonSearch.vue'

export default {
  name: 'caixa-pesquisa',
  data: function () {
    return {
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
    InputField,
    buttonSearch
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

#id-cliente-input {
  grid-column-start: 1;
  grid-column-end: 2;
}

#nome-input {
  grid-column-start:2;
  grid-column-end: 8;
}

#rua-input {
  grid-column-start:1;
  grid-column-end: 4;
}

#cidade-input {
  grid-column-start:4;
  grid-column-end: 6;
}

#estado-input {
  grid-column-start:6;
  grid-column-end: 7;
}

button {
  grid-column-start:7;
  grid-column-end: 8;
}

</style>
