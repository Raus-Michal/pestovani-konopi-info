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

stylAsyn.nacti("css/css.css?v=1"); // spuštění funkce k načtení ccs asynchronně


const sdilet={_idFB:"sdil-fb",_idTW:"sdil-tw",SIRKA:600,VYSKA:600,min_VYSKA:800,min_SIRKA:800,
async prepis(){
let vyska=parseInt(window.screen.height); /* výška obrazovky */
let sirka=parseInt(window.screen.width); /* šířka obrazovky */
let z_leva=sirka/2-this.SIRKA/2;
let z_hora=vyska/2-this.VYSKA/2;

/* funkce přepíše HREF na tlačítkách sdílet Facebook a sdílet Twitter */
if(document.getElementById(this._idFB)&&vyska>this.min_VYSKA&&sirka>this.min_SIRKA)
{
const hrefFB=document.getElementById(this._idFB).href; // načte stávající href odkazu
document.getElementById(this._idFB).target=""; // target musí být prázdý jinak nové okno neotevře
let textFB=`window.open('${hrefFB}','Sdílet na FB','width=${this.SIRKA},height=${this.VYSKA},left=${z_leva},top=${z_hora}');`; // příprava nového href
document.getElementById(this._idFB).href=`javascript:${textFB}`; // dokončení nového href
}
if(document.getElementById(this._idTW)&&vyska>this.min_VYSKA&&sirka>this.min_SIRKA)
{
const hrefTW=document.getElementById(this._idTW).href;
document.getElementById(this._idTW).target=""; /* target musí být prázdý jinak nové okno neotevře */
let textTW=`window.open('${hrefTW}','Sdílet na Twittru','width=${this.SIRKA},height=${this.VYSKA},left=${z_leva},top=${z_hora}');`;
document.getElementById(this._idTW).href=`javascript:${textTW}`;
}}};

const odkazy={
t1:500,
t2:1000,
async uprav(){
// funkce upravý veškeré odkazy a href, aby používali funkci Javascriptu srollTo
let ob=document.querySelectorAll("a"); /* najde včechny tagy A na stránce a udělá z nich pole */
let ob_s=ob.length;
for(let i=0;i<ob_s;i++)
{
let hr=ob[i].href; /* načte href objektu */
let hr_p=hr.indexOf("#"); /* pozice # v řetězci */
if(hr_p!=-1) /* pokud se pozice v řetězci == -1 , tak nebyl znak v řetězci nalezen */
{
let poz_rez=hr_p+1; /* posune polohu řezu pro odkaz o jedno místo od # */
let odkaz=ob[i].href.slice(poz_rez); /* vytvoří konečný odkaz ořezáním původního */
if(odkaz!="") /* pokud nebude odkaz prázdným řetězcem */
{
ob[i].href=`javascript:odkazy.roluj('${odkaz}');`; /* upravý href každého odkazu na javascriptovou funkci */

if(odkaz=="boar-cz")
{
ob[i].href=`javascript:odkazy.roluj('${odkaz}',1);`; /* výjimka pro tlačíto Boar-cz, které dělá krátký posun z menu do první části Article */
}
}}}},

roluj(id,ne=0){
if(ne==0) /* pokud není druhý parametr funkce roven nule - neprovede blokaci animací */
{
an_obj.deactive(); /* vypne posluchač pro animace */
}
document.getElementById(id).scrollIntoView({behavior:"smooth",block:"start"}); /* provede scrool na objekt */
setTimeout(`document.getElementById('${id}').scrollIntoView({behavior:'smooth',block:'start'});`,this.t1); /* za 500ms provede opět scrool na objekt */
setTimeout(`an_obj.active();an_obj.handleEvent();`,this.t2); /* za 1s opět zapne posluchač pro animace */
}};



