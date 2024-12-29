<?php
// čtení statistických dat
$file_data = "../statistika/config/statistika.json"; // soubor JSON se statistickými daty - cesta je od souboru, u kterého je provedeno include
if (file_exists($file_data)){
// pokud existuje JSON soubor s daty
$jsonData = file_get_contents($file_data); // načte soubor JSON
$data = json_decode($jsonData, true); // dekóduje data JSON


if($data["aktualniDatum"])
{
// pokud budou data o zahájení statistiky
$aktualniDatum=$data["aktualniDatum"];
}
else
{
// pokud nebudou data o zahájení statistiky
$aktualniDatum="datum není k dispozici";
}

if($data["homepage"])
{
// pokud budou data o statistice homepage
$homepage=$data["homepage"];
}
else
{
// pokud nebudou data o statistice homepage
$homepage=0;
}

if($data["vyznamny_homepage"])
{
// pokud budou data o statistice homepage Významní
$homepage_vyz=$data["vyznamny_homepage"];
}
else
{
// pokud nebudou data o statistice homepage Významní
$homepage_vyz=0;
}

if($data["pripady"])
{
// pokud budou data o statistice článek Noční VLK
$pripady=$data["pripady"];
}
else
{
// pokud nebudou data o statistice článek Noční VLK
$pripady=0;
}

if($data["kalkulator"])
{
// pokud budou data o statistice článek Noční VLK Významní
$kalkulator=$data["kalkulator"];
}
else
{
// pokud nebudou data o statistice článek Noční VLK Významní
$kalkulator=0;
}


}
else
{
// pokud soubor $JSON s daty neexistuje
$homepage=0;
$homepage_vyz=0;
$pripady=0;
$kalkulator=0;
}
?>