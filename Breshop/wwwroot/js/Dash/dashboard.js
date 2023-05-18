$(document).ready(function () {
    MontarEstatisticas();
    MontarGraficoPizza();
    MontarEstatisticasCaixa();
    MontarEstatisticasContratoNegativo();
    MontarGraficoPizzaPeriodo();
    MontarEstatisticasGerador();
    MontarEstatisticasInadimplentes();
    MontarEstatisticasTodas();
    MontarGraficoPizzaResultado();
    MontarEstatisticasCaptador()
    AtualizarDatas()
});


/************************ DADOS ESTATISTICAS ***********************/

function MontarEstatisticas(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashContratoConvenio').val());

    for (var i = 1; i < dados.length; i++) {
        dados[0].Assinatura += dados[i].Assinatura;
        dados[0].Kwh += dados[i].Kwh;
    }

    if ($("#visit-sale-chart").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Total"],
                datasets: [
                    {
                        label: "Total Assinatura",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Assinatura]
                    },
                    {
                        label: "Total Kwh",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Kwh]
                    }
                ]
            },
            options: {
                responsive: true,
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasContratoNegativo(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashContratoConvenio').val());

    var contadorItens = 0;

    for (var i = 0; i < dados.length; i++) {
        contadorItens = contadorItens + 1;
    }

    switch (contadorItens) {
        case 0:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[0] = JSON.parse(novoDado);
            dados[1] = JSON.parse(novoDado);
            dados[2] = JSON.parse(novoDado);
            dados[3] = JSON.parse(novoDado);
            dados[4] = JSON.parse(novoDado);
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 1:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[1] = JSON.parse(novoDado);
            dados[2] = JSON.parse(novoDado);
            dados[3] = JSON.parse(novoDado);
            dados[4] = JSON.parse(novoDado);
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 2:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[2] = JSON.parse(novoDado);
            dados[3] = JSON.parse(novoDado);
            dados[4] = JSON.parse(novoDado);
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 3:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[3] = JSON.parse(novoDado);
            dados[4] = JSON.parse(novoDado);
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 4:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[4] = JSON.parse(novoDado);
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 5:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[5] = JSON.parse(novoDado);
            dados[6] = JSON.parse(novoDado);
            break;
        case 6:
            var novoDado = '{"Apelido":"","TotalContrato":0,"Assinatura":0.0,"Kwh":0.0}';
            dados[6] = JSON.parse(novoDado);
            break;
    }

    if ($("#visit-sale-chart-contrato-negativo").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-contrato-negativo').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [dados[0].Apelido, dados[1].Apelido, dados[2].Apelido, dados[3].Apelido, dados[4].Apelido, dados[5].Apelido],
                datasets: [
                    {
                        label: "Assinatura",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Assinatura, dados[1].Assinatura, dados[2].Assinatura, dados[3].Assinatura, dados[4].Assinatura, dados[5].Assinatura]
                    },
                    {
                        label: "Kwh",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Kwh, dados[1].Kwh, dados[2].Kwh, dados[3].Kwh, dados[4].Kwh, dados[5].Kwh]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasGerador(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashDespesasGeradorODC').val());

    for (var i = 1; i < dados.length; i++) {
        dados[0].KwhInjetadoTotal += dados[i].KwhInjetadoTotal;
        dados[0].Tarifa += dados[i].Tarifa;
        dados[0].TotalPagar += dados[i].TotalPagar;
    }

    if ($("#visit-sale-chart-gerador").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-gerador').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [dados[0].Usina],
                datasets: [
                    {
                        label: "Kwh Injetado Total",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].KwhInjetadoTotal]
                    },
                    {
                        label: "Tarifa",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Tarifa]
                    },
                    {
                        label: "Total Pagar",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: ["R$ " + dados[0].TotalPagar]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasTodas(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashFaturamentoTodas').val());

    dados[0].Despesas = parseFloat(dados[0].Despesas);
    dados[0].Resultado = parseFloat(dados[0].Resultado);
    dados[0].Faturamento = parseFloat(dados[0].Faturamento);
    dados[0].KwInjetado = parseFloat(dados[0].KwInjetado);

    for (var i = 1; i < dados.length; i++) {
        dados[0].Despesas += parseFloat(dados[i].Despesas);
        dados[0].Faturamento += parseFloat(dados[i].Faturamento);
        dados[0].KwInjetado += parseFloat(dados[i].KwInjetado);
        dados[0].Resultado += parseFloat(dados[i].Resultado);
        dados[0].TotalFaturas += dados[i].TotalFaturas;
    }

    if ($("#visit-sale-chart-todas").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-todas').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Total"],
                datasets: [
                    {
                        label: "Despesas",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Despesas]
                    },
                    {
                        label: "Faturamento",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Faturamento]
                    },
                    {
                        label: "KwhInjetado",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].KwInjetado]
                    },
                    {
                        label: "Resultado",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Resultado]
                    },
                    {
                        label: "Total Faturas",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].TotalFaturas]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasCaptador(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashPerformanceCaptador').val());

    for (var i = 1; i < dados.length; i++) {
        dados[0].TotalContrato += dados[i].TotalContrato;
        dados[0].Assinatura += dados[i].Assinatura;
        dados[0].Kwh += dados[i].Kwh;
    }

    if ($("#visit-sale-chart-Captador").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-Captador').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Total"],
                datasets: [
                    {
                        label: "Assinatura",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Assinatura]
                    },
                    {
                        label: "Kwh",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Kwh]
                    },
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasCaixa(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashFluxoCaixaMensal').val());

    dados[0].TotalReceita = parseFloat(dados[0].TotalReceita);
    dados[0].TotalDespesas = parseFloat(dados[0].TotalDespesas);
    dados[0].KwInjetado = parseFloat(dados[0].KwInjetado);

    for (var i = 1; i < dados.length; i++) {
        dados[0].TotalReceita += parseFloat(dados[i].TotalReceita);
        dados[0].KwInjetado += parseFloat(dados[i].KwInjetado);
        dados[0].TotalDespesas += parseFloat(dados[i].TotalDespesas);
    }

    if ($("#visit-sale-chart-Caixa").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-Caixa').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Total"],
                datasets: [
                    {
                        label: "Receita",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].TotalReceita]
                    },
                    {
                        label: "KwhInjetado",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].KwInjetado]
                    },
                    {
                        label: "Despesas",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].TotalDespesas]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

