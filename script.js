function getData(form) {
    let formulaire = form.inputbox.value;
    console.log(formulaire)
    let isbiss = (formulaire % 4 == 0 && formulaire %100 != 0) || formulaire%400 ==0
    document.getElementById('reponse').hidden = !isbiss
}

function AfficherJour(){
    let date = new Date(document.getElementById('datebox').value);
    console.log(date)
    let dayOfMonth = date.getDay();
    console.log(dayOfMonth)
    let jour = document.getElementById('jour')
    switch(dayOfMonth){
        case 0:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Dimanche"
            break;
        case 1:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Lundi"
            break;
        case 2:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Mardi"
            break;
        case 3:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Mercredi"
            break;
        case 4:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Jeudi"
            break;
        case 5:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Vendredi"
            break;
        case 6:
            jour.innerHTML = "Le jour de la semaine correspondant a cette date est ... Samedi"
            break;    
    }
}
function getCotation(cotation) {
    let LaCotation = cotation.cotationbox.value;
    let result = document.getElementById('cote')
    switch(true){
        case (LaCotation==20):
            result.innerHTML="Le resultat est... Excellent"
            break;
        case (LaCotation>=17):
            result.innerHTML="Le resultat est... Très Bien"
            break;
        case (LaCotation>=14):
            result.innerHTML="Le resultat est... Bien"
            break;
        case (LaCotation>=10):
            result.innerHTML="Le resultat est... Suffisant"
            break;
        default: 
            result.innerHTML="Le resultat est... Insuffisant"
            break;

    }
    cotation.cotationbox.value = null
}
