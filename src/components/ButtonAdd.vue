<template>
  <button type="button" @click="$emit('adicionar')" data-toggle="modal" data-target="#modalExemplo"><slot></slot></button>
</template>

<script>
export default {
  name: 'button-add'
}
</script>

<style scoped>
button {
  border-radius: 5px;

  height: 25px;
  width: 100%;
  border: none;
  background: linear-gradient(90deg, rgba(32,88,233,1) 100%, rgba(28,100,197,1) 100%);
  -webkit-box-shadow: 1px 1px 3px 1px rgba(28,100,197,0.5); 
  box-shadow: 1px 1px 3px 1px rgba(28,100,197,0.5);
  color: var(--fundo-branco-menus)
}
</style>
