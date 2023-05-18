var working = false;

$('.cadastro').on('submit', function (e) {
    e.preventDefault();
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Autenticando');


    var email = $('#email').val();
    var senha = $('#senha').val();
    var nome = $('#nome').val();
    var senhaRepetida = $('#senhaRepetida').val();

    if (senha != senhaRepetida) {
        setTimeout(function () {
            //$this.removeClass('ok');
            //$this.addClass('fail');
            $state.html('Senhas não conferem');
            setTimeout(function () {
                $state.html('Entrar');
                $this.removeClass('ok loading');
                working = false;
            }, 4000);
        }, 3000);
        return;
    }


    var json = { Email: email, Senha: senha, Nome: nome };

    $.ajax({
        type: 'POST',
        url: 'CadastreSe',
        datatype: 'json',
        data: json,
        success: function (result) {
            const resultado = JSON.parse(result);
            if (resultado.autenticado === "true") {
                setTimeout(function () {
                    $this.addClass('ok');
                    $state.html('Olá Deu tudo certo!');
                    setTimeout(function () {
                        $state.html('Entrar');
                        $this.removeClass('ok loading');
                        working = false;
                    }, 2000);
                    $(location).attr('href', window.location.origin + '/Produto/Ofertas');
                }, 400);

                //setTimeout(
                //    function () {
                        
                //    }, 200);
            }
            else {
                setTimeout(function () {
                    //$this.removeClass('ok');
                    //$this.addClass('fail');
                    $state.html(resultado.message);
                    setTimeout(function () {
                        $state.html('Entrar');
                        $this.removeClass('ok loading');
                        working = false;
                    }, 4000);
                }, 3000);
            }
        }
    });
});