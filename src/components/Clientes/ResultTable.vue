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
      <item-result v-for="cliente in clientes" :key="cliente.id">
        <td>{{cliente.id}}</td>
        <td>{{cliente.nome}}</td>
        <td>{{cliente.endereco.rua}}</td>
        <td>{{cliente.endereco.cidade}}</td>
        <td>{{cliente.endereco.estado}}</td>
      </item-result>
    </table>
  </div>
</template>

<script>
import ItemResult from './ItemResult'
export default {
  name: 'result-table',
  props: ['clientes'],
  components:{
    ItemResult
  }
}
</script>

<style scoped>
#master {
  padding: 15px;
  width: 100%;
  display: flex;
  overflow-y: auto;
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

th {
  background-color: #fff;
}

tr:nth-child(even) {background: #becffa}
tr:nth-child(odd) {background: #e3ebff}


</style>
