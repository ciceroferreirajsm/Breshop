$(document).ready(function () {
    $('#modalPush').hide();
});

function FecharModal() {
    $('#modalPush').hide();
}

function selecionarP() {
    if ($('#size-p').hasClass('selected'))
        $('#size-p').removeClass('selected');
    else {
        $('#size-p').addClass('selected');
        $('#size-m').removeClass('selected');
        $('#size-g').removeClass('selected');
    }          
}

function selecionarM() {
    if ($('#size-m').hasClass('selected'))
        $('#size-m').removeClass('selected');
    else {
        $('#size-m').addClass('selected');
        $('#size-p').removeClass('selected');
        $('#size-g').removeClass('selected');
    }
}

function selecionarG() {
    if ($('#size-g').hasClass('selected'))
        $('#size-g').removeClass('selected');
    else {
        $('#size-g').addClass('selected');
        $('#size-p').removeClass('selected');
        $('#size-m').removeClass('selected');
    }
}   