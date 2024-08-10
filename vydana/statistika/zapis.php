<?php
// Přijetí dat
if($_SERVER['REQUEST_METHOD']==='POST'){
$zprava = $_POST['data'];

if($zprava=="homepage")
{
// podmínka, aby zaslaná data odpovídali klíči: homepage - potom teprve provede přičtení
$test = fopen("home_page.txt" , "a");
fclose($test); // pokud soubor neexistuje - vytvoří ho
$cteni = fopen("home_page.txt" , "r+"); // otevře soubor pro čtení
$pocet = fread($cteni,20);
++$pocet; // přidá +1
rewind($cteni);
fwrite($cteni,$pocet);
fclose($cteni); // zavře soubor
}
else if($zprava=="pripady")
{
// podmínka, aby zaslaná data odpovídali klíči: kalkulator - potom teprve provede přičtení
$test = fopen("pripady.txt" , "a");
fclose($test); // pokud soubor neexistuje - vytvoří ho
$cteni = fopen("pripady.txt" , "r+"); // otevře soubor pro čtení
$pocet = fread($cteni,20);
++$pocet; // přidá +1
rewind($cteni);
fwrite($cteni,$pocet);
fclose($cteni); // zavře soubor
}
else if($zprava=="kalkulator")
{
// podmínka, aby zaslaná data odpovídali klíči: kalkulator - potom teprve provede přičtení
$test = fopen("kalkulator.txt" , "a");
fclose($test); // pokud soubor neexistuje - vytvoří ho
$cteni = fopen("kalkulator.txt" , "r+"); // otevře soubor pro čtení
$pocet = fread($cteni,20);
++$pocet; // přidá +1
rewind($cteni);
fwrite($cteni,$pocet);
fclose($cteni); // zavře soubor
}
else if($zprava=="vyznamny_homepage")
{
// podmínka, aby zaslaná data odpovídali klíči: vyznamny_homepage - potom teprve provede přičtení
$test = fopen("home-vyznam.txt" , "a");
fclose($test); // pokud soubor neexistuje - vytvoří ho
$cteni = fopen("home-vyznam.txt" , "r+"); // otevře soubor pro čtení
$pocet = fread($cteni,20);
++$pocet; // přidá +1
rewind($cteni);
fwrite($cteni,$pocet);
fclose($cteni); // zavře soubor
}
}else{
http_response_code(405); // Method Not Allowed
}
?>