// Créer la partie html de la page
let chaine = window.location.search;
chaine = chaine.replace('?ID=', '');

let Data = new FormData();
Data.append('ID', chaine);
 
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState==4 && this.status==200) {
        document.getElementById('main').innerHTML = xhttp.responseText;
    }
}; 
xhttp.open('POST', '../PHP/produit.php', true);
xhttp.send(Data);


// Permet de signaler un achat
function acheter() {
    let Produit = new FormData();
    Produit.append('ID', chaine);

    let xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp3.open('POST', '../PHP/achat.php', true);
    xhttp3.send(Produit);
    alert('Votre produit a bien été ajouté')
    document.location = "store.html";
};