function MontarEstatisticasInadimplentes(filtroPorData) {

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashInadimplentes60').val());

    dados[0].Quantidade_Dias = parseFloat(dados[0].Quantidade_Dias);
    dados[0].ValorInadimplencia = dados[0].ValorInadimplencia;

    for (var i = 1; i < dados.length; i++) {
        dados[0].Quantidade_Dias += dados[i].Quantidade_Dias;
        dados[0].ValorInadimplencia += dados[i].ValorInadimplencia;
    }

    if ($("#visit-sale-chart-Inadimplentes").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart-Inadimplentes').getContext("2d");

        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 360);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 350);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Total"],
                datasets: [
                    {
                        label: "Quantidade Dias",
                        borderColor: gradientStrokeRed,
                        backgroundColor: gradientStrokeRed,
                        hoverBackgroundColor: gradientStrokeRed,
                        legendColor: gradientLegendRed,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].Quantidade_Dias]
                    },
                    {
                        label: "Valor Inadimplencia",
                        borderColor: gradientStrokeBlue,
                        backgroundColor: gradientStrokeBlue,
                        hoverBackgroundColor: gradientStrokeBlue,
                        legendColor: gradientLegendBlue,
                        pointRadius: 0,
                        fill: false,
                        borderWidth: 1,
                        fill: 'origin',
                        data: [dados[0].ValorInadimplencia]
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(235,237,242,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(235,237,242,1)'
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9c9fa6",
                            autoSkip: false,
                        }
                    }]
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        })

        $("#visit-sale-chart-legend").html(myChart.generateLegend());
    }
};

/************************ DADOS PIZZA ***********************/

