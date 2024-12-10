
document.getElementById("calcul").addEventListener('click', function() {
let 
    nombreHeureTotale = document.getElementById("heureTotale").value,
    nombreHeureDimanche = document.getElementById("heureDimanche").value,
    salaireDeBaseMensualise =  11.65 * 151.67,
    absencePourEntreeSortie = (151.67-(nombreHeureTotale)) * 13.2192,
    salaireBase = salaireDeBaseMensualise - absencePourEntreeSortie,
    indemniteSujetionSpeciale =(nombreHeureTotale*11.11)*0.0921,  
    majoDimanche = nombreHeureDimanche * 9.77,
    indemnitePrecarite = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche)*10/100,
    indemniteCongesPayes = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche+indemnitePrecarite) *10/100, 
    salaireBrut = salaireBase + 238 + indemniteSujetionSpeciale + majoDimanche + indemnitePrecarite + indemniteCongesPayes,
    salaireNet = document.querySelector('input[name="valeur_data"]');

salaireNet.value = Math.round((salaireBrut/ 1.2844)*100)/100;
    });  
  console.log("nombreHeureTotale", nombreHeureTotale),
console.log("nombreHeureDimanche", nombreHeureDimanche),
console.log("salaireDeBaseMensualise", salaireDeBaseMensualise),
 console.log("absencePourEntreeSortie", absencePourEntreeSortie),
       console.log("salaireBase", salaireBase),
console.log("indemniteSujetionSpeciale", indemniteSujetionSpeciale),
 console.log("majoDimanche", majoDimanche)
console.log("indemnitePrecarite", indemnitePrecarite)
  console.log("indemniteCongesPayes", indemniteCongesPayes)    
     console.log("salaireBrut", salaireBrut)  

