<template>
  <div id="searchbox">
      <input-field id="id-veiculo-input" titulo="ID veículo"></input-field>
      <input-field id="modelo-input" titulo="Modelo"></input-field>
      <input-field id="cor-input" titulo="Cor"></input-field>
      <input-field id="marca-input" titulo="Marca"></input-field>
      <input-field id="placa-input" titulo="Placa"></input-field>
      <input-field id="proprietario-input" titulo="Proprietário"></input-field>
      <button-search>Pesquisar</button-search>
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
