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
      <item-result>
        <td>0001</td>
        <td>Felipe Ribeiro Bezerra</td>
        <td>Gol</td>
        <td>Wolkswagen</td>
        <td>Vermelho</td>
        <td>NRT-8362</td>
      </item-result>
    </table>
  </div>
</template>

<script>
import ItemResult from './ItemResult'
export default {
  name: 'result-table',
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
