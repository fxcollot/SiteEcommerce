<?php 

$api = file_get_contents('https://api.api2cart.com/v1.1/product.list.json?start=0&count=50&api_key=4818b589810aa7b9bebc37693baa7ff3&store_key=ed58a22dfecb405a50ea3ea56979360d');

$api = json_decode($api, true);

$donnee = $api['result']['product'];
//echo($api['result']['product'][0]['name']);

$column = 1;
$row = 0;
$html = '<div class="products"><div class="lig'. $row . '">';


for ($i=0; $i<=36; $i++) { 
    if ($row == 0 && $column == 5) {
        $row += 1;
        $column = 1;
        $html .= '</div><div class="lig'. $row .'">';
    }else if ($row != 0 && $column == 5) {
        $row += 1;
        $column = 1;
        $html .= '</div><div class="lig'. $row .'">';
    };
    $html .= '<div class="product" onclick="produit('. $i .')"><div class="img" ><img class="img" src="../ASSETS/produit.jpg"> </div> <div class="text"><h2>' . $donnee[$i]["name"] . '</h2><h3>'. $donnee[$i]["price"] . ' € </h3></div></div>';
    $column += 1;
};


if ($row == 0 && $column == 1){
    $html .= '<h3> Aucun produit ne correspond à votre recherche...';
}
$html .= '</div></div>';


echo($html);

?> 