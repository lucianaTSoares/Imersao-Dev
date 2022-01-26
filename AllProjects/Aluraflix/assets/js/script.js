function adicionarFilme () {

    var imagemFilme = document.getElementById("filme").value
    var nomeFilme = document.getElementById("nomeFilme").value
    var mensagemErro = document.getElementById("mensagemErro")

    console.log(nomeFilme)

    if(imagemFilme.endsWith(".jpg") || imagemFilme.endsWith(".png")) {

        listarFilmes(imagemFilme, nomeFilme);  
        
    } else {
        mensagemErro.innerHTML = "Insira uma imagem em formato JPG ou PNG."
    }

}

function listarFilmes (imagemFilme, nomeFilme) {

    var listaFilmes = document.getElementById("elementoLista")
    var filme = "<li><img src=" + imagemFilme + "><h3>" + nomeFilme + "</h3></li>"

    listaFilmes.innerHTML = listaFilmes.innerHTML + filme 

}