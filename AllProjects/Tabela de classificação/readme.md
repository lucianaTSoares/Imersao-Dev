### **EXPLICAÇÃO DO CÓDIGO PASSO A PASSO**

1. Foram criados 2 objetos contendo as chaves nome, vitórias, empates, derrotas e pontos;

2. Foi criada uma função chamada "calcularPontos ()" para que o cálculo de total de pontos pudesse ser feito;
    - A funçao recebe a variavel do objeto (lucy ou rafa) para que possa ser trabalhado o calculo de pontos
    - A variavel que a fução recebeu terá o nome "jogador", e nela será especificada a chave para que possamos pegar o valor dessas chaves para realizar o calculo de pontos
    - O return na função fará o retorno do resultado (totalPontos).

3. Com o retorno do valor da resposta da função, é referenciada a chave .pontos em cada objeto para que o valor seja atribuído nele

4. É necessario listar os objetos na tabela do HTML e, para isso, foi criada uma lista (array) contendo os objetos dentro dela.

5. Foi criada outra função "listar()" com os comandos para inserir as propriedades dos objetos na tabela do HTML.
    - A variavel do array listaJogadores foi passada para a função
    - Dentro da função, é preciso criar uma variavel para que se possa armazenar a linha e as celulas onde estarão as propriedades dos objetos. Dessa forma, a variavel elemento é inicializada como um elemento vazio.
    - O comando "for" tem como objetivo pegar todos os dados dos objetos e imprimi-los para a tabela através de um loop (enquanto o i for menor que o tamanho da lista, irá imprimir todas as linhas que a variavel elemento possui)
    - cada linha da tabela precisa ser colocada dentro da variavel elemento através de adição 
    (exemplo: 
        elemento += --> elemento = elemento + "<td>" + listaJogadores[i].nome + "</td>"...)
    - Dentro das tags <td>, são adicionadas a listaJogadores e seu índice que será "i", pois irá percorrer toda a lista até que o i seja maior que ela.
    - É criada outra variavel tabelaJogadores para inserir o valor da variavel elemento dentro da tabela no HTML

6. Os botões presentes no HTML também possuem funções e, cada vez que um deles for clicados, serão chamadas as funções no js, que irão trocar os valores da tabela.
    - Ainda dentro da função "listar()", em cada atributos "onClick", foi adicionada a variavel i para que pudessem ser utilizadas nas funções posteriormente
    - Nas funções dos botões, o i é utilizado como um meio de saber qual jogador os botões correspondem, assim, a varaivel jogador é craida em cada uma delas e recebem o valor da listaJogadores e seu indice [i];
    - Em cada botão é adicionado +1 para os valores das chaves vitória, empate e derrota;
    - A variável jogador.pontos terá o valor que será retornado da função "calcularPontos", visto que foi adicionado mais um ponto na tabela e é preciso refazer o cáculo de total de pontos. A função recebe o valor da variavel jogador.
    - Após o valor retornar para o jogador.pontos, é chamada novamente a função "listar(listaJogadores) para que os dados dos objetos sejam listados corertamente.
*/