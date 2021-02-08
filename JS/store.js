var donnees;
var api = new XMLHttpRequest();
api.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('produit').innerHTML = api.responseText;
    }
};
api.open("GET", "../PHP/store.php", true);
api.send();

// Renvoie l'utilisateur vers une page contenant les caractéristiques du produit
function produit(ID) {
	console.log(ID);
    document.location = 'produit.html?ID=' +ID;
}
 
function selection() {
    let article = 0;
    if (document.getElementById('Vetements').checked == true) {
        a_precision = 'vetements';
        article += 1;
    } else if (document.getElementById('livre').checked == true) {
        a_precision = 'livre';
        article += 1;
    } else if (document.getElementById('technologie').checked == true) {
        a_precision = 'technologie';
        article += 1;
    } else if (document.getElementById('tous').checked == true) {
        a_precision = 'e';
        article += 1;
    };
    let prix = 0
    if (document.getElementById('50').checked == true) {
        p_precision1 = '0';
        p_precision2 = '50';
        prix += 1;
    } else if (document.getElementById('500').checked == true) {
        p_precision1 = '50';
        p_precision2 = '500';
        prix += 1;
    } else if (document.getElementById('1000').checked == true) {
        p_precision1 = '500';
        p_precision2 = '1000';
        prix += 1;
    } else if (document.getElementById('10000').checked == true) {
        p_precision1 = '1000';
        p_precision2 = '10000';
        prix += 1;
    } else if (document.getElementById('tout').checked == true) {
        p_precision1 = '0';
        p_precision2 = '10000';
        prix += 1;
    };
    

    if (article ==1 && prix ==1 ) {
        let Data = new FormData();
        Data.append('Produit', a_precision);
        Data.append('Prix1', p_precision1);
        Data.append('Prix2', p_precision2);
        let categorie = new XMLHttpRequest();
        categorie.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('produit').innerHTML = categorie.responseText;
            }
        }
        categorie.open('POST', '../PHP/store.php', true);
        categorie.send(Data);
    }
    else if (article == 1) {
        let Data = new FormData();
        Data.append('Produit', a_precision);
        let categorie = new XMLHttpRequest();
        categorie.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('produit').innerHTML = categorie.responseText;
            }
        }
        categorie.open('POST', '../PHP/store.php', true);
        categorie.send(Data);
    } else if (prix == 1) {
        let Data = new FormData();
        Data.append('Prix1', p_precision1);
        Data.append('Prix2', p_precision2);
        let categorie = new XMLHttpRequest();
        categorie.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('produit').innerHTML = categorie.responseText;
            }
        }
        categorie.open('POST', '../PHP/store.php', true);
        categorie.send(Data);
    }
};
