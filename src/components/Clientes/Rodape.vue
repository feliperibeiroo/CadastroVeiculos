<template>
  <div id="rodape">
    <div id="commands">
      <a class="back">
        <img src="../../assets/arrow-left.svg" alt="">
      </a>
      <a class="front">
        <img src="../../assets/arrow-right.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'caixa-pesquisa'
}
</script>

<style scoped>
#rodape {
  display: grid;
  grid-template-columns: auto 40px 40px 40px;
  background-color: #dcdcdc;
  height: 50px;
  width: 86%;
  position: fixed;
  bottom: 0;
}



</style>
