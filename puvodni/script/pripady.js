﻿
"use strict";


/* POUŽITÍ JAVASCRIPTU PRO STRÁNKY BEZ SCRIPTU V PRVNÍ ÚROVNI ZANOŘENÍ STRÁNKY V ADRESÁŘI */
const stylAsyn={
nacti(url){ 
/* Funkce načte Asynchroně CSS styly */
const styl=document.createElement("link");
const skript=document.getElementsByTagName("script")[0];
styl.rel="stylesheet";
styl.href=url;
setTimeout(()=>{
skript.parentNode.insertBefore(styl,skript);
});}};
  
stylAsyn.nacti("../css/css.css?v=3"); // spuštění funkce k načtení ccs asynchronně
stylAsyn.nacti("../css/pripady.css?v=6"); // spuštění funkce k načtení ccs asynchronně


class Sdilet{
_idFB="sdil-fb";
_idTW="sdil-tw";
SIRKA=600;
VYSKA=600;
min_VYSKA=800;
min_SIRKA=800;
prepis(){
const vyska=window.screen.height; // výška obrazovky
const sirka=window.screen.width; // šířka obrazovky
const z_leva=sirka/2-this.SIRKA/2;
const z_hora=vyska/2-this.VYSKA/2;
const updateLink=(id,windowName)=>
{
const el=document.getElementById(id);
if(el&&vyska>this.min_VYSKA&&sirka>this.min_SIRKA)
{
const href=el.href; // načte stávající href odkazu
el.removeAttribute("href"); // odstraní stávající href
el.addEventListener("click",(e)=>{
e.preventDefault(); // zabrání standardnímu chování odkazu
window.open(href, windowName, `width=${this.SIRKA},height=${this.VYSKA},left=${z_leva},top=${z_hora},resizable=yes`); // otevře nové okno
});
}
};
// Přepíše HREF na tlačítkách sdílet Facebook a sdílet Twitter
updateLink(this._idFB,'Sdílet na FB');
updateLink(this._idTW,'Sdílet na Twitteru');
}
};


const v_port={
pocet_pouziti:0, // určuje kolikrát uživatel použil visualViewport, který se spouští mimojiné scroolem uživatele
pocet_pro_zapocet:50, // počet použití sroll anebo resize pro započítání uživatele

async statistika(){
// funkce odešle připočtení statistiky po interakci stránky s uživatelem
if(this.pocet_pouziti!==-1) // -1 této proměnné bude určovat blokaci v počítání, protože uživatel již byl připočítán
{
++this.pocet_pouziti; // přičte použití visualViewport
if(this.pocet_pouziti>this.pocet_pro_zapocet) // pokud uživatel použil visualViewport více jak 50x
{
this.pocet_pouziti=-1; // nastavením proměnné na -1, určuje ukončení počítání použití visualViewport uživatelem

const dataToSend="pripady"; // data, která budou zaslána
// odesílá data
const token=document.querySelector("meta[name='csrf-token']").getAttribute("content"); // načte token z meta tagu HTML
const data=`csrf_token=${encodeURIComponent(token)}&zapocti=${encodeURIComponent(dataToSend)}`; // nachystá data na odeslání pro fetch API metodou post

// Vytvoření AJAX požadavku
fetch("../statistika/zapis.php",{
method:"POST",  // Metoda POST
headers:{
"Content-Type":"application/x-www-form-urlencoded"  // Nastavení typu obsahu
},
body:data  // data ve formátu klíč=hodnota
})
.then(response=>response.text())  // Očekáváme textovou odpověď
.then(result=>{
console.log('Výsledek:',result);
})
.catch(error=>{
console.error('Chyba při odesílání dat:',error);
});

}}},

handleEvent(){

this.statistika(); // vede statistiku o návštěvnosti - odesláním dat

},

aktivace(){
/* Posluchače */
window.visualViewport.addEventListener("resize",this,{passive:true}); // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
window.visualViewport.addEventListener("scroll",this,{passive:true}); // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
addEventListener("scroll",this,{passive:true}); // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
},

zahajit(){
if(window&&window.visualViewport) /* test - zda je visualViewport podporováno */
{
this.aktivace(); /* zapne posluchač visualViewport */
}}};


const nocopy={
obrazek:null,
vytvor(){
this.obrazek=new Image(); // vytvoří objekt obrázek
this.obrazek.src="no-copy.png"; // přidá objektu faktický obrázek podle src
},

posluchac(){

this.vytvor(); // spustí funkci, která objekt obrázek vytvoří
let d=document.images.length; // určí délku pole všech obrázků na stránce
for(let i=0;i<d;i++)
{
document.images[i].addEventListener("contextmenu",this.blokace.bind(this));
document.images[i].addEventListener("dragstart",this.nahrada.bind(this));
}},

blokace(event){
event.returnValue=false; // zablokuje přenos konkrétního obrázku
},
nahrada(event){
event.dataTransfer.effectAllowed="copy"; /* získává povolený typ operace pro daný objekt */
event.dataTransfer.setData("text/html","<h2>Obrázky na tomto webu jsou chráněny autorskými právy!</h2> "); /* uloží datovou struktůru jako html text */
event.dataTransfer.setDragImage(this.obrazek,100,100); /* ukáže při přetahování obrázek jiný velikost 100x100px */
}
};

const sdilet=new Sdilet(); // založí z class Sdilet objekt sdilet

v_port.zahajit(); /* aktivuje Visual View port API + úprava hlavičky na 100vh */
sdilet.prepis(); /* zajistí přepis HREF tlačítek pro sdílení na Facebooku a Twittru */
nocopy.posluchac(); // omezí kopírování obrázku uživatelem
