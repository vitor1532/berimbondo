var altura = 0
var largura = 0
var vidas = 3
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace ('?', '')

if(nivel === 'normal'){

	criaMosquitoTempo = 1500

} else if(nivel === 'dificil'){

	criaMosquitoTempo = 1000

} else if (nivel === 'crybaby') {

	criaMosquitoTempo = 750

}

function ajustaTamanhoPalco() {

	altura = window.innerHeight
	largura = window.innerWidth

}

ajustaTamanhoPalco()

var cronometro = setInterval(function(){

	tempo -=1

	if(tempo < 0){

		window.location.href = 'vitoria.html'
		clearInterval(cronometro)
		clearInterval(criaMosca)

	}else {

		document.getElementById('timer').innerHTML = tempo
	
	}

}, 1000)


//criar o elemento html
function posicaoRandomica(){


	if(document.getElementById('mosquito')){

		document.getElementById('mosquito').remove()

		if(vidas < 1) {

			window.location.href = 'fim.html'

		} else {

			document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

			vidas--

		}
		
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'img/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}


	document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {

		case 0: 
			return 'mosquito1'

		case 1: 
			return 'mosquito2'

		case 2:
			return 'mosquito3'

	}

}

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch(classe){

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}

}