<?php 

//Permet d'ajouter le nouveau produit au panier

$produit = $_POST["ID"];

session_start();

if (!isset($_SESSION["PANIER"])) {
    $_SESSION["PANIER"] = [];
}

$api = file_get_contents('https://api.api2cart.com/v1.1/product.list.json?start=0&count=50&api_key=4818b589810aa7b9bebc37693baa7ff3&store_key=ed58a22dfecb405a50ea3ea56979360d');

$api = json_decode($api, true);

$donnee = $api['result']['product'][$produit]['name'];

array_push($_SESSION["PANIER"], $donnee);



?>