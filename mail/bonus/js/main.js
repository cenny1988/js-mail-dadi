/*
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.
Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina.
*/

// creamo una lista fake con indirizzi mail
const listMailArray = ['mail1@gmail.com','mail2@gmail.com','mail3@gmail.com','fusco.gennaro@hotmail.it'];

// chiediamo all'utente la propria mail e la salviamo - aggiungiamo una variabile di stato mail non trovata per stampare messaggio negativo alla fine 
let mailUser = prompt("Inserisci qui la tua mail per l'accesso: ")
let mailVerified = false;

// cicliamo la mail del cliente nella lista e stampiamo un msg di buon esito se c'è.
for (i=0; i<listMailArray.length; i++){
    if (listMailArray[i] === mailUser){
        mailVerified = true;
        console.log('La tua mail risulta in lista, complimenti!');
    }
}

//se la mail non è stata trovata nel ciclo precedente stampiamo msg negativo
if (mailVerified === false){
    console.log('Spiacente la tua mail non è presente in lista!');
}

