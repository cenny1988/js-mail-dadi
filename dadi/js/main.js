/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

// generiamo un numero random per User
let numUser = Math.floor((Math.random() * 6) + 1)
console.log(numUser);

// generiamo un numero random per PC
let numPc = Math.floor((Math.random() * 6) + 1)
console.log(numPc);

// confrontiamo in 2 numeri e verifichiamo chi vince
if (numUser === numPc){
    console.log('Nessun vincitore! Siete pari!')
} else if (numUser >= numPc){
    console.log('Complimenti hai vinto!')
}else if (numUser <= numPc){
    console.log('Mi dispiace hai perso! Ritenta')
}

