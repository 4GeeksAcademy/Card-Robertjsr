import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('.card').classList.add(generateRandomSimbols());
  document.querySelector('.card').innerHTML = generateRandomNumber();
};

let generateRandomNumber = () =>{
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let numerosRandom = Math.floor(Math.random()* numeros.length);
  return numeros[numerosRandom];
}

let generateRandomSimbols = () =>{
  let simbolos = ["diamond", "spade", "heart", "club"];
  let simbolosRandom = Math.floor(Math.random()* simbolos.length);
  return simbolos[simbolosRandom];
}