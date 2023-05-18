$(document).ready(function () {



    // Método para pular campos teclando ENTER
    $('.pula').on('keypress', function (e) {
        var tecla = (e.keyCode ? e.keyCode : e.which);

        if (tecla == 13) {
            campo = $('.pula');
            indice = campo.index(this);

            if (campo[indice + 1] != null) {
                proximo = campo[indice + 1];
                proximo.focus();
                e.preventDefault(e);
            }
        }
    });

    // Inseri máscara no CEP
    $("#cep").inputmask({
        mask: ["99999-999",],
        keepStatic: true
    });

    // Método para consultar o CEP
    $('#cep').on('blur', function () {

    });
});

$(function () {
    $('#cardnumber').payment('formatCardNumber');
    $('#cardexpiration').payment('formatCardExpiry');
    $('#cardcvc').payment('formatCardCVC');

    $('#cardnumber').keyup(function (event) {
        $('#label-cardnumber').empty().append($(this).val());
    });

    $('#cardexpiration').keyup(function (event) {
        var data = $(this).val() + '<span>' + $('#cardcvc').val() + '</span>';
        $('#label-cardexpiration').empty().append(data);
    });

    $('#cardcvc').keyup(function (event) {
        var data = $('#cardexpiration').val() + '<span>' + $(this).val() + '</span>';
        $('#label-cardexpiration').empty().append(data);
    });

    $('.button-cta').on('click', function () {
        var proceed = true;
        $(".field input").each(function () {
            $(this).parent().find('path').each(function () {
                $(this).attr('fill', '#dddfe6');
            });

            if (!$.trim($(this).val())) {
                $(this).parent().find('path').each(function () {
                    $(this).attr('fill', '#f1404b');
                    proceed = false;
                });

                if (!proceed) {
                    $(this).parent().find('svg').animate({ opacity: '0.1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '0.1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '0.1' }, "slow");
                    $(this).parent().find('svg').animate({ opacity: '1' }, "slow");
                }
            }
        });

        if (proceed) //everything looks good! proceed purchase...
        {
            $('.field').find('path').each(function () {
                $(this).attr('fill', '#3ac569');
            });
            $('.payment').fadeToggle('slow', function () {
                $('.paid').fadeToggle('slow', 'linear');
            });
        }
    });
});

var produto;

function AdicionarProdutoNoCarrinho() {

    var idProduto = $('#idProduto-modal').val();
    var idUsuario = $('#idUsuario').val();
    var qtdCarrinho = $('.qtd-carrinho').html();
    var qtdSelecionada = $('.carrinhoInfo--qt').html();
    qtdSelecionada = parseInt(qtdSelecionada);
    qtdCarrinho = parseInt(qtdCarrinho);
    $('.qtd-carrinho').html("");

    $.ajax({
        type: 'GET',
        url: location.origin + '/CarrinhoProduto/AdicionarProdutoCarrinho?idUsuario=' + idUsuario + '&idProduto=' + idProduto + '&QtdProduto=' + qtdSelecionada,
        success: function (result) {
            $('.carrinhoWindowArea').hide();
            $('.carrinhoInfo--qt').html(1);
            $('.Conteudo-modal').show();
            $('.Conteudo-modal').html("Produto Adicionado com sucesso!");
            $('.qtd-carrinho').html(qtdCarrinho + 1);
        }
    });

    produto = null;
}

function AbrirModal(idProduto) {
    produto = null;

    $.ajax({
        type: 'GET',
        url: location.origin + '/Produto/ObterProdutoPorId?IdProduto=' + idProduto,
        success: function (result) {
            produto = JSON.parse(result);
            var valorFormatado = produto.Produto.Preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // formatando para a moeda brasileira
            $('#idProduto-modal').val(idProduto);
            $('.carrinhoBig').html("");
            $('.carrinhoBig').html("<img id='img-modal' src=" + produto.Produto.UrlImagem + ">");
            $('.carrinhoInfo--desc').html(produto.Produto.Descricao);
            $('.carrinhoInfo--actualPrice').html(valorFormatado);
            $('.carrinhoWindowArea').show();
        }
    });
}

function EnviarPedido(dados) {

    var url = window.location.href;
    var posicaoUltimaBarra = url.lastIndexOf("/");
    var newUrl = url.substring(0, posicaoUltimaBarra);

    var idUsuario = $('#idUsuario').val();
    var idCarrinho = $('#idCarrinho').val();
    const nome = dados.usuario.Nome;
    const NumPedido = $('#idPedido').val();
    const phone = '5513982285238';
    const total = $('#total').html();
    const cep = $('#Cep').val();
    const estado = $('#Estado').val();
    const cidade = $('#Cidade').val();
    const bairro = $('#Bairro').val();
    const endereco = $('#Endereco').val();
    const numero = $('#Numero').val();

    if (cep == "" || cep == null || cep == "undefined" || numero == "" || numero == null || numero == "undefined") {
        window.alert("Campos obrigatórios.");
    } else {
        $.ajax({
            type: 'GET',
            url: location.origin + '/CarrinhoProduto/FinalizarPedido?idUsuario=' + idUsuario + '&idCarrinho=' + idCarrinho,
            success: function (result) {
                var obj = JSON.parse(result);
                let pedido = "Olá meu nome é " + nome + " acabei de fazer um pedido nº " + obj.idPedido + " com o valor total " + total + " para entregar no endereço:" +
                    " " + endereco + " numero: " + numero + " - " + bairro + " - " + cidade + " - " + estado + " cep: " + cep + "";
                text = window.encodeURIComponent(pedido);
                window.open('https://api.whatsapp.com/send?phone=' + phone + '&text=' + text + '')
            }
        });
    }
}

function FecharModal() {
    $('.carrinhoInfo--qt').html(1);
    $('.carrinhoWindowArea').hide();
}

function qtdMenos() {

    var qtdSelecionada = $('.carrinhoInfo--qt').html();
    qtdSelecionada = parseInt(qtdSelecionada);

    if (qtdSelecionada > 1) {
        $('.carrinhoInfo--qt').html(qtdSelecionada - 1);
    }

}

function qtdMais() {

    var qtdSelecionada = $('.carrinhoInfo--qt').html();
    qtdSelecionada = parseInt(qtdSelecionada);
    $('.carrinhoInfo--qt').html(qtdSelecionada + 1);
}

function ObterUsuarioPorId() {

    var idUsuario = $('#idUsuario').val();
    var usuario = "";

    $.ajax({
        type: 'GET',
        url: location.origin + '/Login/ObterUsuarioPorId?idUsuario=' + idUsuario,
        success: function (result) {
            usuario = JSON.parse(result);
            EnviarPedido(usuario);
        }
    });
}

function ObterEnderecoPorCep() {

    var cep = $("#Cep").val();

    if (cep == null || cep == "" || cep == "Undefined") {
        $("#Cidade").val("");
        $("#Estado").val("");
        $("#Bairro").val("");
        $("#Endereco").val("");
    }

    $.ajax({
        type: 'GET',
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        success: function (result) {
            $("#Cidade").val(result.localidade);
            $("#Estado").val(result.uf);
            $("#Bairro").val(result.bairro);
            $("#Endereco").val(result.logradouro);
        }
    });
}

function RemoverCarrinho(IdProduto) {

    var idUsuario = $('#idUsuario').val();

    $.ajax({
        type: 'GET',
        url: location.origin + '/CarrinhoProduto/RemoverProdutoCarrinho?idUsuario=' + idUsuario + '&idProduto=' + IdProduto,
        success: function (result) {
            window.location.reload(true);
        }
    });
}