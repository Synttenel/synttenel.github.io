const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");

//comodos
var comodos = ["Titulo", "Cozinha", "Sala", "Quarto", "Banheiro", "Final"];
var comodoMapas = ["#telaTitulo", "#mapaCozinha", "#mapaSala", "#mapaQuarto", "#mapaBanheiro", "#telaFinal"];
var comodoImagens = ["/assets/titulo.jpeg", "/assets/comodos/cozinha.png", "/assets/comodos/sala.png", "/assets/comodos/quarto.png", "/assets/comodos/banheiro.png", "/assets/final.jpeg"]
var comodoConsumoInicial = [670, 100, 100, 100];
var comodoAtual = comodos[0];

//interface
const interfaceHUD = document.getElementById("interfaceJogo");
const adesivoHUD = document.getElementById("adesivo");

const consumoAtual = document.getElementById("consumoAtual");
const consumoInicial = document.getElementById("consumoInicial");
const economiaTotal = document.getElementById("economiaTotal");

//quartos
const cozinhaMapa = document.getElementsByName("mapaCozinha");
var cozinhaObjetos = [
	["geladeira", "Geladeira", 25, true],
	["microondas", "Micro-ondas", 75, true],
	["fogao", "Fogão", 150, true],
	["lampada", "Lâmpada", 10, true],
	["liquidificador", "Liquidificador", 50, true]
];
var cozinhaProgresso = 0;
var cozinhaFaltando = 310;

const salaMapa = document.getElementsByName("mapaSala");
var salaObjetos = [
	["televisao", "Televisão", 100, true]
];
var salaProgresso = 0;
var salaFaltando = 100;

const quartoMapa = document.getElementsByName("mapaQuarto");
var quartoObjetos = [
	["ar", "Ar-condicionado", 100, true]
];
var quartoProgresso = 0;
var quartoFaltando = 100;

const banheiroMapa = document.getElementsByName("mapaBanheiro");
var banheiroObjetos = [
	["privada", "Privada Inteligente", 100, true]
];
var banheiroProgresso = 0;
var banheiroFaltando = 100;

//jogador
var comodoObjetos = [cozinhaObjetos, salaObjetos, quartoObjetos, banheiroObjetos];
var jogadorComodo = 0;
var jogadorProgresso = [cozinhaProgresso, salaProgresso, quartoProgresso, banheiroProgresso];
var jogadorEnergiaFaltando = [cozinhaFaltando, salaFaltando, quartoFaltando, banheiroFaltando];

function reescalarMapa(){
	var mapaElemento = document.getElementByName(comodoMapas[jogadorComodo].replace("#", ""));
	var escala = divJogo.clientWidth / fundoJogo.naturalWidth;
	var areaElemento = mapaElemento.querySelectorAll(`area`);

	console.log(mapaElemento);

    //areaElemento.forEach(area => {
     //   const coords = area.getAttribute('coords').split(',').map(Number);
    //    console.log(`Coordenadas Originais: ${coords}`);
	//
       // if (coords.length === 4) { // Verifique se temos 4 coordenadas
     //       const newCoords = coords.map(coord => Math.round(coord * escala));
   //         console.log(`Novas Coordenadas: ${newCoords}`);
    //        area.setAttribute('coords', newCoords.join(','));
      //  } else {
        //    console.error('Formato de coordenadas inválido. Esperado: left,top,right,bottom');
      //  }
    //});
}

function mudarTela(mapa){
	fundoJogo.src = comodoImagens[mapa];
	
	jogadorComodo = mapa;
	comodoAtual = comodos[mapa];
	
	if(mapa != 0){ interfaceHUD.style.visibility = "visible"; }
	if(mapa == 5){ interfaceHUD.style.visibility = "hidden"; }
	
	consumoAtual.innerHTML = comodoConsumoInicial[mapa - 1];
	consumoInicial.innerHTML = comodoConsumoInicial[mapa - 1];
	
	fundoJogo.setAttribute('usemap', comodoMapas[mapa]);
	
	reescalarMapa();
}

function objetoClicado(objetoNome){
	var objetos = comodoObjetos[jogadorComodo - 1];
	var objetoAtual = objetos[objetoNome]
	
	if(!objetoAtual[3]){
		return;
	} else {
		objetoAtual[3] = false;
		console.log(objetoAtual)
		jogadorProgresso[jogadorComodo - 1] += objetoAtual[2];
		jogadorEnergiaFaltando[jogadorComodo - 1] = jogadorEnergiaFaltando[jogadorComodo - 1] - objetoAtual[2];

		let resultado = jogadorProgresso[jogadorComodo - 1].toFixed(2).replace(".", ",");
		economiaTotal.innerHTML = resultado;
	}
	
	consumoAtual.innerHTML = (comodoConsumoInicial[jogadorComodo - 1] - jogadorProgresso[jogadorComodo - 1]).toString();

	if(jogadorEnergiaFaltando[jogadorComodo - 1] == 0){
		proximoComodo(jogadorComodo, jogadorComodo + 1);
	}
}

function proximoComodo(ultimoComodo, proximoComodo){
	alert("Comodo atual: " + comodos[ultimoComodo] + "\nPróximo comodo: " + comodos[proximoComodo]);
	mudarTela(proximoComodo);
}

// PHONES

let eventoToque = 'ontouchstart' in window ? 'touch' : 'clique';