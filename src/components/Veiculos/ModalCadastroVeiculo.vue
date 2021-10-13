<template>
    <b-modal :ok-disabled="!todosOsCamposPreenchidos" 
            @ok="pressOk"
            @cancel="pressCancelOrClose"
            @close="pressCancelOrClose"
            id="modal-cadastro-veiculo" 
            content-class="shadow" 
            title="Cadastro de Veículos">
        <b-form>
            <b-form-group
                id="label-idproprietario"
                label="ID do proprietário"
                label-for="cx-idproprietario"
            >
                <b-form-input
                id="cx-idproprietario"
                type="text"
                v-model="cadastro.idproprietario"
                @blur="carregarNomeCliente"
                placeholder="ID do proprietário"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-nomeproprietario"
                label="Nome do proprietário"
                label-for="cx-nomeproprietario"
            >
                <b-form-input
                id="cx-nomeproprietario"
                type="text"
                placeholder="Nome do proprietário"
                readonly
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-modelo"
                label="Modelo"
                label-for="cx-modelo"
            >
                <b-form-input
                id="cx-modelo"
                type="text"
                v-model="cadastro.modelo"
                placeholder="Modelo"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-marca"
                label="Marca"
                label-for="cx-marca"
            >
                <b-form-input
                id="cx-marca"
                type="text"
                v-model="cadastro.marca"
                placeholder="Marca"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-placa"
                label="Placa"
                label-for="cx-placa"
            >
                <b-form-input
                id="cx-placa"
                type="text"
                v-model="cadastro.placa"
                placeholder="Placa"
                required    
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="label-cor"
                label="Cor"
                label-for="cx-cor"
            >
                <b-form-input
                id="cx-cor"
                type="text"
                v-model="cadastro.cor"
                placeholder="Cor"
                required    
                ></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
export default {
  name: 'modal-cadastro-veiculo',
  data: function () {
      return {
          proprietarios: [],
          cadastro: {
              idproprietario: "",
              modelo: "",
              marca: "",
              placa: "",
              cor: ""
          },
          proprietariosToSelect: []
      }
  },
 computed: {
    todosOsCamposPreenchidos () {
        return this.cadastro.idproprietario!="" &&
               this.cadastro.modelo!="" && 
               this.cadastro.marca!="" && 
               this.cadastro.placa!="" && 
               this.cadastro.cor!=""
    }
  },
  methods: {
    showModal () {
          this.$bvModal.show('modal-cadastro-veiculo')
      },
      limparCampos () {
          this.cadastro.idproprietario = "";
          this.cadastro.modelo = "";
          this.cadastro.marca = "";
          this.cadastro.placa = "";
          this.cadastro.cor = "";
      },
      pressOk () {
          this.$emit('ok', this.cadastro)
          this.limparCampos()
      },
      pressCancelOrClose () {
          this.limparCampos()
      },
      carregarNomeCliente () {

      }
  }
}
</script>

<style scoped>

</style>
