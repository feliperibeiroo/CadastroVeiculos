<template>
  <tr>
    <slot></slot>
    <td>
      <div class="td-img">
        <img src="./../../assets/editar.svg" alt="">
        <img src="./../../assets/excluir.svg" alt="">
      </div>
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
  text-align: left;
  background-color: #ccd7f3;
  padding-left: 15px;
}

tr {
  height: 35px;
  padding-left: 10px;
}


img {
  right: 0;
  padding-left: 25px;
  justify-self: center;
}
</style>
