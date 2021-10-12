<template>
  <div id="master">
    <table id="results-table">
      <tr class="cabecalho">
        <th class="id">ID</th>
        <th class="id-veiculo">ID Veículo</th>
        <th class="nome-pro">Nome do proprietário</th>
        <th class="modelo">Modelo</th>
        <th class="marca">Marca</th>
        <th class="cor">Cor</th>
        <th class="nome-cliente">Nome do cliente</th>
        <th class="placa">Placa</th>
        <th></th>
      </tr>
      <item-result v-for="aluguel in alugueis" :key="aluguel.id">
        <td>{{aluguel.id}}</td>
        <td>{{aluguel.idVeiculo}}</td>
        <td>{{aluguel.proprietario}}</td>
        <td>{{aluguel.modelo}}</td>
        <td>{{aluguel.marca}}</td>
        <td>{{aluguel.cor}}</td>
        <td>{{aluguel.cliente}}</td>
        <td>{{aluguel.placa}}</td>
      </item-result>
    </table>
  </div>
</template>

<script>
import ItemResult from './ItemResult'
export default {
  name: 'result-table',
  props: ['alugueis'],
  components:{
    ItemResult
  }
}
</script>

<style scoped>
#master {
  padding: 15px;
  width: 100%;
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

th.id {
  width:10%;
}

th {
  background-color: #fff;
}

tr:nth-child(even) {background: #becffa}
tr:nth-child(odd) {background: #e3ebff}

</style>
