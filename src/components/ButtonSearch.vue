<template>
  <button type="button" @click="$emit('pesquisar')"><slot></slot></button>
</template>

<script>
export default {
  name: 'button-search'
}
</script>

<style scoped>
button {
  margin: 19px 0px 10px;
  border-radius: 5px;
  height: 22px;
  border: none;
  background: linear-gradient(90deg, rgba(32,88,233,1) 100%, rgba(28,100,197,1) 100%);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(28,100,197,0.5); 
  box-shadow: 1px 1px 3px 1px rgba(28,100,197,0.5);
  color: var(--fundo-branco-menus)
}
</style>
