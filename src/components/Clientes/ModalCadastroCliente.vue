<template>
    <div class="modal fade" id="modal-cadastro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="label-modal">Cadastro de Clientes</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Conteúdo do Modal -->
                <div class="container">
                    <form>
                        <div class="form-group">
                            <label for="modal-cxnomecompleto">Nome completo</label>
                            <input type="text" class="form-control" id="modal-cxnomecompleto" placeholder="Nome completo">
                        </div>
                        <div class="form-group">
                            <label for="modal-cxrua">Rua</label>
                            <input type="text" class="form-control" id="modal-cxrua" placeholder="Rua">
                        </div>
                        <div class="container-fluid">
                            <div class="row" style="margin: 0 -30px;">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="modal-cxcidade">Cidade</label>
                                        <input type="text" class="form-control" id="modal-cxcidade" placeholder="Cidade">
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="form-group">
                                        <label for="modal-cxestado">Estado</label>
                                        <input type="text" class="form-control" id="modal-cxestado" placeholder="Estado">
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
export default {
  name: 'modal-cadastro-cliente'
}
</script>

<style scoped>

</style>
