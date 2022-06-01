// Carne - 400 gr por pessoa + de 6 horas - 650 ok
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml  
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml 
// Criança valem por 0,5 

let inputAdultos = document.getElementById('adultos');
let inputCrianças = document.getElementById("crianças");
let inputDuração = document.getElementById("duração");

let resultado = document.getElementById("resultado");

function calcular(){
  console.log("calculando...");

  let adultos = inputAdultos.value;
  let crianças = inputCrianças.value;
  let duração = inputDuração.value;

  let qdtTotalCarne = carnePP(duração) *  adultos + (carnePP(duração) /2 * crianças);
  let qdtTotalCerveja = cervejaPP(duração) *  adultos;
  let qdtTotalRefri = RefriPP(duração) *  adultos + (RefriPP(duração) /2 * crianças);

  resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne </p>`
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefri / 2000)} Garrafas Pet´s 2l de refrigerante </p>`

}

function carnePP(duração) {
 
  if (duração >= 6){
    return 650;
  } else{
      return 400;
    }
 
}

function cervejaPP(duração){

  if( duração >= 6){
    return 2000;
  }else{
    return 1200;
  }
}

function RefriPP(duração){

  if (duração >= 6){
    return 1500;
  }else{
    return 1000
  }
}