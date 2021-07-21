// récupération du module readline
let readline = require('readline');
let service = require('./service');

/*function  start(){
    console.log("1 lister les clients");
    console.log("99. Sortir");
}
*/

let responseUtilisateur = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function saisie() {

    responseUtilisateur.question('Votre choix ? : ', function(saisie) {

        traiterSaisie(saisie);
    });
}
 


function menu(){

    console.log("***1-lister les clients***");
    console.log('***2-Ajout nouveau client***')
    console.log('***99-Sortir***');

/*
    responseUtilisateur.question("Votre choix?", function(reponse){

        console.log(`votre choix: ${reponse}`);

        if (reponse === "1") {
            console.log("1 >Liste des clients");
            saisie();
            menu();

        }else{

            console.log("fin");
            responseUtilisateur.close();

        }
        });
*/
}


function traiterSaisie(reponse){

    switch(reponse){

        case '99' : console.log("bye");
        responseUtilisateur.close();
                    console.log('fin 99')
                    return;

        case '1' : console.log('1-Liste des clients');
                    service.listeClients();
                    console.log('fin case 1')
                    menu();
                    saisie();
                    break;

        case '2' : console.log('2-Ajout nouveau client');

        responseUtilisateur.question('saisir le nom et prénom du client : ', function(psaisie) {
                        service.ajoutNouveauClient(psaisie);
                        menu();
                        saisie();
                    });
                    console.log('fin case 2')
                   break;

        default : console.log('non disponible');

        menu();
        saisie();
        break;
    }
  
}


exports.menu = menu;
exports.saisie = saisie;