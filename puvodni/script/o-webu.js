﻿/* POUŽITÍ JAVASCRIPTU PRO STRÁNKY BEZ SCRIPTU V PRVNÍ ÚROVNI ZANOŘENÍ STRÁNKY V ADRESÁŘI */
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
      
    stylAsyn.nacti("../css/css.css?v=1"); // spuštění funkce k načtení ccs asynchronně
    stylAsyn.nacti("../css/pripady.css?v=1"); // spuštění funkce k načtení ccs asynchronně
    
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
    
    sdilet.prepis(); /* zajistí přepis HREF tlačítek pro sdílení na Facebooku a Twittru */
    nocopy.posluchac(); // omezí kopírování obrázku uživatelem