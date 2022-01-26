function ConverterFahrenheit() {

    var valorInput = document.getElementById("valor")
    var valor = valorInput.value
    var temperaturaCelsius = parseFloat(valor)

    var temperaturaFahrenheit = ((temperaturaCelsius * 1.8) + 32).toFixed(1)

    var displayConversao = document.getElementById("valorConvertido")
    var valorConvertido = temperaturaCelsius + " °C = " + temperaturaFahrenheit + " °F"
    displayConversao.innerHTML = valorConvertido

    
    // SE O VALOR NÃO FOR NÚMERO (RETORNAR NaN), INSERE MENSAGEM DE ERRO NA TELA
    if(Number.isNaN(temperaturaCelsius)) {
        var mensagemErro = "Insira uma temperatura!"
        displayConversao.innerHTML = mensagemErro
    }
}


function ConverterKelvin() {

    var valorInput = document.getElementById("valor")
    var valor = valorInput.value
    var temperaturaCelsius = parseFloat(valor)

    var temperaturaKelvin = (temperaturaCelsius + 273.15).toFixed(2)

    var displayConversao = document.getElementById("valorConvertido")
    var valorConvertido = temperaturaCelsius + " °C = " + temperaturaKelvin + " K"
    displayConversao.innerHTML = valorConvertido

    if(Number.isNaN(temperaturaCelsius)) {
        var mensagemErro = "Insira uma temperatura!"
        displayConversao.innerHTML = mensagemErro
    }
}