function MontarGraficoPizza(filtroPorData) {

    if ($("#visit-sale-chart").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart').getContext("2d");
    }

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashFaturamentoODC').val());

    if ($("#traffic-chart").length) {
        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeYellow = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeYellow.addColorStop(0, 'rgba(227, 38, 54)');
        gradientStrokeYellow.addColorStop(1, 'rgba(227, 38, 54)');
        var gradientLegendYellow = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeGreen = ctx.createLinearGradient(0, 0, 0, 300);
        gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
        gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
        var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

        var trafficChartData = {
            datasets: [{
                data: [dados[0].Qtde, dados[1].Qtde, dados[2].Qtde],
                backgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                hoverBackgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                borderColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                legendColor: [
                    gradientLegendBlue,
                    gradientLegendGreen,
                    gradientLegendYellow,
                    gradientLegendRed
                ],
            }],

            labelsText: [
                //'Faturamento',
                //'KwhInjetado'
            ],

            labelsDataFaturamento: [
                //"R$" + dados[0].Faturamento,
                //dados[0].KwhInjetado
            ],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Cancelada',
                'Quitada',
                'Vencida',
            ]
        };
        var trafficChartOptions = {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: false,
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul>');
                for (var i = 0; i < 2; i++) {
                    //text.push('<li><span class="legend-dots" style="background:' +
                    //    trafficChartData.datasets[0].legendColor[i] +
                    //    '"></span>');
                    //if (trafficChartData.labelsText[i]) {
                    //    text.push(trafficChartData.labelsText[i]);
                    //}
                    //$('#situacao-fat').html("Cancelada");
                    //text.push('<span id="label_fat_' + i + '" class="float-right">' + trafficChartData.labelsDataFaturamento[i] + '</span>')
                    //text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            }
        };
        var trafficChartCanvas = $("#traffic-chart").get(0).getContext("2d");


        var trafficChart = new Chart(trafficChartCanvas, {
            type: 'doughnut',
            data: trafficChartData,
            options: trafficChartOptions
        });
        $("#traffic-chart-legend").html(trafficChart.generateLegend());
    }

    if ($("#inline-datepicker").length) {
        $('#inline-datepicker').datepicker({
            enableOnReadonly: true,
            todayHighlight: true,
        });
    }
};

function MontarGraficoPizzaPeriodo(filtroPorData) {

    if ($("#visit-sale-chart").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart').getContext("2d");
    }

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashFaturamentoPeriodo').val());


    if ($("#traffic-chart-periodo").length) {
        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeYellow = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeYellow.addColorStop(0, 'rgba(227, 38, 54)');
        gradientStrokeYellow.addColorStop(1, 'rgba(227, 38, 54)');
        var gradientLegendYellow = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeGreen = ctx.createLinearGradient(0, 0, 0, 300);
        gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
        gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
        var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

        var trafficChartData = {
            datasets: [{
                data: [dados[3].Qtde, dados[1].Qtde, dados[2].Qtde, dados[0].Qtde ],
                backgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                hoverBackgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                borderColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                legendColor: [
                    gradientLegendBlue,
                    gradientLegendGreen,
                    gradientLegendYellow,
                    gradientLegendRed
                ],
            }],

            labelsText: [
                'Situação',
                'Quantidade',
                'Faturamento'
            ],

            labelsDataFaturamento: [
                "R$" + dados[0].Faturamento,
                dados[0].KwhInjetado
            ],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Quitada',                
                'Cancelada',
                'Vencida',
                'Aguardando Pagamento'
                
            ]
        };
        var trafficChartOptions = {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: false,
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul>');
                for (var i = 0; i < 2; i++) {
                    text.push('<li><span class="legend-dots" style="background:' +
                        trafficChartData.datasets[0].legendColor[i] +
                        '"></span>');
                    if (trafficChartData.labelsText[i]) {
                        text.push(trafficChartData.labelsText[i]);
                    }
                    $('#situacao-fat').html("Aguardando Pagamento");
                    text.push('<span id="label_fat_' + i + '" class="float-right">' + trafficChartData.labelsDataFaturamento[i] + '</span>')
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            }
        };
        var trafficChartCanvas = $("#traffic-chart-periodo").get(0).getContext("2d");


        var trafficChart = new Chart(trafficChartCanvas, {
            type: 'doughnut',
            data: trafficChartData,
            options: trafficChartOptions
        });
        $("#traffic-chart-legend").html(trafficChart.generateLegend());
    }

    if ($("#inline-datepicker").length) {
        $('#inline-datepicker').datepicker({
            enableOnReadonly: true,
            todayHighlight: true,
        });
    }
};

