const clients = require('./clients.json');



function listeClients(){

    clients.forEach(client => {
        console.log(`${client.nom}  ${client.prenom}`);
    });

}

exports.listeClients = listeClients;


function ajoutNouveauClient(saisie) {

        let tab = saisie.split(' ');
        console.log(tab);

        let client = {
            "id": clients.length + 1 ,
            "prenom": tab[0],
            "nom": tab[1]
        }
        clients.push(client);
       
        listeClients();
}


exports.ajoutNouveauClient = ajoutNouveauClient;