$(document).ready(function () {
    $('#modalPush').hide();

    $('#money').mask('000.000.000.000.000,00', { reverse: true });

    var mensagem = $('#mensagem').val();

    if (mensagem != "" && mensagem != null) {
        $('#modalPush').show();
        $('.Conteudo-modal').html(mensagem);
    }
});

function SalvarImagem() {

    $('.img-produto').hide("");
}