function MontarGraficoPizzaResultado(filtroPorData) {

    if ($("#visit-sale-chart").length) {
        Chart.defaults.global.legend.labels.usePointStyle = true;
        var ctx = document.getElementById('visit-sale-chart').getContext("2d");
    }

    var dados;

    if (filtroPorData != "undefined" && filtroPorData != "" && filtroPorData != "null" && filtroPorData != undefined)
        dados = JSON.parse(filtroPorData);
    else
        dados = JSON.parse($('#DashResultadoODC').val());


    if ($("#traffic-chart-resultado").length) {
        var gradientStrokeBlue = ctx.createLinearGradient(0, 0, 0, 181);
        gradientStrokeBlue.addColorStop(0, 'rgba(54, 215, 232, 1)');
        gradientStrokeBlue.addColorStop(1, 'rgba(177, 148, 250, 1)');
        var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

        var gradientStrokeRed = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeRed.addColorStop(0, 'rgba(255, 191, 150, 1)');
        gradientStrokeRed.addColorStop(1, 'rgba(254, 112, 150, 1)');
        var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeYellow = ctx.createLinearGradient(0, 0, 0, 50);
        gradientStrokeYellow.addColorStop(0, 'rgba(227, 38, 54)');
        gradientStrokeYellow.addColorStop(1, 'rgba(227, 38, 54)');
        var gradientLegendYellow = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

        var gradientStrokeGreen = ctx.createLinearGradient(0, 0, 0, 300);
        gradientStrokeGreen.addColorStop(0, 'rgba(6, 185, 157, 1)');
        gradientStrokeGreen.addColorStop(1, 'rgba(132, 217, 210, 1)');
        var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

        var trafficChartData = {
            datasets: [{
                data: [dados[0].KwInjetado, dados[0].Resultado, dados[0].TotalFaturas],
                backgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                hoverBackgroundColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                borderColor: [
                    gradientStrokeBlue,
                    gradientStrokeGreen,
                    gradientStrokeYellow,
                    gradientStrokeRed
                ],
                legendColor: [
                    gradientLegendBlue,
                    gradientLegendGreen,
                    gradientLegendYellow,
                    gradientLegendRed
                ],
            }],

            labelsText: [
                'Faturamento',
                'KwhInjetado'
            ],

            labelsDataFaturamento: [
                "R$" + dados[0].Faturamento,
                dados[0].KwhInjetado
            ],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Kw Injetado',
                'Resultado',
                'Total Faturas'
            ]
        };
        var trafficChartOptions = {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: false,
            legendCallback: function (chart) {
                var text = [];
                text.push('<ul>');
                for (var i = 0; i < 2; i++) {
                    text.push('<li><span class="legend-dots" style="background:' +
                        trafficChartData.datasets[0].legendColor[i] +
                        '"></span>');
                    if (trafficChartData.labelsText[i]) {
                        text.push(trafficChartData.labelsText[i]);
                    }
                    $('#situacao-fat').html("Cancelada");
                    text.push('<span id="label_fat_' + i + '" class="float-right">' + trafficChartData.labelsDataFaturamento[i] + '</span>')
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join('');
            }
        };
        var trafficChartCanvas = $("#traffic-chart-resultado").get(0).getContext("2d");


        var trafficChart = new Chart(trafficChartCanvas, {
            type: 'doughnut',
            data: trafficChartData,
            options: trafficChartOptions
        });
        $("#traffic-chart-legend").html(trafficChart.generateLegend());
    }

    if ($("#inline-datepicker").length) {
        $('#inline-datepicker').datepicker({
            enableOnReadonly: true,
            todayHighlight: true,
        });
    }
};

/************************ ALTERAR DADOS PIZZA ***********************/

//function AlterarDadosPizza() {

//    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

//    var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

//    var contador = $('#contador').val();

//    var dados = JSON.parse($('#DashFaturamentoODC').val());

//    if (contador == "0") {
//        $('#situacao-fat').html(dados[1].Situacao);
//        $('#label_fat_0').html('R$' + dados[1].Faturamento);
//        $('#label_fat_1').html(dados[1].KwhInjetado);
//        $('#contador').val(1);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendBlue + "'></span>");
//    }
//    else if (contador == "1") {
//        $('#situacao-fat').html(dados[2].Situacao);
//        $('#label_fat_0').html('R$' + dados[2].Faturamento);
//        $('#label_fat_1').html(dados[2].KwhInjetado);
//        $('#contador').val(2);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendRed + "'></span>");
//    }
//    else if (contador == "2") {
//        $('#situacao-fat').html(dados[0].Situacao);
//        $('#label_fat_0').html('R$' + dados[0].Faturamento);
//        $('#label_fat_1').html(dados[0].KwhInjetado);
//        $('#contador').val(0);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendGreen + "'></span>");
//    }
//    else {
//        $('#contador').val(0);
//    }
//}

//function AlterarDadosPizzaPeriodo() {

//    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

//    var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

//    var contador = $('#contador').val();

//    var dados = JSON.parse($('#DashFaturamentoODC').val());

