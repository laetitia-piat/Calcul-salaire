
document.getElementById("calcul").addEventListener('click', function() {
let 
    nombreHeureTotale = document.getElementById("heureTotale").value,
    console.log("nombreHeureTotale", nombreHeureTotale),
    nombreHeureDimanche = document.getElementById("heureDimanche").value,
    console.log("nombreHeureDimanche", nombreHeureDimanche),
    salaireDeBaseMensualise =  11.65 * 151.67,
    console.log("salaireDeBaseMensualise", salaireDeBaseMensualise)
    absencePourEntreeSortie = (151.67-(nombreHeureTotale)) * 13.2192,
    console.log("absencePourEntreeSortie", absencePourEntreeSortie)
    salaireBase = salaireDeBaseMensualise - absencePourEntreeSortie,
        console.log("salaireBase", salaireBase)
    indemniteSujetionSpeciale =(nombreHeureTotale*11.11)*0.0921,
        console.log("indemniteSujetionSpeciale", indemniteSujetionSpeciale)
    majoDimanche = nombreHeureDimanche * 9.77,
        console.log("majoDimanche", majoDimanche)
    indemnitePrecarite = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche)*10/100,
        console.log("indemnitePrecarite", indemnitePrecarite)
    indemniteCongesPayes = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche+indemnitePrecarite) *10/100,
        console.log("indemniteCongesPayes", indemniteCongesPayes)
    salaireBrut = salaireBase + 238 + indemniteSujetionSpeciale + majoDimanche + indemnitePrecarite + indemniteCongesPayes,
        console.log("salaireBrut", salaireBrut)
    
    salaireNet = document.querySelector('input[name="valeur_data"]');

salaireNet.value = Math.round((salaireBrut/ 1.2844)*100)/100;
    });  

