// Lista de cartas
var listaCartas = [
    
    carta1 = {

        Nome: "Hitmonlee",
        Tipo: "Lutador",
        imagem: "https://pa1.narvii.com/6517/c3375dfca92935e10418003c4f743253a315b7c5_hq.gif",
        atributos: {
            Ataque: 5350,
            Defesa: 5700,
            Altura: 1.5,
            Peso: 49.8,
        }
    },

    carta2 = {

        Nome: "Pikachu",
        Tipo: "Elétrico",
        imagem: "https://pa1.narvii.com/6946/ce40e06716f5e9a032bf98dce1456ee965aba00ar1-500-281_hq.gif",
        atributos: {
            Ataque: 5300,
            Defesa: 5600,
            Altura: 0.40,
            Peso: 6,
        }
    },

    carta3 = {

        Nome: "Mew",
        Tipo: "Psíquico",
        imagem: "https://i.imgur.com/AfK976w.gif",
        atributos: {
            Ataque: 2150,
            Defesa: 2960,
            Altura: 0.40,
            Peso: 4,
        }
    },

    carta4 = {

        Nome: "Bubassauro",
        Tipo: "Planta",
        imagem: "https://img3.spoki.lv/upload2/articles/69/694374/images/NOTnormal-29.gif",
        atributos: {
            Ataque: 1800,
            Defesa: 3800,
            Altura: 0.7,
            Peso: 7,
        }
    },

    carta5 = {

        Nome: "Dragonite",
        Tipo: "Dragão",
        imagem: "https://appzzang.me/data/file/animation/1982796218_WzaAjLw5_tumblr_n6itgajIl61rpn9eno1_r1_500.gif",
        atributos: {
            Ataque: 2800,
            Defesa: 3100,
            Altura: 2,
            Peso: 210,
        }
    },

    carta6 = {

        Nome: "Moltres",
        Tipo: "Fogo",
        imagem: "https://pa1.narvii.com/6475/41ac8eb65bb1e286562acb59cfb19bb61ac3c093_hq.gif",
        atributos: {
            Ataque: 2800,
            Defesa: 3580,
            Altura: 2,
            Peso: 60,
        }
    },

    carta7 = {

        Nome: "MewTwo",
        Tipo: "Psíquico",
        imagem: "https://78.media.tumblr.com/c455367533ca60e7afebd3eacab1eda5/tumblr_nobbzwETl91rlulmlo1_1280.gif",
        atributos: {
            Ataque: 3300,
            Defesa: 2700,
            Altura: 2,
            Peso: 122,
        }
    },

    carta8 = {

        Nome: "Arcanine",
        Tipo: "Fogo",
        imagem: "https://pa1.narvii.com/7995/b71ae532c484efc84dab7533ecfa1836ae5616d7r1-540-298_hq.gif",
        atributos: {
            Ataque: 3800,
            Defesa: 4200,
            Altura: 2,
            Peso: 155,
        }
    },

    carta9 = {

        Nome: "Glaceon",
        Tipo: "Gelo",
        imagem: "https://i.pinimg.com/originals/88/a4/ad/88a4ad3882c1f44c17897a4e4ee5a59e.gif",
        atributos: {
            Ataque: 4350,
            Defesa: 4700,
            Altura: 0.8,
            Peso: 25,
        }
    },

    carta10 = {

        Nome: "Haunter",
        Tipo: "Fantasma",
        imagem: "https://i.pinimg.com/originals/93/3a/10/933a10f467cd0dd039a23ccb56bc50dc.gif",
        atributos: {
            Ataque: 1130,
            Defesa: 1250,
            Altura: 1.6,
            Peso: 0.1,
        }
    },

    carta11 = {

        Nome: "Blastoise",
        Tipo: "Água",
        imagem: "https://pa1.narvii.com/6529/51549a704cd4e4ce821338b162ea1ea3c060b6a6_hq.gif",
        atributos: {
            Ataque: 2200,
            Defesa: 2450,
            Altura: 1.6,
            Peso: 85,
        }
    },

    carta12 = {

        Nome: "Charizard",
        Tipo: "Fogo",
        imagem: "https://pa1.narvii.com/6814/0d262a0fc17fb695ffb50f8a2740f5f4c077a3a8_hq.gif",
        atributos: {
            Ataque: 980,
            Defesa: 1200,
            Altura: 1.7,
            Peso: 85,
        }
    },

    carta13 = {

        Nome: "Sandslash",
        Tipo: "Terrestre",
        imagem: "https://pa1.narvii.com/6199/235d59c0265299beea8e2e3aa588c7eae02c01f2_hq.gif",
        atributos: {
            Ataque: 4100,
            Defesa: 4350,
            Altura: 1,
            Peso: 39,
        }
    },

    carta14 = {

        Nome: "Meganium",
        Tipo: "Planta",
        imagem: "https://pa1.narvii.com/6756/16701fb7c22b9d37158e09ecdcea8391b15c248d_hq.gif",
        atributos: {
            Ataque: 3350,
            Defesa: 3960,
            Altura: 1.8,
            Peso: 100,
        }
    },

    carta15 = {

        Nome: "Jigglypuff",
        Tipo: "Normal",
        imagem: "http://pa1.narvii.com/6852/782174866c3fb2a51669e21fe1eae91654085592_00.gif",
        atributos: {
            Ataque: 2430,
            Defesa: 3720,
            Altura: 0.5,
            Peso: 5,
        }
    }
]

