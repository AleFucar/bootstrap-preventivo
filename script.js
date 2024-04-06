
//inizializzo variabile prezzo a zero
let prezzoFinale = 0
// dichiariamo variabile delle ore di lavoro
const oreDiLavoro = 10
//diciariamo la  variabile select (i lavori del dropdown)
const select = document.getElementById('selectObj')

//dichiariamo la variabile 'form' che serve per inviare i dati
const form = document.getElementById('invioForm')

//inizializziamo un ascolto di evento submit che fa partire la funzione (invioForm)
form.addEventListener('submit', invioForm)

//funzione che disattiva il regolare funzionamento del form (ricaricare la pagina) e stampa il prezzo
function invioForm(e) {

    e.preventDefault()

    if (validateForm() === false) {
        return
    } else {
        calcolaPrezzo()
    }
    //console.log("Pulsante cliccato!")

}

//dichiariamo costante che prende l'imput dalla page html "codice promozionale"
const codiceElement = document.getElementById('codiceForm')

//creiamo array di stringhe dei codici sconto
const codiciSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

//creiamo una funzione che calcola il prezzo e l'eventuale sconto
function calcolaPrezzo() {

    if (select.value == 0) {
        return
    } else if (select.value == 1) {
        prezzoFinale = oreDiLavoro * 20.50
    } else if (select.value == 2) {
        prezzoFinale = oreDiLavoro * 15.30
    } else if (select.value == 3) {
        prezzoFinale = oreDiLavoro * 33.60
    }

    if (codiciSconto.includes(codiceElement.value)) {
        const sconto = (prezzoFinale * 25) / 100
        const prezzoScontato = prezzoFinale - sconto
        prezzoFinale = prezzoScontato
        codiceElement.className = ('form-control is-valid')
        stampaPrezzo()
    } else if (codiceElement.value == '') {
        stampaPrezzo()

        const nessunCodice = document.getElementById('noCode')
        //console.log('campo vuoto')

        nessunCodice.className = ('alert alert-secondary mt-2')

        const stampaNoCode =
            `   
        Nessun codice inserito, il prezzo è stato calcolato senza sconto.
         `

        nessunCodice.innerHTML = stampaNoCode

    } else {
        stampaPrezzo()
        codiceElement.className = ('form-control is-invalid')

        //SO CHE SI FA DA HTML CON BOOTSTRAP, MA VOLEVO FARNE UNO IN BACK END
        const invalidCode = document.getElementById('invalidCode')
        const invalidHTML =
            `
        ${'Codice non valido. Il prezzo sarà calcolato senza sconto'}
        `

        invalidCode.innerHTML = invalidHTML
    }

}


// creiamo una funzione che stampa a video il prezzo finale con le prime tre cifre in nero e i decimali in grigio
function stampaPrezzo() {

    const prezzoStampaElement = document.getElementById('prezzoFinale')

    const prezzoFinito =
        `
    &euro;${prezzoFinale.toFixed(2).charAt(0) + (prezzoFinale.toFixed(2).charAt(1)) + (prezzoFinale.toFixed(2).charAt(2))}
    <span class="prezzoGrigio">${prezzoFinale.toFixed(2).charAt(3).replace(".", ',') + (prezzoFinale.toFixed(2).charAt(4)) + prezzoFinale.toFixed(2).charAt(5)}</span>
    `
    prezzoStampaElement.innerHTML = prezzoFinito
}


//creiamo una funzione che valida i dati e eventualmente modifica la classe di ogni elemento del form
function validateForm() {

    const nome = document.getElementById('nomeForm').value
    const cognome = document.getElementById('cognomeForm').value
    const email = document.getElementById('emailForm').value

    const validazioneNome = document.getElementById('nomeForm')
    const validazioneCognome = document.getElementById('cognomeForm')
    const validazioneEmail = document.getElementById('emailForm')



    if (nome === '') {

        validazioneNome.className = 'form-control is-invalid'
        return false
        //console.log('non valido')

    } else {

        validazioneNome.className = 'form-control is-valid'
        //console.log('validissimo')
    }

    if (cognome === '') {

        validazioneCognome.className = 'form-control is-invalid'
        return false

        //console.log('non valido')

    } else {

        validazioneCognome.className = 'form-control is-valid'
        //console.log('validissimo')
    }

    if (email === '') {

        validazioneEmail.className = 'form-control is-invalid'
        return false
        //console.log('non valido')

    } else {

        validazioneEmail.className = 'form-control is-valid'
        //console.log('validissimo')
    }


    if (select.value == 0) {

        select.className = 'form-select mb-3 is-invalid'
        //console.log('non valido')
        return false

    } else {
        select.className = 'form-select mb-3 is-valid'
    }
}
