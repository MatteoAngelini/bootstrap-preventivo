//Prova collegamento//
/* alert("Ciao")*/

/* Dati:

- Ore:10 ore

- Codici sconto: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

- Sconto: 25%

Il prezzo orario per una commissione varia in questo modo:

- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora

- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora

- se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

- Risultato del prezzo finale deve essere in forma umana con 2 decimali e il simbolo dell'euro  */








/* Richiesta dati:

- Prelevare dati di input dopo click del bottone

- Inserire oggetti all'interno di un array che viene creato ogni volta che viene cliccato il tasto */


/* Preleviamo dati form */
const businessForm = document.getElementById ("form")
const inputEmail = document.getElementById ("email")
const inputNome = document.getElementById ("nome")
const inputCognome = document.getElementById ("cognome")
const inputLavoro = document.getElementById ("tipolavoro")
const inputMessaggio = document.getElementById ("messaggio")
const inputCta = document.getElementById ("prevebtivo")
const inputAnnulla = document.getElementById ("annulla")



/* Preleviamo i valori dell'input */
const nome = inputNome.value;
const cognome = inputCognome.value;
const email = inputEmail.value;
const lavoro = inputLavoro.value;
const messaggio = inputMessaggio.value;

