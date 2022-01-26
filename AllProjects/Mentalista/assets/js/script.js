// Números gerados entre 0 e 10 (inteiros --> Math.floor())
var secretNum = Math.floor(Math.random() * 11)
var inputResult = document.getElementById("resultado")
var tentativa = 3


function Chutar() {

    var valorNum = parseInt(document.getElementById("valor").value)
    var inputResult = document.getElementById("resultado")
    var botaoChute = document.getElementById("botaoChute")
    var botaoTenteNovamente = document.getElementById("botaoTenteNovamente")

    // Validação se o número do input não for entre 0 a 10
    if(valorNum < 0 || valorNum > 10) {
        inputResult.innerHTML = "Insira um número de 0 a 10!"

    } else if(Number.isNaN(valorNum)) {
        inputResult.innerHTML = "Insira um número para prosseguir."

    } else if(valorNum == secretNum) {
        inputResult.innerHTML = "Você acertou!"

        botaoChute.style.display = "none"
        botaoTenteNovamente.style.display = "inline-block"

    } else if (valorNum > secretNum) {
        inputResult.innerHTML = "Você errou! Tente novamente<br><span>Dica: É um número menor</span>"
        tentativa--

    } else if (valorNum < secretNum) {
        inputResult.innerHTML = "Você errou! Tente novamente<br><span>Dica: É um número maior</span>"
        tentativa--
    }

    // Numero de tentativas
    if(tentativa <= 0) {
        inputResult.innerHTML = "Acabou as tentativas!<br><span>Número secreto: " + secretNum + "</span>"


        // Mudança das propriedades dos elementos no css
        botaoChute.style.display = "none"
        botaoTenteNovamente.style.display = "inline-block"
    
    }

}