//    if (contador == "0") {
//        $('#situacao-fat').html(dados[1].Situacao);
//        $('#label_fat_0').html('R$' + dados[1].Faturamento);
//        $('#label_fat_1').html(dados[1].KwhInjetado);
//        $('#contador').val(1);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendBlue + "'></span>");
//    }
//    else if (contador == "1") {
//        $('#situacao-fat').html(dados[2].Situacao);
//        $('#label_fat_0').html('R$' + dados[2].Faturamento);
//        $('#label_fat_1').html(dados[2].KwhInjetado);
//        $('#contador').val(2);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendRed + "'></span>");
//    }
//    else if (contador == "2") {
//        $('#situacao-fat').html(dados[0].Situacao);
//        $('#label_fat_0').html('R$' + dados[0].Faturamento);
//        $('#label_fat_1').html(dados[0].KwhInjetado);
//        $('#contador').val(0);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendGreen + "'></span>");
//    }
//    else {
//        $('#contador').val(0);
//    }
//}

//function AlterarDadosPizzaResultado() {

//    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

//    var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

//    var contador = $('#contador').val();

//    var dados = JSON.parse($('#DashFaturamentoODC').val());

//    if (contador == "0") {
//        $('#situacao-fat').html(dados[1].Situacao);
//        $('#label_fat_0').html('R$' + dados[1].Faturamento);
//        $('#label_fat_1').html(dados[1].KwhInjetado);
//        $('#contador').val(1);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendBlue + "'></span>");
//    }
//    else if (contador == "1") {
//        $('#situacao-fat').html(dados[2].Situacao);
//        $('#label_fat_0').html('R$' + dados[2].Faturamento);
//        $('#label_fat_1').html(dados[2].KwhInjetado);
//        $('#contador').val(2);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendRed + "'></span>");
//    }
//    else if (contador == "2") {
//        $('#situacao-fat').html(dados[0].Situacao);
//        $('#label_fat_0').html('R$' + dados[0].Faturamento);
//        $('#label_fat_1').html(dados[0].KwhInjetado);
//        $('#contador').val(0);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendGreen + "'></span>");
//    }
//    else {
//        $('#contador').val(0);
//    }
//}

//function AlterarDadosPizzaInadimplentes() {

//    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

//    var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

//    var contador = $('#contador').val();

//    var dados = JSON.parse($('#DashFaturamentoODC').val());

//    if (contador == "0") {
//        $('#situacao-fat').html(dados[1].Situacao);
//        $('#label_fat_0').html('R$' + dados[1].Faturamento);
//        $('#label_fat_1').html(dados[1].KwhInjetado);
//        $('#contador').val(1);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendBlue + "'></span>");
//    }
//    else if (contador == "1") {
//        $('#situacao-fat').html(dados[2].Situacao);
//        $('#label_fat_0').html('R$' + dados[2].Faturamento);
//        $('#label_fat_1').html(dados[2].KwhInjetado);
//        $('#contador').val(2);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendRed + "'></span>");
//    }
//    else if (contador == "2") {
//        $('#situacao-fat').html(dados[0].Situacao);
//        $('#label_fat_0').html('R$' + dados[0].Faturamento);
//        $('#label_fat_1').html(dados[0].KwhInjetado);
//        $('#contador').val(0);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendGreen + "'></span>");
//    }
//    else {
//        $('#contador').val(0);
//    }
//}

//function AlterarDadosPizzaTodas() {

//    var gradientLegendBlue = 'linear-gradient(to right, rgba(54, 215, 232, 1), rgba(177, 148, 250, 1))';

//    var gradientLegendRed = 'linear-gradient(to right, rgba(255, 191, 150, 1), rgba(254, 112, 150, 1))';

//    var gradientLegendGreen = 'linear-gradient(to right, rgba(6, 185, 157, 1), rgba(132, 217, 210, 1))';

//    var contador = $('#contador').val();

//    var dados = JSON.parse($('#DashFaturamentoODC').val());

//    if (contador == "0") {
//        $('#situacao-fat').html(dados[1].Situacao);
//        $('#label_fat_0').html('R$' + dados[1].Faturamento);
//        $('#label_fat_1').html(dados[1].KwhInjetado);
//        $('#contador').val(1);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendBlue + "'></span>");
//    }
//    else if (contador == "1") {
//        $('#situacao-fat').html(dados[2].Situacao);
//        $('#label_fat_0').html('R$' + dados[2].Faturamento);
//        $('#label_fat_1').html(dados[2].KwhInjetado);
//        $('#contador').val(2);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendRed + "'></span>");
//    }
//    else if (contador == "2") {
//        $('#situacao-fat').html(dados[0].Situacao);
//        $('#label_fat_0').html('R$' + dados[0].Faturamento);
//        $('#label_fat_1').html(dados[0].KwhInjetado);
//        $('#contador').val(0);
//        $('.legend-dots').html("");
//        $('.legend-dots').html("<span class='legend-dots' style='background:'" + gradientLegendGreen + "'></span>");
//    }
//    else {
//        $('#contador').val(0);
//    }
//}

