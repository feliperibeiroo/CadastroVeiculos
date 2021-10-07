<template>
  <div id="container">
    <div id="title-input">{{titulo+':'}}</div>
    <input v-bind:entrada="valor" v-on:input="$emit('input', $event.target.value)" type="text">
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      require: true
    },
    entrada: {
      type: String,
      require: true
    },
  },
  name: 'InputField',
  data: function () {
    return {
      valor: this.entrada
    }
  }
}
</script>

<style scoped>
#container {
  padding: 10px;
  width: 100%;
}

input {
  border: 1px solid #6b6b6b;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 5px;
  height: 22px;
  width: 100%;
  padding-left: 5px;
}

#title-input {
  font-size: 15px;  
}
</style>
