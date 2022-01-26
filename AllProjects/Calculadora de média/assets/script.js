function calcularMedia () {

    var nota1 = parseInt(document.getElementById("valor1").value)
    var nota2 = parseInt(document.getElementById("valor2").value)
    var nota3 = parseInt(document.getElementById("valor3").value)
    var nota4 = parseInt(document.getElementById("valor4").value)
    var inputResultado = document.getElementById("resultado")

    var resultado = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)

    if(resultado >= 6) {
        inputResultado.innerHTML = "Parabéns! Você foi aprovado(a) como a média de " + resultado

    } else {
        inputResultado.innerHTML = "Você foi reprovado(a) com a média de " + resultado 
    }

    // Verificação se há valor nos inputs
    if(Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3) || Number.isNaN(nota4)) {
        inputResultado.innerHTML = "PREENCHA TODOS OS CAMPOS"

    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        inputResultado.innerHTML = "INSIRA APENAS VALORES POSITIVOS"
    }   
}