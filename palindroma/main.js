// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
"use strict";

const parolaInserita = prompt("inserisci una parola");

function palindroma(parolaInserita) {
    let i = 0;
    let j = parolaInserita.length - 1;
    while(i < j){
        if(parolaInserita[i] !== parolaInserita[j]){
            debugger;
            return false;
        }
        i++;
        j--;
    }
    return true;
}
if(palindroma(parolaInserita)){
    console.log("la parola inserita è palindroma");
} else {
    console.log("la parola inserita NON è palindroma");
}
