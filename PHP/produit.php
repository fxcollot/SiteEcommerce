<?php
// Renvoie le code html de la page produit.html
 
session_start();
$id = $_POST['ID'];

$api = file_get_contents('https://api.api2cart.com/v1.1/product.list.json?start=0&count=50&api_key=4818b589810aa7b9bebc37693baa7ff3&store_key=ed58a22dfecb405a50ea3ea56979360d');

$api = json_decode($api, true);
$donnee = $api['result']['product'][$id];

$html = '
            <div class="produit"> 
                <div class="img">
                    <img src="../ASSETS/produit.jpg" width="100%" height="100%">
                </div>
                <div class="caracteristiques">
                    <div class="titre">
                        <h1>' . $donnee["name"] .'</h1>
                    </div>
                    <div class="prix">
                        <button onclick="acheter()"> ACHETER </button>
                        <h3>' . $donnee["price"] .' €</h3>
                    </div>                 
                </div>
                <div class="description">
                    <h1> Description du produit </h1>
                    <h5>' . $donnee["description"] . '</h5>
                    <div class="avis">
                        <h5> AVIS </h5>
                        <div onclick="avis(1)"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div>
                        <div onclick="avis(2)"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div>
                        <div onclick="avis(3)"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div>
                        <div onclick="avis(4)"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div>
                        <div onclick="avis(5)"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg></div>
                    </div>
                </div>
            </div>';

echo($html);

?>