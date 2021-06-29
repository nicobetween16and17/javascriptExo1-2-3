function getData(form) {
    let isBis = false
    let formulaire = form.inputbox.value;
    console.log(formulaire)
    isbiss = (formulaire % 4 == 0 && formulaire %100 != 0) || formulaire%400 ==0
    if(isbiss){
       document.getElementById('reponse').hidden = false 
    }else{
        document.getElementById('reponse').hidden = true
    }
}
