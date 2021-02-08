let connecte = new XMLHttpRequest();
connecte.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        connecté = connecte.responseText;
    }
}
connecte.open('POST', '../PHP/connecte.php', true);
connecte.send();

// Renvoie le code html de la popup connexion
function popup_connexion() {
    if (connecté == 1) {
        popup_compte();
    }else {
        document.getElementById('popup').innerHTML = '<p class="quitter" onclick="quitter()"> X </p><h1> CONNEXION </h1><form method="POST" action=""><table><tr><td align="right"><label for name="name"> Nom : </label></td><td> <input type="text" name="name" id="name"></td></tr><tr><td align="right"><label for name="password"> Mot de passe :</label></td><td><input type="password" name="password" id="password"> </td></tr><tr><td><input class="cacher" value="Rien"></td></tr><tr><td class="cacher"> Confirmation du mot de passe : </td></tr><tr><td></td><td align="center"><input type="submit" name="submit" class="valider" value="CONNEXION" onclick="connexion()"></td></tr><table></form><button onclick="popup_inscription()"> INSCRIPTION </button>';
        overlay.style.display = "block";
    }
}

// Renvoie le code html de la popup inscription
function popup_inscription() {
    document.getElementById('popup').innerHTML = '<p class="quitter" onclick="quitter()"> X </p><h1> INSCRIPTION </h1><form method="POST" action=""><table><tr><td align="right"><label for name="name"> Nom : </label></td><td> <input type="text" name="name" id="name"></td></tr><tr><td align="right"><label for name="email"> Email :</label></td><td><input type="email" name="email" id="email"></td></tr><tr><td align="right"><label for name="password"> Mot de passe :</label></td><td><input type="password" name="password" id="password"> </td></tr><tr><td align="right"><label for name="password">Confirmation du mot de passe :</label></td><td> <input type="password" name="password" id="password2"> </td></tr><tr><td></td><td align="center"><input type="submit" name="submit" class="valider" value="INSCRIPTION" onclick="inscription()"></td></tr><table></form><button onclick="popup_connexion()"> CONNEXION </button>';
    overlay.style.display = "block";
}

//Permet à l'utilisateur de quitter la popup
function quitter() {
    overlay.style.display = "none";
}

// Permet d'inscrire l'utilisateur dans la bdd
function inscription() {
    let nom = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    if (password == password2) {
        let Data = new FormData();
        Data.append('Nom', nom);
        Data.append('Email', email);
        Data.append('Mdp', password);
        let xhttp5 = new XMLHttpRequest();
        xhttp5.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert('bien joue')
            };
        };
        xhttp5.open('POST', '../PHP/inscription.php', true);
        xhttp5.send(Data);
        quitter();
    } else {
        msg = 'dommage';
    };
};

// Permet de connecter l'utilisateur à sa compte
function connexion() {
    let nom = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let data = new FormData();
    data.append('Nom', nom);
    data.append('Mdp', password);
    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function() {
        if (this.readyState ==4 && this.status == 200) {
            alert(xhttp6.responseText);
            //document.location = "../HTML/main.html";
        }
    }
    xhttp6.open('POST', '../PHP/connexion.php');
    xhttp6.send(data);
    alert('bien joue');
};

// Renvoie le code html de la pop compte
function popup_compte() {
    document.getElementById('popup').innerHTML = '<p class="quitter" onclick="quitter()"> X </p><h1> COMPTE </h1> <div class="compte"><button onclick="info()"> Informations </button><button onclick="deconnexion()"> Se deconnecter </button></div>'; 
    overlay.style.display = "block";
}

// Renvoie l'utilisateur vers une page contenant des informatiosn sur son compte
function info() {
    document.location = 'info.html';
};

// Permet à l'utilisateur de se déconnecter
function deconnexion() {
    let deconnexion = new XMLHttpRequest();
    deconnexion.onreadystatechange = function() {
        if (this.readyState ==4 && this.status == 200) {
            document.location = '../HTML/main.html'
        }
    }
    deconnexion.open('POST', '../PHP/deconnexion.php', true);
    deconnexion.send();
    alert('Vous êtes bien déconnecté');
}