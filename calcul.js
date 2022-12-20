let nombreHeureTotale = prompt("Combien d'heures travaillées?");
let nombreHeureDimanche = prompt("Dont combien d'heure de dimanche?");

let salaireDeBaseMensualise =  11.07 * 151.67; 
console.log (salaireDeBaseMensualise);
let entreeSortie = (151.67-(nombreHeureTotale)) * 12.639;
console.log (entreeSortie);
let salaireBase = salaireDeBaseMensualise - entreeSortie;
console.log (salaireBase);

let primeSegur = 238;
let indemniteSujetion = nombreHeureDimanche * 3.84; 
let indemniteCongesPayes = nombreHeureTotale * 3.49;
let PrimeDimanche = nombreHeureDimanche * 7.64; 

let salaireBrut = salaireBase + primeSegur + indemniteCongesPayes + indemniteSujetion + PrimeDimanche;
let salaireNet = salaireBrut * 0.71;

alert("Ton salaire sera de " +salaireNet+ " €")