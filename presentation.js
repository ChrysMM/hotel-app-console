var readline = require('readline');

exports.start =start;

function  start(){
    console.log("1 lister les clients");
    console.log("99. Sortir");
}
let reponseUtilisateur = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu(){
    reponseUtilisateur.question("Votre choix?", 
    function(reponse){
        console.log(`votre choix: ${reponse}`);
        if (reponse === "1") {
            console.log("1 >Liste des clients");
            start();
            menu();
        }else{
            console.log("fin");
            reponseUtilisateur.close();

        }
        });

}
exports.menu = menu;