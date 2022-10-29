// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
"use strict";

function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max-min +1)) + min;
}
function parChecker(num) {
    if(num % 2 === 0){
        return true;
    }else {
        return false;
    }
}
const pariOdispari = prompt("scegli pari o dispari");
const numeroInserito = Number(prompt("inserisci un numero da 1 a 5"));
const numeroRandom = getRndInteger(1, 5);
const tot = numeroInserito + numeroRandom;
console.log(numeroInserito);
console.log(numeroRandom);
console.log(tot);
if(parChecker(tot) && pariOdispari == "pari" || !parChecker(tot) && pariOdispari == "dispari") {
    console.log("hai vinto");
}else {
    console.log("hai perso");
}