var cartaJogador
var cartaMaquina

// Funçao para sortear as cartas aleatoriamente
function sortearCarta() {
    divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = "<img src='./assets/img/card-template.png'>"

    while(numCartaJogador == numCartaMaquina) {
        var numCartaJogador = Math.floor(Math.random() * 15)
        cartaJogador = listaCartas[numCartaJogador]

        var numCartaMaquina = Math.floor(Math.random() * 15)
        cartaMaquina = listaCartas[numCartaMaquina]

        parseInt(cartaJogador.atributos.Peso)
    }

    console.log(cartaJogador)
    console.log(cartaMaquina)

    document.getElementById("resultado").innerHTML = ""
    document.getElementById("btnSortear").style.display = "none"
    document.getElementById("btnJogar").style.display = "inline-block"

    divCartaMaquina.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/5405/5405894.png')"
    divCartaMaquina.innerHTML = moldura

    exibirCartaJogador()
}

// Funçao para mostrar as opçoes de atributos na carta
function exibirCartaJogador() {
    document.getElementById("wrapper").style.display = "flex"

    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url("${cartaJogador.imagem}")`
    divCartaJogador.style.backgroundRepeat = "no-repeat"
    divCartaJogador.style.backgroundSize = "cover"
    divCartaJogador.style.backgroundPositionX = "center"
    
    var moldura = "<img src='./assets/img/card-template.png'>"
    var nomeCarta = `<p class="carta-title">${cartaJogador.Nome}</p><br>`
    var tipoCarta = `<p class="carta-type"><span>Tipo:</span> ${cartaJogador.Tipo}</p>`
    var divOpcoes = "<div class='opcoes' id='opcoes'>"
    var radioOpcoes = ""

    for(var atributo in cartaJogador.atributos) {
        radioOpcoes += "<input type='radio' name='atributo' id='" + atributo + "' value='" + atributo + "'><label for='" + atributo + "'><span>" + atributo + ":</span> " + cartaJogador.atributos[atributo] + "</label><br>"
    }

    divCartaJogador.innerHTML = moldura + nomeCarta + tipoCarta + divOpcoes + radioOpcoes + "</div>"
    document.getElementById("Ataque").checked = true
}

// Funçao para retornar o valor de qual atributo foi selecionado
function opcaoSelecionada() {
    var radioOpcoes = document.getElementsByName("atributo")

    for(var i = 0; i < radioOpcoes.length; i++) {

        if(radioOpcoes[i].checked == true) {
            return radioOpcoes[i].value
        }
    }

    console.log(opcaoSelecionada())
}

// Funçao do botao jogar
function jogar() {
    var atributoValor = opcaoSelecionada()
    var resultado = document.getElementById("resultado")
    var pontosJogador = 0
    var pontosMaquina = 0

    console.log(cartaJogador.atributos[atributoValor])
    console.log(cartaMaquina.atributos[atributoValor])

    if(cartaJogador.atributos[atributoValor] > cartaMaquina.atributos[atributoValor]) {
        resultado.innerHTML = "Você ganhou!"
        pontosJogador++

    } else if (cartaJogador.atributos[atributoValor] < cartaMaquina.atributos[atributoValor]) {
        resultado.innerHTML = "Você perdeu!"
        pontosMaquina++

    } else {
        resultado.innerHTML = "Empate!"
    }

    document.getElementById("btnRefresh").style.display = "inline-block"
    document.getElementById("btnJogar").disabled = true

    mostrarCartaMaquina()
}

function mostrarCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url("${cartaMaquina.imagem}")`
    divCartaMaquina.style.backgroundRepeat = "no-repeat"
    divCartaMaquina.style.backgroundSize = "cover"
    divCartaMaquina.style.backgroundPositionX = "center"
    
    var moldura = "<img src='./assets/img/card-template.png'>"
    var nomeCarta = `<p class="carta-title">${cartaMaquina.Nome}</p><br>`
    var tipoCarta = `<p class="carta-type"><span>Tipo:</span> ${cartaMaquina.Tipo}</p>`
    var divOpcoes = "<div class='opcoes' id='opcoes'>"
    var atributosOpcoes = ""

    for(var atributo in cartaMaquina.atributos) {
        atributosOpcoes += "<p><span>" + atributo + ":</span> " + cartaMaquina.atributos[atributo] + "</p><br>"
    }
    
    divCartaMaquina.innerHTML = moldura + nomeCarta + tipoCarta + divOpcoes + atributosOpcoes + "</div>"
}