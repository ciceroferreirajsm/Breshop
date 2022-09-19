$(document).ready(function () {
    $('#modalPush').hide();

    var mensagem = $('#mensagem').val();

    if (mensagem != "" && mensagem != null) {
        $('#modalPush').show();
        $('.Conteudo-modal').html(mensagem);
    }
});

