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
const outputPrezzo = document.getElementById("prezzo")
const outputScontoApplicato = document.getElementById("sconto-applicato")
/* Array Codici sconto e ciclo for*/
const codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",] 

/* Event Listner */
preventivoForm.addEventListener("submit", gestisciForm,);


/* Funzione*/
function gestisciForm(event) {
    event.preventDefault();


    /* Prelevo i valori dell'input */
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const email = inputEmail.value;
    const lavoro = inputLavoro.value;
    const backend = inputBackend.value;
    const frontend = inputFrontend.value;
    const project = inputProject.value
    const messaggio = inputMessaggio.value;
    const codice = inputCodice.value.trim();

    
    /* Assegnazione prezzo alla variabile */
    let prezzoBase = 0;
    if (lavoro === backend) {
        prezzoBase = 20.50 * 10; 
    } else if (lavoro === frontend) {
        prezzoBase = 15.30 * 10;
    } else if (lavoro === project) {
        prezzoBase = 33.60 * 10;   
    }
    
    /* Creazione variabili per decimali  */
    let prezzoFinaleDecimali = prezzoBase.toFixed(2);
    let prezzoScontatoDecimali = prezzoFinaleDecimali;
    

    /* Reset inner */
    outputPrezzo.innerHTML = "";
    outputScontoApplicato.innerHTML = "";
    
    
    /* Condizione per scontistica */
    if (codice !== "") {
            if (codiciSconto.includes(codice)){
                prezzoScontatoDecimali = prezzoFinaleDecimali - (prezzoBase * 25 / 100).toFixed(2);
                outputPrezzo.innerHTML = `<span class="text-center align-middle "><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoScontatoDecimali}</p></span>`;
                outputScontoApplicato.innerHTML = `<button type="button" class="btn btn-sm btn-success"id="sconto-applicato">Sconto del 25 % applicato</button>`;
            } else {
                outputScontoApplicato.innerHTML = `<button type="button" class="btn btn-sm btn-danger"id="sconto-applicato">Codice non valido</button>`;
            }
    }
    
    /* Assegnazione output generale fuori dalla condizione */
    outputPrezzo.innerHTML = `<span class="text-center align-middle "><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoScontatoDecimali}</p></span>`;
            
        

    
    /* Ripulisco gli input */
    preventivoForm.reset();


}



/* Inserisco il valore nell'elemento del prezzo finale */










