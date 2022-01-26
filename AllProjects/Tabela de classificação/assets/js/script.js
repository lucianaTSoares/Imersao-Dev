// OBJETOS, VARIAVEIS E CHAMADAS DE FUNÇOES
var player1 = {
    nome: "Player 1",
    vitorias: 1,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var player2 = {
    nome: "Player 2",
    vitorias: 0,
    empates: 1,
    derrotas: 0,
    pontos: 0
}

// Valor retornado atribuido para o valor da chave "pontos"
player1.pontos = calcularPontos(player1);
player2.pontos = calcularPontos(player2);

// Lista de jogadores
var listaJogadores = [player1, player2];

// Chama funcao listar jogadores
listar(listaJogadores);


//FUNÇOES

// Funçao de calculo de pontos
function calcularPontos(jogador) {
    var totalPontos = (jogador.vitorias * 2) + jogador.empates

    return totalPontos;
}

// Funçao para listar jogadores
function listar(listaJogadores) {

    // Variavel onde ficará cada linha do elemento (<tr> e <td>), o "" representa um elemento vazio
    var elemento = "";

    // Comando "for" para percorrer a lista e imprimir os valores das chaves na tabela HTML
    for (var i = 0; i < listaJogadores.length; i++) {
        elemento += "<tr>"
        elemento += "<td>" + listaJogadores[i].nome + "</td>";
        elemento += "<td>" + listaJogadores[i].vitorias + "</td>" ;
        elemento += "<td>" + listaJogadores[i].empates + "</td>";
        elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
        elemento += "<td>" + listaJogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    // Mostrar os dados dos jogadores dentro da tabela
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

// Funçao para adicionar vitorias
function adicionarVitoria(i) {
    var jogador = listaJogadores [i];

    jogador.vitorias++;
    jogador.pontos = calcularPontos(jogador);
    listar(listaJogadores);
}

// Funçao para adicionar empates
function adicionarEmpate(i) {
    var jogador = listaJogadores[i];

    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    listar(listaJogadores);
}

// Funçao para adicionar derrotas
function adicionarDerrota(i) {
    var jogador = listaJogadores[i];
    
    jogador.derrotas++;
    listar(listaJogadores);
}