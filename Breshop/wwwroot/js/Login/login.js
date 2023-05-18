var working = false;

$('.login').on('submit', function (e) {
    e.preventDefault();
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Autenticando');


    var email = $('#email').val();
    var senha = $('#senha').val();
    var json = { Email: email, Senha: senha };

    $.ajax({
        type: 'POST',
        url: 'AutenticarUsuario',
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
                    $state.html('Parece que os dados estão incorretos!');
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