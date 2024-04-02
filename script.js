

let prezzoFinale = 0
const oreDiLavoro = 10
const backEnd = document.getElementById('bkDev')
const frontEnd = document.getElementById('ftDev')
const analisiProgettuale = document.getElementById('pAnalis')
const select = document.getElementById('selectObj')


const form = document.getElementById('invioForm')

form.addEventListener('submit', invioForm)


    
function invioForm(e) {

    e.preventDefault()

    if (validateForm() === false) {
        return
    } else{
    calcolaPrezzo()
    }
    //console.log("Pulsante cliccato!")

}


const codiceElement = document.getElementById('codiceForm')
const codiciSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

function calcolaPrezzo() {
     
    if (select.value == 0) {
        //console.log("non hai selezionato il lavoro")
        return
    } else if (select.value == 1) {
        prezzoFinale = oreDiLavoro * 20.50
    } else if (select.value == 2) {
        prezzoFinale = oreDiLavoro * 15.30
    } else if (select.value == 3) {
        prezzoFinale = oreDiLavoro * 33.60
    }

    if (codiciSconto.includes(codiceElement.value)) {
        const sconto = (prezzoFinale * 25)/100
        const prezzoScontato = prezzoFinale - sconto
        prezzoFinale = prezzoScontato
        codiceElement.className = ('form-control is-valid')
        stampaPrezzo()
    } else {
        stampaPrezzo()
        codiceElement.className = ('form-control is-invalid')


        const invalidCode = document.getElementById('invalidCode')
        const invalidHTML =
        `
        ${'Codice non inserito o non valido. Il prezzo sarà calcolato senza sconto'}
        `

        invalidCode.innerHTML = invalidHTML
    }

}



function stampaPrezzo() {

    const prezzoStampaElement = document.getElementById('prezzoFinale')

    const prezzoFinito = 
    `
    &euro;${prezzoFinale}
    <span class="prezzoGrigio"></span>
    `
    prezzoStampaElement.innerHTML = prezzoFinito
}



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
