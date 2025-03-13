//Prova collegamento//
/* alert("Ciao") */

/* Dati:

- Ore:10 ore

- Codici sconto: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

- Sconto: 25%

Il prezzo orario per una commissione varia in questo modo:

- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora

- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora

- se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

- Risultato del prezzo finale deve essere in forma umana con 2 decimali e il simbolo dell'euro  */







/* Prelevo dati form */
const preventivoForm = document.getElementById("form");
const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputCognome = document.getElementById("cognome");
const inputLavoro = document.getElementById("lavoro");
const inputBackend = document.getElementById("backend")
const inputFrontend = document.getElementById("frontend")
const inputProject = document.getElementById("project")
const inputMessaggio = document.getElementById("messaggio");
const inputCodice = document.getElementById("codice")
const prezzoFinale = document.getElementById("prezzo-finale");



/* Event Listner */
preventivoForm.addEventListener("submit", gestisciForm,);

/* Funzioni */
function gestisciForm(event) {
    event.preventDefault();

    /* Prelevo elemento HTML per prezzo finale */

    /* Prelevo i valori dell'input */
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const email = inputEmail.value;
    const lavoro = inputLavoro.value;
    const backend = inputBackend.value;
    const frontend = inputFrontend.value;
    const project = inputProject.value
    const messaggio = inputMessaggio.value;
    const codice = inputCodice.value;
    
    /*Costrutto IF prezzo */
    let prezzoDecimali;
    if (lavoro === backend) {
        prezzo = 20.50 * 10; 
        prezzoDecimali = prezzo.toFixed(2)
    } else if (lavoro === frontend) {
        prezzo = 15.30 * 10;
        prezzoDecimali = prezzo.toFixed(2)
    } else if (lavoro === project) {
        prezzo = 33.60 * 10;
        prezzoDecimali = prezzo.toFixed(2)
    } else {
        console.log("Nessun dato inserito");  
    }
    console.log(prezzoDecimali);
    
    
    /* Codici sconto e prezzo scontato con costrutto IF*/
    const codici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]   
    
    codici.forEach(function (curElem, i){
        curSconto = (curElem, i) 
    });
    
    let prezzoDecimaliScontato;
    if (codice === curSconto) {
        prezzoDecimaliScontato = prezzoDecimali - 100;
    }else {
        console.log("Nessuno Sconto")
    }
     
    

    


    /* Ripulisco gli input */
    preventivoForm.reset();
 
}



/* Inserisco il valore nell'elemento del prezzo finale */






/* Mostro prezzo finale 
    prezzoFinale.classList.remove("d-none");*/



