// Tuto réalisé le 06 juin
var heuresDiv = document.querySelector('.heures');
var heuresDiv = document.querySelector('.date');
var afficheHeures = function(){
    // Déclaration des variables qui seront utilisées
    var today, annee, ListeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;
    // Recupérer la date actuelle :
    today = new Date();
    // Recupérer l'année
    annee = today.getFullYear();
    // Recupérer le mois :
    ListeMois = ["Janvier", "Févier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = ListeMois[today.getMonth()]; //getMonth donne l'index 1 comme on est en Juin, ce qui la valeur "Juin" depuis notre liste
    // Recupérer le numéro du jour du mois :
    jourNUmero = today.getDate(); // donne 6
    // recupérer le jour, Attention la semaine comme un dimanche en Javascript :
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; // getDay() donne l'index 2, donc Lundi
    // Afficher les heures, minutes, secondes avec deux chiffres :
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        }
        else{
            return element;
        }
    }
    // recupérer les heures :
    heures = deuxChiffres(today.getHours());
    // Recupérer les minutes :
    minutes = deuxChiffres(today.getMinutes());
    // Recupérer les secondes :
    secondes = deuxChiffres(today.getSeconds());
    // Aficher dans nos DIV du HTML :
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    DateDiv.textContent = jourNom + "," + jourNUmero + " " + mois + " " + annee;
    // Lancer la fonction heures toutes les 1000 ms, soit toute les secondes :
    setTimeout(afficheHeures, 1000);
}
// Lancer la fonction une fois  au début :
afficheHeures();