/************************ FILTRAR POR DATA ***********************/

function FiltrarPorData() {

    var DataInicio = $('#data-inicio').val();
    var DataFim = $('#data-fim').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIContratoConvenio',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticas(resultado.dadosContratoConvenio);
                MontarTabela(resultado.dadosContratoConvenio);
            }
        });
    }
}

function FiltrarPorDataGateWay() {

    var DataInicio = $('#data-inicio-gateway').val();
    var DataFim = $('#data-fim-gateway').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterKPIFaturamentoODC',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarGraficoPizza(resultado.dadosFaturamentoODC);
                MontarTabelaGateway(resultado.dadosContratoConvenio);
            }
        });
    }
}

function FiltrarPorDataNegativo() {

    var DataInicio = $('#data-inicio-negativo').val();
    var DataFim = $('#data-fim-negativo').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKpiContratoNegativo',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasContratoNegativo(resultado.dadosContratoNegativo);
                MontarTabelaNegativo(resultado.dadosContratoNegativo);
            }
        });
    }
}

function FiltrarPorDataGerador() {

    var DataInicio = $('#data-inicio-gerador').val();
    var DataFim = $('#data-fim-gerador').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIDespesasGeradorODC',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasGerador(resultado.dadosDespesasGeradorODC);
                MontarTabelaGerador(resultado.dadosDespesasGeradorODC);
            }
        });
    }
}

function FiltrarPorDataPeriodo() {

    var DataInicio = $('#data-inicio-periodo').val();
    var DataFim = $('#data-fim-periodo').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIFaturamentoPeriodo',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarGraficoPizzaPeriodo(resultado.dadosFaturamentoPeriodo);
                MontarTabelaPeriodo(resultado.dadosFaturamentoPeriodo);
            }
        });
    }
}

function FiltrarPorDataTodas() {

    var DataInicio = $('#data-inicio-todas').val();
    var DataFim = $('#data-fim-todas').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIFaturamentoTodas',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasTodas(resultado.dadosFaturamentoTodas);
                MontarTabelaTodas(resultado.dadosFaturamentoTodas);
            }
        });
    }
}

function FiltrarPorDataCaixa() {

    var DataInicio = $('#data-inicio-Caixa').val();
    var DataFim = $('#data-fim-Caixa').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIFluxoCaixaMensal',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasCaixa(resultado.dadosFluxoCaixaMensal);
                MontarTabelaCaixa(resultado.dadosFluxoCaixaMensal);
            }
        });
    }
}

function FiltrarPorDataInadimplentes() {

    var DataInicio = $('#data-inicio-Inadimplentes').val();
    var DataFim = $('#data-fim-Inadimplentes').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterKPIInadimplentes60',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasInadimplentes(resultado.dadosInadimplentes60);
                MontarTabelaInadimplentes(resultado.dadosInadimplentes60);
            }
        });
    }
}

function FiltrarPorDataCaptador() {

    var DataInicio = $('#data-inicio-Captador').val();
    var DataFim = $('#data-fim-Captador').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterDadosKPIPerformanceCaptador',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarEstatisticasCaptador(resultado.dadosPerformanceCaptador);
                MontarTabelaCaptador(resultado.dadosPerformanceCaptador);
            }
        });
    }
}

function FiltrarPorDataResultado() {

    var DataInicio = $('#data-inicio-resultado').val();
    var DataFim = $('#data-fim-resultado').val();
    var json = { dataInicio: DataInicio, dataFim: DataFim };

    if (DataInicio == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data de início obrigatória!");
    }
    else if (DataFim == "") {
        $('#modalPush').show();
        $('.Conteudo-modal').html("Data final obrigatória!");
    }
    else {
        $.ajax({
            type: 'POST',
            url: 'Home/ObterKPIResultadoODC',
            datatype: 'json',
            data: json,
            success: function (result) {
                const resultado = JSON.parse(result);
                MontarGraficoPizzaResultado(resultado.dadosResultadoODC);
                MontarTabelaResultado(resultado.dadosResultadoODC);
            }
        });
    }
}


