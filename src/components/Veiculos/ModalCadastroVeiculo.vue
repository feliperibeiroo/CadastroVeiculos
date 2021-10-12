<template>
    <div class="modal fade" id="modal-cadastro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="label-modal">Cadastro de Veículos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Conteúdo do Modal -->
                <div class="container">
                    <form>
                        <div class="form-group">
                            <label for="modal-sel-proprietario">Proprietário</label>
                            <select class="form-control" id="modal-sel-proprietario">
                                <option></option>
                                <option v-for="proprietario in proprietariosToSelect" :key="proprietario.id">{{proprietario.proprietario}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="modal-cxmodelo">Modelo</label>
                            <input type="text" class="form-control" id="modal-cxmodelo" placeholder="Modelo">
                        </div>
                        <div class="form-group">
                            <label for="modal-cxmarca">Marca</label>
                            <input type="text" class="form-control" id="modal-cxmarca" placeholder="Marca">
                        </div>
                        <div class="container-fluid">
                            <div class="row" style="margin: 0 -30px;">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="modal-cxcor">Cor</label>
                                        <input type="text" class="form-control" id="modal-cxcor" placeholder="Cor">
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="modal-cxplaca">Placa</label>
                                        <input type="text" class="form-control" id="modal-cxplaca" placeholder="Placa">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" class="btn btn-primary">Salvar</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../../services/api.js'

export default {
  name: 'modal-cadastro-veiculo',
  data: function () {
      return {
          proprietarios: [],
          proprietariosToSelect: []
      }
  },
  created: function () {
      this.carregarProprietarios();
  },
  methods: {
      carregarProprietarios () {
        api
        .get("/proprietarios")
        .then((res) => {
            this.proprietarios = res.data;
            this.proprietariosToSelect = Array.from(new Set(this.proprietarios.filter((prop)=>([prop.proprietario, prop.id]))));
        })
        .catch((error) => {
            console.log(error);
        });
        
      }
  }
}
</script>

<style scoped>

</style>
