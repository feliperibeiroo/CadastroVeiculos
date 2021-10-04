<template>
  <div id="master">
    <table id="results-table">
      <tr class="cabecalho">
        <th class="id">ID</th>
        <th class="nome">Nome completo</th>
        <th class="rua">Rua</th>
        <th class="cidade">Cidade</th>
        <th class="estado">Estado</th>
        <th></th>
      </tr>
      <item-result>
        <td>0001</td>
        <td>Felipe Ribeiro Bezerra</td>
        <td>Rua Rui Barbosa</td>
        <td>Teresina</td>
        <td>Piauí</td>
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
  text-align: left;
  border-collapse: collapse;
}

td {
  text-align: left;
  background-color: #ccd7f3;
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

th.nome {
  width:30%;
}

th.rua {
  width:20%;
}

th.cidade {
  width:15%;
}

th.estado {
  width:10%;
}

</style>
