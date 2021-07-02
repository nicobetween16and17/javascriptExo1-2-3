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
let budgetglobal
let budgetRestant
function setBudget(){
    let budget = document.getElementById("budget").value
    console.log(budget)
    document.getElementById("gestionBudget").hidden = false;
    document.getElementById("budgetRestant").innerHTML+=" "+ budget
    budgetglobal = budget
    budgetRestant = budget
}
let depenses = []
let depenseMoyenne = 0
let plusGrosseDepense = 0

function setDepense(){
    let newDepense = document.getElementById("dépense").value
    depenses.push(newDepense)
    document.getElementById("dépense").value=null
    depenses.forEach(function(item,index) {
        console.log(depenseMoyenne+60);
        depenseMoyenne+=Number(depenses[index])
      })
      console.log(depenseMoyenne+" ,"+ depenses.length)
    depenseMoyenne = depenseMoyenne/depenses.length
    if(newDepense>plusGrosseDepense){
        plusGrosseDepense = newDepense
    }
    console.log(plusGrosseDepense)
    budgetRestant -= newDepense
    document.getElementById("budgetRestant").innerHTML="Budget restant: "+budgetRestant
    document.getElementById("biggestDepense").innerHTML="Plus grosse dépense: "+plusGrosseDepense
    document.getElementById("depenseMoyenne").innerHTML="Dépenses Moyennes: "+ depenseMoyenne
    console.log(depenses)
}
let player = {
    score: 0,
    name: "",
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
let players=[]
function createPlayer() {
    const newPlayer = Object.create(player)
    newPlayer.name = document.getElementById("player").value
    newPlayer.score = 0
    players.push(newPlayer)
    console.log(players)
    document.getElementById("scores").hidden = false;
    let newOption = document.createElement('option')
    newOption.appendChild(document.createTextNode(newPlayer.name))
    newOption.value = newPlayer.name
    document.getElementById("player_select").appendChild(newOption)
}
function showFormulaire() {
    if(document.getElementById("player_select").selectedIndex == 0){
        document.getElementById("player_score").hidden = true
    }else{
        document.getElementById("player_score").hidden = false
    }
}
function addScore() {
    let score = document.getElementById("score_of_player").value
    console.log(score)
    console.log(document.getElementById("player_select").value)
    players.forEach(function(item,index) {
        console.log(item.name)
       if(item.name == document.getElementById("player_select").value){
           
            item.score+= Number(score)
       }
        
      })
}


