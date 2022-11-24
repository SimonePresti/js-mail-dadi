// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// FIRST EXERCISE

const player = (Math.floor((Math.random() * 6) + 1));
console.log (player)

const computer = (Math.floor((Math.random() * 6) + 1));
console.log (computer)

if (player > computer) {
    console.log ('Player Win');

} else if ( player < computer) {
    console.log ('Computer Win');

} else if (player === computer) {
    console.log ('Draw');

}



// SECOND EXERCISE
    
// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


const emails = [
    'Goku@gmail.com',
    'Rufy@gmail.com',
    'Naruto@gmail.com',
    'Deku@gmail.com',
    'Eren@gmail.com',
    'Guts@gmail.com',
];


const userEmail = document.getElementById ('e-mail');

const button = document.getElementById ('button');

let trovato = false;

for (let i = 0; i < lista.length; i++) {

    if 
}


    