/***************** ATUALIZAR DATAS *********************/

function AtualizarDatas() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var StartDate = '';

    var endDate = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day;

    if (month == 1) {
        StartDate = d.getFullYear() + '-' +
            12 + '-' +
            (day < 10 ? '0' : '') + day;
    }
    else {
        month = month - 1;
        StartDate = d.getFullYear() + '-' +
            (month < 10 ? '0' : '') + month + '-' +
            (day < 10 ? '0' : '') + day;
    }

    $('#data-inicio').val(StartDate);
    $('#data-fim').val(endDate);

    $('#data-inicio-gateway').val(StartDate);
    $('#data-fim-gateway').val(endDate);

    $('#data-inicio-negativo').val(StartDate);
    $('#data-fim-negativo').val(endDate);

    $('#data-inicio-gerador').val(StartDate);
    $('#data-fim-gerador').val(endDate);

    $('#data-inicio-periodo').val(StartDate);
    $('#data-fim-periodo').val(endDate);

    $('#data-inicio-todas').val(StartDate);
    $('#data-fim-todas').val(endDate);

    $('#data-inicio-Caixa').val(StartDate);
    $('#data-fim-Caixa').val(endDate);

    $('#data-inicio-Inadimplentes').val(StartDate);
    $('#data-fim-Inadimplentes').val(endDate);

    $('#data-inicio-Captador').val(StartDate);
    $('#data-fim-Captador').val(endDate);

    $('#data-inicio-resultado').val(StartDate);
    $('#data-fim-resultado').val(endDate);
}

/************************ MONTAR TABELA ***********************/

function MontarTabela(dados) {

    var content = JSON.parse(dados);
    $('.body-table').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="apelido"> ' + content[i].Apelido + ' </td>' +
            '<td id="kw"> ' + content[i].Kwh + ' </td>' +
            '<td id="assinatura"> ' + content[i].Assinatura + ' </td>' +
            '<td id="totalContrato"> ' + content[i].TotalContrato + ' </td>' +
            '</tr>');
    }

    $('.body-table').html(cont);
}

function MontarTabelaGateway(dados) {

    var content = JSON.parse(dados);
    $('.body-table-gateway').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="Situacao-gateway"> ' + content[i].Situacao + ' </td>' +
            '<td id="Faturamento-gateway"> ' + content[i].Faturamento + ' </td>' +
            '<td id="KwhInjetado-gateway"> ' + content[i].KwhInjetado + ' </td>' +
            '<td id="Qtde-gateway"> ' + content[i].Qtde + ' </td>' +
            '</tr>');
    }

    $('.body-table-gateway').html(cont);
}

function MontarTabelaNegativo(dados) {

    var content = JSON.parse(dados);
    $('.body-table-negativo').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="IdContrato-negativo"> ' + content[i].IdContrato + ' </td>' +
            '<td id="TarifaMedia-negativo"> ' + content[i].TarifaMedia + ' </td>' +
            '<td id="TotalInjetado-negativo"> ' + content[i].TotalInjetado + ' </td>' +
            '<td id="ValorLiquido-negativo"> ' + content[i].ValorLiquido + ' </td>' +
            '</tr>');
    }

    $('.body-table-negativo').html(cont);
}

function MontarTabelaGerador(dados) {

    var content = JSON.parse(dados);
    $('.body-table-despesas').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="IdOdcCorrente-despesas"> ' + content[i].IdOdcCorrente + ' </td>' +
            '<td id="Usina-despesas"> ' + content[i].Usina + ' </td>' +
            '<td id="KwhInjetadoTotal-despesas"> ' + content[i].KwhInjetadoTotal + ' </td>' +
            '<td id="Tarifa-despesas"> ' + content[i].Tarifa + ' </td>' +
            '<td id="TotalPagar-despesas"> ' + content[i].TotalPagar + ' </td>' +
            '</tr>');
    }

    $('.body-table-despesas').html(cont);
}

function MontarTabelaPeriodo(dados) {

    var content = JSON.parse(dados);
    $('.body-table-Periodo').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="Situacao-periodo"> ' + content[i].Situacao + ' </td>' +
            '<td id="Qtde-periodo"> ' + content[i].Qtde + ' </td>' +
            '<td id="Faturamento-periodo"> ' + content[i].Faturamento + ' </td>' +
            '</tr>');
    }

    $('.body-table-Periodo').html(cont);
}

