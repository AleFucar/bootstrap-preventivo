

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

    console.log("Pulsante cliccato!")



    calcolaPrezzo()

    calcolaSconto()

}


function calcolaPrezzo() {
     
    if (select.value == 0) {
        console.log("non hai selezionato il lavoro")
        return
    } else if (select.value == 1) {
        prezzoFinale = oreDiLavoro * 20.50
        console.log(prezzoFinale)
    } else if (select.value == 2) {
        prezzoFinale = oreDiLavoro * 15.30
        console.log(prezzoFinale)
    } else if (select.value == 3) {
        prezzoFinale = oreDiLavoro * 33.60
        console.log(prezzoFinale)
    }

}

const codiceElement = document.getElementById('codiceForm') 
const codiciSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

function calcolaSconto() {
    
    if (codiciSconto.includes(codiceElement.value)) {
        const sconto = (prezzoFinale * 25)/100
        const prezzoScontato = prezzoFinale - sconto
        console.log('Prezzo scontato: ' + prezzoScontato)
    } else {
        console.log('nessuno sconto')
    }

}