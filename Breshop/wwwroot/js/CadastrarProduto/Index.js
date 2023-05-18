$(document).ready(function () {
    $('#modalPush').hide();
    var mensagem = $('#mensagem').val();

    if (mensagem != "" && mensagem != null) {
        $('#modalPush').show();
        $('.Conteudo-modal').html(mensagem);
    }
});

function FiltrarPorCategoria() {

    var categoriaSelecionada = $('#categoria-selecionada').val();

    $(location).attr('href', window.location.origin + '/CadastrarProdutos/Index?Categoria=' + categoriaSelecionada);

}