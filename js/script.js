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
const outputSconto = document.getElementById("sconto")



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
        const prezzo = 20.50 * 10; 
        prezzoDecimali = prezzo.toFixed(2)
        prezzoFinale.innerHTML = `<span id="prezzo-finale" class="text-center align-middle"><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimali}</p></span>`
    } else if (lavoro === frontend) {
        const prezzo = 15.30 * 10;
        prezzoDecimali = prezzo.toFixed(2)
        prezzoFinale.innerHTML = `<span class="text-center align-middle"><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimali}</p></span>`
    } else if (lavoro === project) {
        const prezzo = 33.60 * 10;
        prezzoDecimali = prezzo.toFixed(2)
        prezzoFinale.innerHTML = `<span class="text-center align-middle"><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimali}</p></span>`
    } else {
        
    }
    
    
    

    /* Array Codici sconto e ciclo for*/
     const codici = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",]  
     const codiceNum = parseInt(codice) 
    
    
     let prezzoDecimaliScontato;
     codici.forEach(function (curSconto, i){
        let codiceSconto = curSconto;
        if (codice === codiceSconto) {
            prezzoScontato = prezzoDecimali - (prezzoDecimali * 25 / 100);
            prezzoDecimaliScontato = prezzoScontato.toFixed(2)
            prezzoFinale.innerHTML = `<span class="text-center align-middle "><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimaliScontato}</p></span>`
            sconto.innerHTML = `<button type="button" class="btn btn-sm btn-success" id="sconto-applicato">Sconto del 25 % applicato</button>`
        } else if(codice === ""){
            prezzoFinale.innerHTML = `<span class="text-center align-middle "><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimali}</p></span>`
        } else {
            prezzoFinale.innerHTML = `<span class="text-center align-middle "><h5><strong>Prezzo finale</strong></h5><p><i>&euro;</i><span class="fw-bold fs-5 text-dark"> ${prezzoDecimali}</p></span>`
            sconto.innerHTML = `<button type="button" class="btn btn-sm btn-danger" id="sconto-applicato">Codice non valido</button>`
        }
     });

    
    /* Ripulisco gli input */
    preventivoForm.reset();


}



/* Inserisco il valore nell'elemento del prezzo finale */










