<template>
    <b-alert id="alert"
      :show="show"
      dismissible
      :variant="variant"
    >
      <p><slot></slot></p>
    </b-alert>
</template>

<script>
export default {
  name: 'modal-cadastro-cliente',
  props: ['variant', 'show'],
  data () {
    return {
        cadastro: {
            nome: "",
            rua: "",
            cidade: "",
            estado: ""
        }
    }
  }
}
</script>

<style scoped>
#alert {
  position: absolute;
  float: left;
  bottom: 15px;
  right: 15px;
  width: 450px;
}

</style>