function MontarTabelaTodas(dados) {

    var content = JSON.parse(dados);
    $('.body-table-Todas').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="IdOdcCorrente-todas"> ' + content[i].IdOdcCorrente + ' </td>' +
            '<td id="Descusina-todas"> ' + content[i].Descusina + ' </td>' +
            '<td id="Despesas-todas"> ' + content[i].Despesas + ' </td>' +
            '<td id="Faturamento-todas"> ' + content[i].Faturamento + ' </td>' +
            '<td id="KwInjetado-todas"> ' + content[i].KwInjetado + ' </td>' +
            '<td id="Resultado-todas"> ' + content[i].Resultado + ' </td>' +
            '<td id="TarifaGerador-todas"> ' + content[i].TarifaGerador + ' </td>' +
            '<td id="TotalFaturas-todas"> ' + content[i].TotalFaturas + ' </td>' +
            '</tr>');
    }

    $('.body-table-Todas').html(cont);
}

function MontarTabelaCaixa(dados) {

    var content = JSON.parse(dados);
    $('.body-table-Caixa').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="IdOdc-Caixa"> ' + content[i].IdOdc + ' </td>' +
            '<td id="Descusina-Caixa"> ' + content[i].Descusina + ' </td>' +
            '<td id="Distribuidora-Caixa"> ' + content[i].Distribuidora + ' </td>' +
            '<td id="MesDesc-Caixa"> ' + content[i].MesDesc + ' </td>' +
            '<td id="Ano-Caixa"> ' + content[i].Ano + ' </td>' +
            '<td id="TotalFaturas-Caixa"> ' + content[i].TotalFaturas + ' </td>' +
            '<td id="TotalReceita-Caixa"> ' + content[i].TotalReceita + ' </td>' +
            '<td id="KwInjetado-Caixa"> ' + content[i].KwInjetado + ' </td>' +
            '<td id="TarifaGerador-Caixa"> ' + content[i].TarifaGerador + ' </td>' +
            '<td id="TotalDespesas-Caixa"> ' + content[i].TotalDespesas + ' </td>' +
            '</tr>');
    }

    $('.body-table-Caixa').html(cont);
}

function MontarTabelaInadimplentes(dados) {

    var content = JSON.parse(dados);
    $('.body-table-Inadimplentes').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="Situacao-Inadimplentes"> ' + content[i].Situacao + ' </td>' +
            '<td id="DataVencimento-Inadimplentes"> ' + content[i].DataVencimento + ' </td>' +
            '<td id="Quantidade_Dias-Inadimplentes"> ' + content[i].Quantidade_Dias + ' </td>' +
            '<td id="ValorInadimplencia-Inadimplentes"> ' + content[i].ValorInadimplencia + ' </td>' +
            '</tr>');
    }

    $('.body-table-Inadimplentes').html(cont);
}

function MontarTabelaCaptador(dados) {

    var content = JSON.parse(dados);
    $('.body-table-Captador').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="Apelido-captador"> ' + content[i].Apelido + ' </td>' +
            '<td id="TotalContrato-captador"> ' + content[i].TotalContrato + ' </td>' +
            '<td id="Assinatura-captador"> ' + content[i].Assinatura + ' </td>' +
            '<td id="Kwh-captador"> ' + content[i].Kwh + ' </td>' +
            '</tr>');
    }

    $('.body-table-Captador').html(cont);
}

function MontarTabelaResultado(dados) {

    var content = JSON.parse(dados);
    $('.body-table-resultado').html("");
    var cont = "";

    for (var i = 0; i < content.length; i++) {
        cont += ('<tr>' +
            '<td id="IdOdcCorrente-resultado"> ' + content[i].IdOdcCorrente + ' </td>' +
            '<td id="TotalFaturas-resultado"> ' + content[i].TotalFaturas + ' </td>' +
            '<td id="Descusina-resultado"> ' + content[i].Descusina + ' </td>' +
            '<td id="KwInjetado-resultado"> ' + content[i].KwInjetado + ' </td>' +
            '<td id="TarifaGerador-resultado"> ' + content[i].TarifaGerador + ' </td>' +
            '<td id="Faturamento-resultado"> ' + content[i].Faturamento + ' </td>' +
            '<td id="Despesas-resultado"> ' + content[i].Despesas + ' </td>' +
            '<td id="Resultado-resultado"> ' + content[i].Resultado + ' </td>' +
            '</tr>');
    }

    $('.body-table-resultado').html(cont);
}

