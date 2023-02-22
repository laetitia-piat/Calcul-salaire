let nombreHeureTotale = prompt("Combien d'heures travaillées?");
let nombreHeureDimanche = prompt("Dont combien d'heure de dimanche?");


let salaireDeBaseMensualise =  11.27 * 151.67; 
let absencePourEntreeSortie = (151.67-(nombreHeureTotale)) * 12.8400;
let salaireBase = salaireDeBaseMensualise - absencePourEntreeSortie;
let indemniteSujetionSpeciale =(nombreHeureTotale*10.80545)*0.0921 ;
let revalorisationSegur = 238;
let majoDimanche = nombreHeureDimanche * 7.86; 
//FIN DE CONTRAT
let indemnitePrecarite = (salaireBase+indemniteSujetionSpeciale+revalorisationSegur+majoDimanche)*10/100;
console.log (indemnitePrecarite);
let indemniteCongesPayes = (salaireBase+indemniteSujetionSpeciale+revalorisationSegur+majoDimanche+indemnitePrecarite) *10/100;


let salaireBrut = salaireBase + revalorisationSegur + indemniteSujetionSpeciale + majoDimanche + indemnitePrecarite + indemniteCongesPayes;
let salaireNet = salaireBrut / 1.309;

alert("Ton salaire sera de " +salaireNet+ " €")
