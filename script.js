

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

    
    //console.log("Pulsante cliccato!")

    calcolaPrezzo()


}


const codiceElement = document.getElementById('codiceForm') 
const codiciSconto = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

function calcolaPrezzo() {
     
    if (select.value == 0) {
        console.log("non hai selezionato il lavoro")
        return false
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
        console.log('Prezzo scontato: ' + prezzoScontato)
        stampaPrezzo()
    } else {
        stampaPrezzo()
        console.log(prezzoFinale)
        console.log('Codice Promozionale non inserito o errato')
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