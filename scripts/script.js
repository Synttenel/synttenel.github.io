const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");

//comodos
var comodos = ["Titulo", "Cozinha", "Sala", "Quarto", "Banheiro", "Final"];
var comodoMapas = ["#telaTitulo", "#mapaCozinha", "#mapaSala", "#mapaQuarto", "#mapaBanheiro", "#telaFinal"];
var comodoImagens = ["/assets/titulo.jpeg", "/assets/comodos/cozinha1.png", "/assets/comodos/sala1.png", "/assets/comodos/quarto1.png", "/assets/comodos/banheiro1.png", "/assets/final.jpeg"]
var comodoConsumoInicial = [670, 750, 700, 725];
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
	["tostadora", "Tostadora", 10, true],
	["cafeteira", "Cafeteira", 50, true]
];
var cozinhaProgresso = 0;
var cozinhaFaltando = 310;

const salaMapa = document.getElementsByName("mapaSala");
var salaObjetos = [
	["televisao", "Televisão", 150, true],
	["telefone", "Telefone", 25, true],
	["videogame", "Video-game", 100, true],
	["ventcond", "Vent-cond", 150, true],
	["luminaria", "Luminária", 25, true]
	
];
var salaProgresso = 0;
var salaFaltando = 450;

const quartoMapa = document.getElementsByName("mapaQuarto");
var quartoObjetos = [
	["pc", "Pc", 100, true],
	["impressora", "Impressora", 50, true],
	["alarme", "Alarme", 10, true],
	["ventilador", "Ventilador", 25, true],
	["ar", "Ar-condicionado", 150, true],
	
];
var quartoProgresso = 0;
var quartoFaltando = 335;

const banheiroMapa = document.getElementsByName("mapaBanheiro");
var banheiroObjetos = [
	["notebook", "Notebook", 100, true],
	["caixasom", "Caixa-som", 25, true],
	["lavaroupa", "Lava-roupa", 150, true],
	["chuveiro", "Chuveiro", 125, true],
	["secador", "Secador", 25, true]
];
var banheiroProgresso = 0;
var banheiroFaltando = 425;

//jogador
var comodoObjetos = [cozinhaObjetos, salaObjetos, quartoObjetos, banheiroObjetos];
var jogadorComodo = 0;
var jogadorProgresso = [cozinhaProgresso, salaProgresso, quartoProgresso, banheiroProgresso];
var jogadorEnergiaFaltando = [cozinhaFaltando, salaFaltando, quartoFaltando, banheiroFaltando];


function mudarTela(mapa){
	fundoJogo.src = comodoImagens[mapa];
	
	jogadorComodo = mapa;
	comodoAtual = comodos[mapa];
	
	if(mapa != 0){ interfaceHUD.style.visibility = "visible"; }
	if(mapa == 5){ interfaceHUD.style.visibility = "hidden"; }
	
	consumoAtual.innerHTML = comodoConsumoInicial[mapa - 1];
	consumoInicial.innerHTML = comodoConsumoInicial[mapa - 1];
	
	fundoJogo.setAttribute('usemap', comodoMapas[mapa]);
	//0096FF
$(document).ready(function () {
        'use strict';
	 $('img[usemap]').mapster({
        mapKey: 'data-key',
  fillColor: '4F7942',
  fillOpacity: 0.3,
  highlight: true,
  isSelectable: true,
  isDeselectable: false,
  stroke: true,
  strokeColor: '228B22',
  strokeWidth: 2, 
        scaleMap: true,  // Escala o <map> e seus elementos
	altImages: {
 		altcozinha: 'assets/comodos/cozinha2.png',
		altsala1: 'assets/comodos/sala2.png',
		altsala2: 'assets/comodos/sala3.png',
		altquarto1: 'assets/comodos/quarto2.png',
		altquarto2: 'assets/comodos/quarto3.png',
		atlbanheiro: 'assets/comodos/banheiro2.png'
		
	},
	areas: [
		{key: 'tela', highlight: false, isSelectable: false},
		{key: 'final', highlight: false, isSelectable:false},
		{key: 'geladeira', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'microondas', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'fogão', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'tostadora', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'cafeteira', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'televisão', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'telefone', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'videogame', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'ventcond', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'luminaria', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'pc', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'impressora', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'alarme', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'ventilador', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'ar', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto2'}},
	        {key: 'notebook', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'caixasom', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'lavaroupa', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'chuveiro', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'secador', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}}
	       
	       
	       ]
	
});})
	
	
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
