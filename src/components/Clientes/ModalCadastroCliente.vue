<template>
    <b-modal :ok-disabled="!todosOsCamposPreenchidos" 
            @ok="pressOk"
            @cancel="pressCancelOrClose"
            @close="pressCancelOrClose"
            id="modal-cadastro-cliente" content-class="shadow" title="Cadastro de Clientes">
        <b-form>
            <b-form-group
                id="label-nomecompleto"
                label="Nome completo"
                label-for="cx-nomecompleto"
            >
                <b-form-input
                id="cx-nomecompleto"
                type="text"
                v-model="cadastro.nome"
                placeholder="Nome completo"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-rua"
                label="Rua"
                label-for="cx-rua"
            >
                <b-form-input
                id="cx-rua"
                type="text"
                v-model="cadastro.rua"
                placeholder="Rua"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-cidade"
                label="Cidade"
                label-for="cx-cidade"
            >
                <b-form-input
                id="cx-cidade"
                type="text"
                v-model="cadastro.cidade"
                placeholder="Cidade"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-estado"
                label="Estado"
                label-for="cx-estado"
            >
                <b-form-input
                id="cx-estado"
                type="text"
                v-model="cadastro.estado"
                placeholder="Estado"
                required    
                ></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
export default {
  name: 'modal-cadastro-cliente',
  data () {
    return {
            cadastro: {
            nome: "",
            rua: "",
            cidade: "",
            estado: ""
        }
    }
  },
 computed: {
    todosOsCamposPreenchidos () {
        return this.cadastro.nome!="" && this.cadastro.rua!="" && this.cadastro.cidade!="" && this.cadastro.estado!=""
    }
  },
  methods: {
      showModal(){
          this.$bvModal.show('modal-cadastro-cliente')
      },
      limparCampos () {
          this.cadastro.nome = "";
          this.cadastro.rua = "";
          this.cadastro.cidade = "";
          this.cadastro.estado = "";
      },
      pressOk(){
          this.$emit('ok', this.cadastro)
          this.limparCampos()
      },
      pressCancelOrClose(){
          this.limparCampos()
      }
  }
}
</script>

<style scoped>
#buttons-container {
    display: flex;
    justify-content: flex-end;

}

#buttons-container button {
    margin-left: 10px;
}


</style>
