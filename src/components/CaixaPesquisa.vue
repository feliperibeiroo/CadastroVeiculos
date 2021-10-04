<template>
  <div id="searchbox">
      <input-field id="id-cliente-input" titulo="ID cliente"></input-field>
      <input-field id="nome-input" titulo="Nome completo"></input-field>
      <input-field id="rua-input" titulo="Rua"></input-field>
      <input-field id="cidade-input" titulo="Cidade"></input-field>
      <input-field id="estado-input" titulo="Estado"></input-field> 
  </div>
</template>

<script>
import InputField from './InputField.vue'

export default {
  name: 'caixa-pesquisa',
  components: {
    InputField
  }
}
</script>

<style scoped>
#searchbox {
  padding: 10px 15px;
  display: grid;
  grid-gap: 10px 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  grid-column-end: 8;
}
</style>
