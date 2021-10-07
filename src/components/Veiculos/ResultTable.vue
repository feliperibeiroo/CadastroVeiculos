<template>
  <div id="master">
    <table id="results-table">
      <tr class="cabecalho">
        <th class="id">ID</th>
        <th class="proprietario">Proprietário</th>
        <th class="modelo">Modelo</th>
        <th class="marca">Marca</th>
        <th class="cor">Cor</th>
        <th class="placa">Placa</th>
        <th></th>
      </tr>
      <item-result v-for="veiculo in veiculos" :key="veiculo.id">
        <td>{{veiculo.id}}</td>
        <td>{{veiculo.proprietario.nome}}</td>
        <td>{{veiculo.modelo}}</td>
        <td>{{veiculo.marca}}</td>
        <td>{{veiculo.cor}}</td>
        <td>{{veiculo.placa}}</td>
      </item-result>
    </table>
  </div>
</template>

<script>
import ItemResult from './ItemResult'
export default {
  name: 'result-table',
  props: ['veiculos'],
  components:{
    ItemResult
  }
}
</script>

<style scoped>
#master {
  padding: 15px;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}

td {
  text-align: left;
}

tr {
  height: 35px;
  padding-left: 10px;
}

td, th {
  padding-left: 15px;
}

th {
  background-color: #fff;
}

tr:nth-child(even) {background: #becffa}
tr:nth-child(odd) {background: #e3ebff}

</style>
