
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
const privacyCheckbox = document.getElementById("privacy");
const apriPrivacyPolicy = document.getElementById("apriPrivacyPolicy");
const accettoPrivacy = document.getElementById("accettoPrivacy");






/* Array Codici sconto */
const codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",]




/* Lavori dinamici */
/* Oggetto contenente le opzioni della select */
const lavori = {
    backend: "Sviluppo Backend",
    frontend: "Sviluppo Frontend",
    project: "Project Manager",
};
/* Genero dinamicamente le opzioni */
inputLavoro.innerHTML = `<option value="" selected disabled>Seleziona il tipo di lavoro</option>
${Object.entries(lavori).map(([chiave, valore]) => `<option value="${chiave}">${valore}</option>`).join("")} `;





/* Event Listner Form*/
preventivoForm.addEventListener("submit", gestisciForm,);



/* Funzione*/
function gestisciForm(event) {
    event.preventDefault();


    /* Prelevo i valori dell'input */
    const nome = inputNome.value;
    const cognome = inputCognome.value;
    const email = inputEmail.value;
    const lavoro = inputLavoro.value;
    const messaggio = inputMessaggio.value;
    const codice = inputCodice.value.trim();


    /* Assegnazione prezzo alla variabile */
    let prezzoBase = 0;
    if (lavoro === "backend") {
        prezzoBase = 20.50 * 10;
    } else if (lavoro === "frontend") {
        prezzoBase = 15.30 * 10;
    } else if (lavoro === "project") {
        prezzoBase = 33.60 * 10;
    }

    /* Creazione variabili per decimali  */
    let prezzoFinale = prezzoBase;
    let scontoApplicato = false;


    /* Controllo codice sconto */
    if (codice !== "" && codiciSconto.includes(codice)) {
        let sconto = (prezzoBase * 25 / 100);
        prezzoFinale = prezzoBase - sconto;
        scontoApplicato = true;
    }

    /* Formatto il prezzo con due decimali */
    let prezzoFinaleDecimali = prezzoFinale.toFixed(2);
    let [parteIntera, decimali] = prezzoFinaleDecimali.split(".");



    /* Reset inner */
    outputPrezzo.innerHTML = `
        <span id="titolo-p">
            <h5 class="fs-5 text-dark">Prezzo finale</h5>
            <p>
                <i class="fs-5 text-dark">&euro;</i>
                <span class="fw-bold fs-5 text-dark">${parteIntera}</span>,
                <span class="fw-normal fs-6 text-secondary">${decimali}</span>
            </p>
        </span>
    `;


    /* Mostra il messaggio di sconto o errore */
    if (scontoApplicato) {
        outputScontoApplicato.innerHTML = `<button type="button" class="btn btn-sm btn-success" id="sconto-true">
            Sconto del 25% applicato
        </button>`;
    } else if (codice) {
        outputScontoApplicato.innerHTML = `<button type="button" class="btn btn-sm btn-danger" id="sconto-false">
            Codice non valido
        </button>`;
    } else {
        outputScontoApplicato.innerHTML = "";
    }




    /* Ripulisco gli input */
    preventivoForm.reset();
}



/* Funzione ed Event Listner Check Privacy policy */
document.addEventListener("DOMContentLoaded", function () {

    // Apri il modulo quando si clicca sul link "Accetto la Privacy Policy"
    apriPrivacyPolicy.addEventListener("click", function (event) {
        event.preventDefault();

        // Mostra il modulo Bootstrap
        let moduloPrivacy = new bootstrap.Modal(document.getElementById("moduloPrivacy"));
        moduloPrivacy.show();
    });

    // Abilita la checkbox solo dopo aver accettato la Privacy Policy
    accettoPrivacy.addEventListener("click", function () {
        privacyCheckbox.checked = true;

        // Chiudi il modulo
        let moduloPrivacyChiuso = document.getElementById("moduloPrivacy");
        let moduloPrivacy = bootstrap.Modal.getInstance(moduloPrivacyChiuso);
        moduloPrivacy.hide();
    });
});






