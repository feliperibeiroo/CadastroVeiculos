<template>
  <tr>
    <slot></slot>
    <td>
      <a href="">
        <img src="./../../assets/editar.svg" alt="">
      </a>
      <a href="">
        <img src="./../../assets/excluir.svg" alt="">
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'item-result'
}
</script>

<style scoped>
td {
  width: 10%;
  text-align: left;
  background-color: #ccd7f3;
  padding-left: 15px;
}

tr {
  height: 35px;
  padding-left: 10px;
}

a {
  margin-left: 10px;
}
</style>
