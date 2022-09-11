$(document).ready(function () {
    $('#modalPush').hide();

    var produtoCriado = $('#idProduto').val();
    var mensagem = $('#mensagem').val();

    if (produtoCriado != 0) {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Pedido criado com sucesso!");
    }

    if (mensagem != "" && mensagem != null) {
        $('#modalPush').show();
        $('.Conteudo-modal').html(mensagem);
    }
});