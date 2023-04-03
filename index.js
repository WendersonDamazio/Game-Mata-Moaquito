//tamanho da tela 1070x2304

let altura = 0 
let largura = 0 
let vidas = 1
let tempo = 0
let criarMosquitoTempo = 0

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criarMosquitoTempo = 1500
    tempo = 20
}else if(nivel === 'dificil'){
    criarMosquitoTempo = 1000
    tempo = 25
}else if(nivel === 'chucknorris'){
    criarMosquitoTempo = 750
    tempo = 30
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterioe (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('V' + vidas).src = '../imagens/coracao_vazio.png'

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 180
    var posicaoY = Math.floor(Math.random() * altura) - 170

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
