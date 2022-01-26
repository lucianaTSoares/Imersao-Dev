function ConverterDolar() {

    //SELEÇÃO DO ELEMENTO HTML E SELEÇÃO DO VALOR DO ELEMENTO PARA A MEMÓRIA
    var valorInput = document.getElementById("valor")

    var valor = valorInput.value
    
    //CONVERSÃO DO VALOR EM TEXTO PARA NUMÉRICO
    var valorDolar = parseFloat(valor)

    //CONVERSÃO DO VALOR EM REAL PARA DOLAR E BITCOIN
    var valorReal = (valorDolar * 5.3).toFixed(2)
    var valorBitcoin = (valorDolar * 0.000021)

    //SELEÇÃO DO ELEMENTO PARA APARECER O VALOR NA TELA
    var displayConversao = document.getElementById("valorConvertido")
    var valorConvertido = "US$" + valorDolar + " = R$" + valorReal + " = " + valorBitcoin + " Bitcoin"
    
    //DISPLAY DO VALOR NA TELA
    displayConversao.innerHTML = valorConvertido

    //CONDICIONAL PARA SE O VALORDOLAR NÃO FOR UM NÚMERO (NaN) OU IGUAL A 0
    if(Number.isNaN(valorDolar) || valorDolar === 0) {
        var mensagemErro = "Insira um valor válido!"
        displayConversao.innerHTML = mensagemErro
    }
}

function ConverterLibra() {

    var valorInput = document.getElementById("valor")
    var valor = valorInput.value
    var valorLibra = parseFloat(valor)

    var valorReal = (valorLibra * 7.2).toFixed(2)
    var valorBitcoin = (valorLibra * 0.000029)

    var displayConversao = document.getElementById("valorConvertido")
    var valorConvertido = "£" + valorLibra + " = R$" + valorReal + " = " + valorBitcoin + " Bitcoin"
    displayConversao.innerHTML = valorConvertido

    if(Number.isNaN(valorLibra) || valorLibra === 0) {
        var mensagemErro = "Insira um valor válido!"
        displayConversao.innerHTML = mensagemErro
    }
}


// PASSO A PASSO DO QUE ACONTECE NO CÓDIGO


// 1. document.getElementById("valor") --> Faz com que o elemento no HTML (no caso o input) seja selecionado pelo ID;

// 2. valorInput.value --> Pega de fato o valor escrito no input (valor está em texto) e armazena na memória;

// 3. parseFloat(valor) --> Pega a variável anterior, onde está o valor do input, e o converte para numérico;

// 4. Cria-se uma variável onde ficará armazenado o resultado da conversão de dolar para real;

// 5. Para mostrar o resultado na conversão na tela da página web, é preciso selecionar outro elemento HTML (h2) que possua 
//     um ID para que o resultado apareça dentro desse elemento;

// 6. displayConversao.innerHTML = valorConvertido --> O .innerHTML indica que, dentro da variável "displayConversao", vai
//     ser mostrado o valor da variável "valorConvertido".