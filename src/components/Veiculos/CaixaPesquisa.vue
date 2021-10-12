<template>
  <div id="searchbox">
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.id" id="id-veiculo-input" titulo="ID veículo"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.modelo" id="modelo-input" titulo="Modelo"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.cor" id="cor-input" titulo="Cor"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.marca" id="marca-input" titulo="Marca"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.placa" id="placa-input" titulo="Placa"></input-field>
      <input-field @pesquisar="$emit('pesquisar', entradas)" v-model="entradas.proprietario" id="proprietario-input" titulo="Proprietário"></input-field>
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
        modelo: "",
        cor: "",
        marca: "",
        placa: "",
        proprietario: ""
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px;
}

#proprietario-input {
  grid-column-start:6;
  grid-column-end: 8;
}

button {
  grid-column-start:8;
  grid-column-end: 9;
}
</style>
