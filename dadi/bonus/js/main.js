/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

// restiamo in attesa di un click per generare un numero utente
const clickUser = document.getElementById('user-btn');
const containerUser = document.getElementById('user');
const containerPc = document.getElementById('computer');
const containerWinner = document.getElementById('result');

let numUser, numPc;

// AL CLICK utente sul bottone
// creamo il div risultato UTENTE e aggiungiamo la classe result-container
// creamo il div risultato COMPUTER e aggiungiamo la classe result-container

const divResultUser = document.createElement('div');
divResultUser.classList.add('result-container');

const divResultPc = document.createElement('div');
divResultPc.classList.add('result-container');

const divWinner = document.createElement('div');
divWinner.classList.add('result-container');

clickUser.addEventListener('click',
    function(){

        // generiamo un numero random per User
        numUser = Math.floor((Math.random() * 6) + 1)
        //divResultUser.append(numUser);
        divResultUser.innerHTML = numUser;
        containerUser.append(divResultUser);

        // generiamo un numero random per Pc
        numPc = Math.floor((Math.random() * 6) + 1)
        //divResultPc.append(numPc);
        divResultPc.innerHTML = numPc;
        containerPc.append(divResultPc);

        // confrontiamo in 2 numeri e verifichiamo chi vince
        if (numUser === numPc){
            divWinner.innerHTML = 'Nessun vincitore! Siete pari!';
            containerWinner.append(divWinner);
        } else if (numUser >= numPc){
            divWinner.innerHTML = 'Complimenti hai vinto!';
            containerWinner.append(divWinner);
        }else if (numUser <= numPc){
            divWinner.innerHTML = 'Mi dispiace hai perso! Ritenta';
            containerWinner.append(divWinner);
        }

    }
);





