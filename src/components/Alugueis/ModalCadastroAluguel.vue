<template>
    <div class="modal fade bd-example-modal-lg" id="modal-cadastro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="label-modal">Cadastro de Aluguéis</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- Conteúdo do Modal -->
                <div class="container">
                    <form>
                        <div class="container-fluid">
                            <div class="row" style="margin: 0 -30px;">
                                <div class="col-sm">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label for="modal-sel-proprietario">Proprietário</label>
                                            <select class="form-control" id="modal-sel-proprietario">
                                                <option>Select padrão</option>
                                                <option>Select padrão 2</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="modal-sel-veiculo">Veículo</label>
                                            <select class="form-control" id="modal-sel-veiculo">
                                                <option>Select padrão</option>
                                                <option>Select padrão 2</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="modal-sel-cliente">Cliente</label>
                                            <select class="form-control" id="modal-sel-cliente">
                                                <option>Select padrão</option>
                                                <option>Select padrão 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm">
                                    <div class="container-fluid">
                                        <div class="row" style="margin: 0 -30px;">
                                            <div class="col-sm">
                                                <div class="form-group">
                                                    <label for="modal-cxmodelo">Modelo</label>
                                                    <input type="text" class="form-control" id="modal-cxmodelo" placeholder="Modelo" readonly>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style="margin: 0 -30px;">
                                            <div class="col-sm">
                                                <div class="form-group">
                                                    <label for="modal-cxplaca">Marca</label>
                                                    <input type="text" class="form-control" id="modal-cxplaca" placeholder="Marca" readonly>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row" style="margin: 0 -30px;">
                                            <div class="col-sm">
                                                <div class="form-group">
                                                    <label for="modal-cxcidade">Cor</label>
                                                    <input type="text" class="form-control" id="modal-cxcor" placeholder="Cor" readonly>
                                                </div>
                                            </div>
                                            <div class="col-sm">
                                                <div class="form-group">
                                                    <label for="modal-cxestado">Placa</label>
                                                    <input type="text" class="form-control" id="modal-cxplaca" placeholder="Placa" readonly>
                                                </div>
                                            </div>
                                        </div>
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
  name: 'modal-cadastro-aluguel'
}
</script>

<style scoped>

</style>