const an_obj={
id:[["inf_uv1","an_otoc",0],["inf_uv2","an_otoc",0],["z285","an_zobraz",0],["z283","an_zobraz",0],["z284","an_zobraz",0],["org-skup","an_zobraz",0],["z285k1","an_p",0],["z285k2","an_p",0],["z285k3","an_p",0],["z284k1","an_p",0],["z284k2","an_p",0],["z284k3","an_p",0],["z283k1","an_p",0],["z283k2","an_p",0],["z283k3","an_p",0],["oh","an_sk",0],["om","an_sk",0],["ov","an_sk",0],["i_s1","an_r",0],["i_s2","an_r",0],["i_s3","an_r",0],["i_s4","an_r",0],["i_sk1","an_r",0],["i_sk2","an_r",0],["i_sk3","an_r",0],["i_sk4","an_r",0],["i_k1","an_r",0],["i_k2","an_r",0],["i_k3","an_r",0],["i_k4","an_r",0]], // [id objektu na které se vztahuje animace, CSS class name animace, počet použití animace]
t1:1000, // zpoždění v ms 1
t2:2000, // zpoždění v ms 2
t3:3000, // zpoždění v ms 3
pocet_pouziti:0, // kontroluje počet použití scool anebo resize uživatelem
zakladni:false, // hlídá zda byl překročen limit pro odeslání dat započtení základního uživatele
pocet_vyznamny:50, // počet použití scroll anebo resize pro určení významného návštěvníka
vyznamny:false, //  hlídá zda byl překročen limit pro odeslání dat započtení významného uživatele

new_class(){
let d=this.id.length; // délka pole
for(let i=0;i<d;i++)
{
const objekt=document.getElementById(this.id[i][0]); // načte HTML objekt podle ID
objekt.classList.add(this.id[i][1]); // přidá objektu třídu s animací podle CSS class, která danému objektu odpovídá
}
this.handleEvent(); // aktivuje 1x posluchač události
},

async statistika(){
// funkce odešle připočtení statistiky po interakci stránky s uživatelem


if(this.zakladni===false||this.vyznamny===false) // podmínka blokuje vstup pokud byly odeslána data o základním a významným uživateli
{

++this.pocet_pouziti; // přičte použití scroll anebo risize uživatelem
let dataToSend=""; // data, která budou zaslána

if(this.pocet_pouziti>this.pocet_vyznamny&&this.zakladni==false) // pokud uživatel použil scroll anebo resize více jak 50x
{
this.zakladni=true; // nastavením proměnné na true zablokuje odesílání dat o základním uživateli
dataToSend="homepage"; // data, která budou zaslána
}
else if(this.pocet_pouziti>800&&this.vyznamny==false) // pokud uživatel použil scroll anebo resize více jak 1500x
{
this.vyznamny=true; // nastavením proměnné na true zablokuje odesílání dat o významným uživateli
dataToSend="vyznamny_homepage"; // data, která budou zaslána
}
else
{
return; // pokud nebude splněna ani jedna podmínka dojde k návratu z funkce, aby nedocházelo k odesláni dat
}


// odesílá data
const token=document.querySelector("meta[name='csrf-token']").getAttribute("content"); // načte token z meta tagu HTML
const data=`csrf_token=${encodeURIComponent(token)}&zapocti=${encodeURIComponent(dataToSend)}`; // nachystá data na odeslání pro fetch API metodou post

// Vytvoření AJAX požadavku
fetch("statistika/zapis.php",{
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
}},

handleEvent(){

this.statistika(); // vede statistiku o návštěvnosti - odesláním dat
d=this.id.length; // délka pole
for(let i=0;i<d;i++)
{
const objekt=document.getElementById(this.id[i][0]);

if(((parseInt(window.visualViewport.pageTop)+(parseInt(window.visualViewport.height)/10))>objekt.offsetTop)&&((parseInt(window.visualViewport.pageTop)-(parseInt(window.visualViewport.height)/2))<objekt.offsetTop))
{

const r="running"; // příkaz CSS aby spustil animaci

if(this.id[i][0]==this.id[18][0]||this.id[i][0]==this.id[19][0]||this.id[i][0]==this.id[20][0]||this.id[i][0]==this.id[21][0])
{
/* pokud bude najeto na některý z objektu SVG obrázků, které jsou po 4 */

/* přepis hodnot na to, že byly animace provedeny */
this.id[18][2]=1;
this.id[19][2]=1;
this.id[20][2]=1;
this.id[21][2]=1;
/* KONEC přepis hodnot na to, že byly animace provedeny */

document.getElementById(this.id[18][0]).style.animationPlayState=r; // spustí první SVG animaci

// postupně bude spouštět další SVG animace
setTimeout(()=>{
document.getElementById(this.id[19][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t1
},this.t1);

setTimeout(()=>{
document.getElementById(this.id[20][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t2
},this.t2);

setTimeout(()=>{
document.getElementById(this.id[21][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t3
},this.t3);

return;
}

if(this.id[i][0]==this.id[22][0]||this.id[i][0]==this.id[23][0]||this.id[i][0]==this.id[24][0]||this.id[i][0]==this.id[25][0])
{
/* pokud bude najeto na některý z objektu SVG obrázků, které jsou po 4 */

/* přepis hodnot na to, že byly animace provedeny */
this.id[22][2]=1;
this.id[23][2]=1;
this.id[24][2]=1;
this.id[25][2]=1;
/* KONEC přepis hodnot na to, že byly animace provedeny */

document.getElementById(this.id[22][0]).style.animationPlayState=r; /* spustí první SVG animaci */

/* postupně bude spouštět další SVG animace */
setTimeout(()=>{
document.getElementById(this.id[23][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t1
},this.t1);

setTimeout(()=>{
document.getElementById(this.id[24][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t2
},this.t2);

setTimeout(()=>{
document.getElementById(this.id[25][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t3
},this.t3);

return;
}


if(this.id[i][0]==this.id[26][0]||this.id[i][0]==this.id[27][0]||this.id[i][0]==this.id[28][0]||this.id[i][0]==this.id[29][0])
{
/* pokud bude najeto na některý z objektu SVG obrázků, které jsou po 4 */

/* přepis hodnot na to, že byly animace provedeny */
this.id[26][2]=1;
this.id[27][2]=1;
this.id[28][2]=1;
this.id[29][2]=1;
/* KONEC přepis hodnot na to, že byly animace provedeny */

document.getElementById(this.id[26][0]).style.animationPlayState=r; /* spustí první SVG animaci */

/* postupně bude spouštět další SVG animace */

setTimeout(()=>{
document.getElementById(this.id[27][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t1
},this.t1);

setTimeout(()=>{
document.getElementById(this.id[28][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t2
},this.t2);

setTimeout(()=>{
document.getElementById(this.id[29][0]).style.animationPlayState=r; // spustí druhou SVG animaci se zpožděním this.t3
},this.t3);

return;
}

objekt.style.animationPlayState=r; // pustí animaci objektu

}}
},

active(){
visualViewport.addEventListener('scroll',this,{passive:true});  // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
visualViewport.addEventListener('resize',this,{passive:true}); // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
addEventListener('scroll',this,{passive:true}); // Pokud je event listener označen jako pasivní ({ passive: true }), znamená to, že prohlížeč ví, že event handler nebude volat preventDefault(). To umožňuje prohlížeči optimalizovat chování stránky, což může vést ke zvýšení výkonu, zejména při posouvání na dotykových zařízeních. Jinými slovy, pasivní event listener říká prohlížeči: "Nebudu měnit výchozí chování této události, můžeš ji tedy zpracovat okamžitě."
},

deactive(){
visualViewport.removeEventListener('scroll',this,{passive:true});
visualViewport.removeEventListener('resize',this,{passive:true});
removeEventListener('scroll',this,{passive:true});
},

zahajit(){
if(window&&window.visualViewport) // pokud jsou funkce visualViewport podporovány
{
this.active(); // aktivuje posluchač visualViewport scroll a resize
this.new_class(); // přidá HTML objektům na které se vztahuje animace potřebné CSS třídy s animacemi
}}

};

/* ochrana proti kopírování obrázků */



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

odkazy.uprav(); // funkce upraví odkazí a href na funkce javaskriptu s použitím metody scroolTo
sdilet.prepis(); // zajistí přepis HREF tlačítek pro sdílení na Facebooku a Twittru
an_obj.zahajit(); // zapne veškeré potřebné kroky, aby fungovali všechny animace na stránce
nocopy.posluchac(); // omezí kopírování obrázku uživatelem