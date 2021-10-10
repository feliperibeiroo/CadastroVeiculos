<template>
  <div id="master">
    <table id="results-table">
      <tr class="cabecalho">
        <th class="id-veiculo">ID Veículo</th>
        <th class="nome-pro">Nome do proprietário</th>
        <th class="modelo">Modelo do veículo</th>
        <th class="marca">Marca do veículo</th>
        <th class="cor">Cor do veículo</th>
        <th class="nome-cliente">Nome do cliente</th>
        <th class="placa">Placa do veículo</th>
        <th></th>
      </tr>
      <item-result>
        <td>0001</td>
        <td>Felipe Ribeiro Bezerra</td>
        <td>Gol</td>
        <td>Wolkswagen</td>
        <td>Vermelho</td>
        <td>Raul Dias Lopes</td>
        <td>UYT-9732</td>
      </item-result>
      <item-result>
        <td>0002</td>
        <td>Alvaro de Freitas Dias</td>
        <td>Uno</td>
        <td>Fiat</td>
        <td>Preto</td>
        <td>Raul Dias Lopes</td>
        <td>URO-3242</td>
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
