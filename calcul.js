
document.getElementById("calcul").addEventListener('click', function() {
let 
    nombreHeureTotale = document.getElementById("heureTotale").value,
    nombreHeureDimanche = document.getElementById("heureDimanche").value,
    salaireDeBaseMensualise =  11.27 * 151.67,
    absencePourEntreeSortie = (151.67-(nombreHeureTotale)) * 12.8400,
    salaireBase = salaireDeBaseMensualise - absencePourEntreeSortie,
    indemniteSujetionSpeciale =(nombreHeureTotale*10.80545)*0.0921,
    majoDimanche = nombreHeureDimanche * 7.86,
    indemnitePrecarite = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche)*10/100,
    indemniteCongesPayes = (salaireBase+indemniteSujetionSpeciale+238+majoDimanche+indemnitePrecarite) *10/100,
    salaireBrut = salaireBase + 238 + indemniteSujetionSpeciale + majoDimanche + indemnitePrecarite + indemniteCongesPayes,

    salaireNet = document.querySelector('input[name="valeur_data"]');

salaireNet.value = salaireBrut/ 1.309;

console.log(salaireNet.value);

    });  
