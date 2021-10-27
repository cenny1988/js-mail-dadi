/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.
*/

// inizzializiamo un array di mail
const listMailArray = ['mail@gmail.com','mailprova@gmail.com','mailexample@gmail.com'];
//console.log(listMailArray);
// riferimenti pagina html
const ulDivList = document.getElementById('listmail');
const submitBtn = document.getElementById('submit');
let mailInput = document.getElementById('input-email');
let input = null;

// stampiamo l'array nell'ul
for( i=0; i<listMailArray.length; i++){
    let liItem = document.createElement('LI');
    liItem.append(listMailArray[i]);
    ulDivList.append(liItem);
};

//creiamo un li per ogni mail aggiunta cliccando submit da form
submitBtn.addEventListener('click',
    function(){
        //aggiungiamo la mail all'array
        input = mailInput.value;
        console.log(input);
        listMailArray.push(input);
        console.log(listMailArray);

        //dobbiamo aggiungere la mail dal form email nella lista
        let liItem = document.createElement('li');
        liItem.append(input);
        ulDivList.append(liItem);

    }
);


// chiediamo all'utente la propria mail e la salviamo - aggiungiamo una variabile di stato mail non trovata per stampare messaggio negativo alla fine 
//let mailUser = prompt("Inserisci qui la tua mail per l'accesso: ")
let mailVerified = false;

// cicliamo la mail del cliente nella lista e stampiamo un msg di buon esito se c'è.
// for (i=0; i<listMailArray.length; i++){
//     if (listMailArray[i] === mailUser){
//         mailVerified = true;
//         console.log('La tua mail risulta in lista, complimenti!');
//     }
// }

//se la mail non è stata trovata nel ciclo precedente stampiamo msg negativo
// if (mailVerified === false){
//     console.log('Spiacente la tua mail non è presente in lista!');
// }

