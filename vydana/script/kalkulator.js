﻿const stylAsyn={nacti(url){const styl=document.createElement("link");const skript=document.getElementsByTagName("script")[0];styl.rel="stylesheet";styl.href=url;setTimeout(()=>{skript.parentNode.insertBefore(styl,skript);});}};stylAsyn.nacti("../css/css.css?v=1");stylAsyn.nacti("../css/kalkulator.css?v=1");const sdilet={_idFB:"sdil-fb",_idTW:"sdil-tw",SIRKA:600,VYSKA:600,min_VYSKA:800,min_SIRKA:800,async prepis(){let vyska=parseInt(window.screen.height);let sirka=parseInt(window.screen.width);let z_leva=sirka/2-this.SIRKA/2;let z_hora=vyska/2-this.VYSKA/2;if(document.getElementById(this._idFB)&&vyska>this.min_VYSKA&&sirka>this.min_SIRKA){const hrefFB=document.getElementById(this._idFB).href;document.getElementById(this._idFB).target="";let textFB=`window.open('${hrefFB}','Sdílet na FB','width=${this.SIRKA},height=${this.VYSKA},left=${z_leva},top=${z_hora}');`;document.getElementById(this._idFB).href=`javascript:${textFB}`;}if(document.getElementById(this._idTW)&&vyska>this.min_VYSKA&&sirka>this.min_SIRKA){const hrefTW=document.getElementById(this._idTW).href;document.getElementById(this._idTW).target="";let textTW=`window.open('${hrefTW}','Sdílet na Twittru','width=${this.SIRKA},height=${this.VYSKA},left=${z_leva},top=${z_hora}');`;document.getElementById(this._idTW).href=`javascript:${textTW}`;}}};const prepocet={kyt_amater:60,kyt_profik:600,kytek(){const gramu=document.getElementById("gramu");const kytek=document.getElementById("kytek");let zadani=parseInt(kytek.value);if(!zadani){kytek.value="";}let rozhodni=null;if(zpusob.pestovani=="amater"&&kytek.value!=""){rozhodni=this.kyt_amater;}else if (zpusob.pestovani=="profi"&&kytek.value!=""){rozhodni=this.kyt_profik;}if((zadani>250)&&(rozhodni==this.kyt_amater)){kytek.value="250";}else if((zadani>25)&&(rozhodni==this.kyt_profik)){kytek.value="25";}if(kytek.value!=""&&rozhodni!=null){gramu.value=kytek.value*rozhodni;}if(gramu.value>15000){gramu.value="15000";}if(kytek.value==""){gramu.value="";}},gramu(){const gramu=document.getElementById("gramu");const kytek=document.getElementById("kytek");let zadani=parseInt(gramu.value);if(!zadani){gramu.value="";}if(zadani>15000){gramu.value="15000";}let rozhodni=null;if(zpusob.pestovani=="amater"&&gramu.value!=""){rozhodni=this.kyt_amater;}else if(zpusob.pestovani=="profi"&&gramu.value!=""){rozhodni=this.kyt_profik;}if(gramu.value!=""&&rozhodni!=null){kytek.value=gramu.value/rozhodni;let pricist=kytek.value-parseInt(kytek.value);if(pricist!=0){kytek.value=parseInt(kytek.value)+1;}else{kytek.value=parseInt(kytek.value);}if(kytek.value=="0"){kytek.value=1;}}else if(gramu.value==""){kytek.value="";}},gramu_z(){setTimeout(()=>{this.gramu();},250);},kytek_z(){setTimeout(()=>{this.kytek();},250);},posluchace(){document.getElementById("gramu").addEventListener("input",this.gramu.bind(this));document.getElementById("kytek").addEventListener("input",this.kytek.bind(this));}};const zpusob={zakladni:"white",barva:"rgba(0,158,107,0.5)",pestovani:null,potreba:null,skupina:null,am(){document.getElementById("amter").style.background=this.barva;document.getElementById("profi").style.background=this.zakladni;this.pestovani="amater";prepocet.gramu();},pro(){document.getElementById("amter").style.background=this.zakladni;document.getElementById("profi").style.background=this.barva;this.pestovani="profi";prepocet.gramu();},proMe(){document.getElementById("p-vlast").style.background=this.barva;document.getElementById("p-jineh").style.background=this.zakladni;this.potreba="moje";},proJineho(){document.getElementById("p-vlast").style.background=this.zakladni;document.getElementById("p-jineh").style.background=this.barva;this.potreba="jineho";},jeden(){document.getElementById("jeden").style.background=this.barva;document.getElementById("dva").style.background=this.zakladni;document.getElementById("org").style.background=this.zakladni;this.skupina="jeden";},dva(){document.getElementById("jeden").style.background=this.zakladni;document.getElementById("dva").style.background=this.barva;document.getElementById("org").style.background=this.zakladni;this.skupina="dva";},org(){document.getElementById("jeden").style.background=this.zakladni;document.getElementById("dva").style.background=this.zakladni;document.getElementById("org").style.background=this.barva;this.skupina="org";},aktive(){this.jeden();this.proMe();this.am();document.getElementById("amter").addEventListener("click",this.am.bind(this));document.getElementById("profi").addEventListener("click",this.pro.bind(this));document.getElementById("p-vlast").addEventListener("click",this.proMe.bind(this));document.getElementById("p-jineh").addEventListener("click",this.proJineho.bind(this));document.getElementById("jeden").addEventListener("click",this.jeden.bind(this));document.getElementById("dva").addEventListener("click",this.dva.bind(this));document.getElementById("org").addEventListener("click",this.org.bind(this));}};const dia={okno(hodnota,dialog,button=null){if(hodnota=="on"){document.getElementById(dialog).showModal();}else if(hodnota=="off"){document.getElementById(dialog).close();}if(button!=null){document.getElementById(button).focus();}if(dialog=="d-jinak"){setTimeout(()=>{document.getElementById('nadJ').scrollIntoView({behavior:'smooth'});},250);}if(dialog=="d-kytek"){setTimeout(()=>{document.getElementById('hlav').scrollIntoView({behavior:'smooth'});},250);}},posluchace(){document.getElementById("i-kytek").addEventListener("click",()=>{this.okno.bind(this)("on","d-kytek","dia_kytek");});document.getElementById("dia_kytek").addEventListener("click",()=>{this.okno.bind(this)("off","d-kytek");});document.getElementById("i-zpusob").addEventListener("click",()=>{this.okno.bind(this)("on","d-zpusob" , "dia_zpusob");});document.getElementById("dia_zpusob").addEventListener("click",()=>{this.okno.bind(this)("off","d-zpusob");});}};const prvky={seznam:["amter","profi","i-zpusob","gramu","kytek","i-kytek","p-vlast","p-jineh","jeden","dva","org","kalkuluj"],aktivuj(){let d=this.seznam.length;for(let i=0;i<d;i++){document.getElementById(this.seznam[i]).disabled=false;}}};const zmena = {videtPest:false,videtSklad:false,videtSkliz:false,tlacitka:["preb1","preb2","preb3","preb4","preb5","preb6","preb7"],bloky:["li1","li2","li3","li4","li5","li6","li7"],pPestov:false,pSklad1:false,pSklad2:false,pSkliz1:false,pSkliz2:false,vPest(){if(this.videtPest!=true){let d1=this.bloky.length;for(let i=0;i<d1;i++){document.getElementById(this.bloky[i]).style.display="flex";}this.videtPest=true;if(this.pPestov!=true){let d2=this.tlacitka.length;for(let i=0;i<d2;i++){document.getElementById(this.tlacitka[i]).addEventListener("click",()=>{dia.okno("on","d-jinak");});}document.getElementById("dia_jinak").addEventListener("click",()=>{dia.okno("off","d-jinak");});this.pPestov = true;}}},NvPest(){if(this.videtPest==true){let d=this.bloky.length;for(let i=0;i<d;i++){document.getElementById(this.bloky[i]).style.display="none";}this.videtPest=false;}},vSklad(delka){const ktery=["li-s1","li-s2"];document.getElementById(ktery[delka]).style.display="flex";if(delka=="0"&&this.pSklad1!=true){document.getElementById("bs1").addEventListener("click",()=>{dia.okno("on","d-jinak");});this.pSklad1=true;}else if(delka=="1"&&this.pSklad2!=true){document.getElementById("bs2").addEventListener("click",()=>{dia.okno("on","d-jinak");});this.pSklad2=true;}if(this.videtSklad!=true){document.getElementById("dia_jinak").addEventListener("click",()=>{dia.okno("off","d-jinak");});}this.videtSklad=true;},NevSklad(){if(this.videtSklad==true){const blok=["li-s1","li-s2"];d=blok.length;for(let i=0;i<d;i++){document.getElementById(blok[i]).style.display="none";}this.videtSklad=false;}},vSkliz(blok){const ktery=["liSk1","liSk2"];document.getElementById(ktery[blok]).style.display="flex";if(blok=="0"&&this.pSkliz1!= true){document.getElementById("bsk1").addEventListener("click",()=>{dia.okno("on","d-jinak");});this.pSkliz1 = true;}else if(blok=="1"&&this.pSkliz2!=true){document.getElementById("bsk2").addEventListener("click",()=>{dia.okno("on","d-jinak");});this.pSkliz2=true;}if(this.videtSkliz!=true){document.getElementById("dia_jinak").addEventListener("click",()=>{dia.okno("off","d-jinak");});}this.videtSkliz = true;},NvSkli(){const blok=["liSk1","liSk2"];let d=blok.length;for(let i=0;i<d;i++){document.getElementById(blok[i]).style.display="none";}this.videtSkliz=false;},vKlas(druh){if(druh=="zpusob"){document.getElementById("zm-zpus").style.display="flex";}if(druh=="org"){document.getElementById("zm-org").style.display="flex";}if(druh=="jineho"){document.getElementById("zm-jine").style.display="flex";}},NevKlas(){document.getElementById("zm-zpus").style.display="none";document.getElementById("zm-org").style.display="none";document.getElementById("zm-jine").style.display="none";}};const zapis={limity:[10,100,1000,10000],amaterVaha:[0.5,1.5,5,15,30,40,60],profiVaha:[1,3,15,40,80,150,600],stupne:["v20","v40","v80","v120","v160","v180","v200"],p285:["přestupek","až&#8239;6&#8239;měsíců","až&#8239;3&#8239;roky","1&#8239;až&#8239;5&#8239;let"],p284:["přestupek","až&#8239;1&#8239;rok","6&#8239;měsíců&#8239;až&#8239;5&#8239;let","2&#8239;až&#8239;8&#8239;let"],p283:["1&#8239;až&#8239;5&#8239;let","2&#8239;až&#8239;10&#8239;let","8&#8239;až&#8239;12&#8239;let"],ust:{p283:"§283&#8239;odstavec&#8239;",p284:"§284&#8239;odstavec&#8239;",p285:"§285&#8239;odstavec&#8239;"},odhadVaha:[],kytek(){let fHodnota=document.getElementById("kytek").value;const zmen=["k-kytek1","k-kytek2","k-kytek3"];let d=zmen.length;for(let i=0;i<d;i++){document.getElementById(zmen[i]).innerHTML=fHodnota;}},zpusob(){let zpusobP="";if(zpusob.pestovani=="amater"){zpusobP="Amatérský";}else if(zpusob.pestovani=="profi"){zpusobP="Profesionální";}const zmen=["k-zpusob1","k-zpusob2","k-zpusob3"];d=zmen.length;for(let i=0;i<d;i++){document.getElementById(zmen[i]).innerHTML=zpusobP;}},pro(){let pro="";if(zpusob.potreba=="moje"){pro="Vlastní potřebu";}else if(zpusob.potreba=="jineho"){pro="Někoho jiného";}const zmen=["k-pro1","k-pro2","k-pro3"];d=zmen.length;for(let i=0;i<d;i++){document.getElementById(zmen[i]).innerHTML=pro;}},clenu(){let lidi="";if(zpusob.skupina=="jeden"){lidi="Pěstovat budu sám";}else if(zpusob.skupina=="dva"){lidi="Pěstovat budu s někým";}else if(zpusob.skupina=="org"){lidi="Pěstovat budume tři, nebo nás bude více";}const zmen = ["lidi1","lidi2","lidi3"];d=zmen.length;for(let i=0;i<d;i++){document.getElementById(zmen[i]).innerHTML=lidi;}},vaha(){let Zkytek=parseInt(document.getElementById("kytek").value);let rust=null;if(zpusob.pestovani=="amater"){rust=this.amaterVaha;}else if(zpusob.pestovani=="profi"){rust=this.profiVaha;}d=this.stupne.length;for(let i=0;i<d;i++){document.getElementById(this.stupne[i]).innerHTML=Zkytek*rust[i];this.odhadVaha.push(Zkytek*rust[i]);}document.getElementById("v180sklad").innerHTML=Zkytek*rust[5];document.getElementById("v200sklad").innerHTML=Zkytek*rust[6];document.getElementById("v180skliz").innerHTML=Zkytek*rust[5];document.getElementById("v200skliz").innerHTML=Zkytek*rust[6];},trest(){this.pestovani();this.sklizen();this.sklad();},pestovani(){const Spest=["p20","p40","p80","p120","p160","p180","p200"];const Upest=["Up20","Up40","Up80","Up120","Up160","Up180","Up200"];let par="";if((((parseInt(document.getElementById("kytek").value)<=25)&&(zpusob.pestovani=="amater"))||((parseInt(document.getElementById("kytek").value)<=15)&&(zpusob.pestovani=="profi")))&&(zpusob.potreba=="moje")){let d1=Spest.length;for(let t=0;t<d1;t++){if(this.odhadVaha[t]<=this.limity[0]){document.getElementById(Spest[t]).innerHTML=this.p285[0];par="přestupek";}else if((this.odhadVaha[t]>this.limity[0])&&(this.odhadVaha[t]<=this.limity[1])){document.getElementById(Spest[t]).innerHTML=this.p285[1];par=this.ust.p285+"1";}else if((this.odhadVaha[t]>this.limity[1])&&(this.odhadVaha[t]<=this.limity[2])){document.getElementById(Spest[t]).innerHTML=this.p285[2];par=this.ust.p285+"3";}else if(this.odhadVaha[t]>this.limity[2]){document.getElementById(Spest[t]).innerHTML=this.p285[3];par=this.ust.p285+"4";}document.getElementById(Upest[t]).innerHTML=par;}}else{let d2=Spest.length;for(let t=0;t<d2;t++){if((this.odhadVaha[t]<=this.limity[2])&&(this.odhadVaha[t]<=this.limity[3])){if(zpusob.skupina!="org"){document.getElementById(Spest[t]).innerHTML = this.p283[0];par=this.ust.p283+"1";}else{document.getElementById(Spest[t]).innerHTML=this.p283[1];par=this.ust.p283+"2";zmena.vKlas("org");}}else if((this.odhadVaha[t]>this.limity[2])&&(this.odhadVaha[t]<this.limity[3])){document.getElementById(Spest[t]).innerHTML=this.p283[1];par=this.ust.p283+"2";}else if(this.odhadVaha[t]>=this.limity[3]){document.getElementById(Spest[t]).innerHTML=this.p283[2];par=this.ust.p283+"3";}document.getElementById(Upest[t]).innerHTML=par;}if(((parseInt(document.getElementById("kytek").value)>=25)&&(zpusob.pestovani=="amater"))||((parseInt(document.getElementById("kytek").value)>=15)&&(zpusob.pestovani=="profi"))){zmena.vKlas("zpusob");}if(zpusob.potreba=="jineho"){zmena.vKlas("jineho");}zmena.vPest();}},sklizen(){const Sskliz=["skliz180","skliz200"];const Uskliz=["U180skliz","U200skliz"];let del_ret=this.odhadVaha.length-2;let par="";let d1=Sskliz.length;for(let sk=0;sk<d1;sk++){if((this.odhadVaha[del_ret+sk]<=this.limity[2])&&(this.odhadVaha[del_ret+sk]<=this.limity[3])){if(zpusob.skupina!="org"){document.getElementById(Sskliz[sk]).innerHTML=this.p283[0];par=this.ust.p283+"1";}else{document.getElementById(Sskliz[sk]).innerHTML=this.p283[1];par="§283&#8239;odstavec&#8239;2";zmena.vSkliz(sk);zmena.vKlas("org");}}else if((this.odhadVaha[del_ret+sk]>this.limity[2])&&(this.odhadVaha[del_ret+sk]<this.limity[3])){document.getElementById(Sskliz[sk]).innerHTML=this.p283[1];par=this.ust.p283+"2";}else if(this.odhadVaha[del_ret+sk]>=this.limity[3]){document.getElementById(Sskliz[sk]).innerHTML=this.p283[2];par=this.ust.p283+"3";}document.getElementById(Uskliz[sk]).innerHTML=par;}},sklad(){let par="";const Ssklad=["sklad180","sklad200"];const Usklad=["Usklad180","Usklad200"];let del_ret=this.odhadVaha.length-2;let d1=Ssklad.length;for(let s=0;s<d1;s++){if(this.odhadVaha[del_ret+s]<=this.limity[0]){document.getElementById(Ssklad[s]).innerHTML=this.p284[0];par="přestupek";}else if((this.odhadVaha[del_ret+s]>this.limity[0])&&(this.odhadVaha[del_ret+s]<=this.limity[1])){document.getElementById(Ssklad[s]).innerHTML=this.p284[1];par=this.ust.p284+"1";}else if((this.odhadVaha[del_ret+s]>this.limity[1])&&(this.odhadVaha[del_ret+s]<=this.limity[2])){document.getElementById(Ssklad[s]).innerHTML=this.p284[2];par=this.ust.p284+"3";}else if(this.odhadVaha[del_ret+s]>this.limity[2]){document.getElementById(Ssklad[s]).innerHTML=this.p284[3];par=this.ust.p284+"4";}document.getElementById(Usklad[s]).innerHTML=par;}if(this.odhadVaha[this.odhadVaha.length-2]>=10000){document.getElementById(Ssklad[0]).innerHTML=this.p283[2];document.getElementById(Usklad[0]).innerHTML=this.ust.p283+"3";zmena.vSklad("0");}if(this.odhadVaha[this.odhadVaha.length-1]>=10000){document.getElementById(Ssklad[1]).innerHTML=this.p283[2];document.getElementById(Usklad[1]).innerHTML=this.ust.p283+"3";zmena.vSklad("1");}if(zpusob.potreba=="jineho"){d2=Ssklad.length;for(let sk=0;sk<d2;sk++){if((this.odhadVaha[del_ret+sk]<=this.limity[2])&&(this.odhadVaha[del_ret+sk]<=this.limity[3])){if(zpusob.skupina!="org"){document.getElementById(Ssklad[sk]).innerHTML=this.p283[0];par=this.ust.p283+"1";}else{document.getElementById(Ssklad[sk]).innerHTML=this.p283[1];par=this.ust.p283+"2";zmena.vKlas("org");}}else if((this.odhadVaha[del_ret+sk]>this.limity[2])&&(this.odhadVaha[del_ret+sk]<=this.limity[3])){document.getElementById(Ssklad[sk]).innerHTML=this.p283[1];par=this.ust.p283+"2";}else if(this.odhadVaha[del_ret+sk]>this.limity[3]){document.getElementById(Ssklad[sk]).innerHTML=this.p283[2];par=this.ust.p283+"3";}document.getElementById(Usklad[sk]).innerHTML=par;zmena.vSklad(sk);}zmena.vKlas("jineho");}}};const animace={opakovani:5,id_kalk:null,id_butt:null,objBlur:["gramu","kytek","kalkuluj"],rezerva:2000,interval:null,blokInt:null,akce(){this.blurB();dia.okno("on","finish");setTimeout(()=>{document.getElementById('cir_1').beginElement();},500);this.interval=setTimeout(()=>{document.getElementById('cir_1').beginElement();},4500);document.getElementById("vysledek").style.display="block";},blurB(){d=this.objBlur.length;for(let i=0;i<d;i++){document.getElementById(this.objBlur[i]).blur();}},reset(){clearInterval(this.interval);document.getElementById("vysledek").style.opacity=0;document.getElementById("vysledek").style.display="none";},zastav(){dia.okno("off","finish");this.blurB();clearInterval(this.interval);this.blok();},blok(){this.id_kalk=document.getElementById("b-text");this.id_butt=document.getElementById("kalkuluj");this.id_butt.disabled=true;this.noBlok();},noBlok(){this.blokInt=setInterval(this.blokPocitej.bind(this),1000);},blokPocitej(){let text=`Spočítat znovu výši trestu za&nbsp;${this.opakovani}&#8239;s`;this.id_kalk.innerHTML=text;this.opakovani--;if(this.opakovani==-1){clearInterval(this.blokInt);this.opakovani=5;this.id_butt.disabled=false;this.id_kalk.innerHTML="Spočítat znovu výši trestu";}},brzda(){const rez1=this.rezerva;const rez2=rez1+250;const rez3=rez2+500;setTimeout(()=>{animace.zastav();},rez1);setTimeout(()=>{document.getElementById("vysledek").scrollIntoView({behavior:"smooth",block:"start"});document.getElementById("vysledek").style.opacity=1;},rez2);setTimeout(()=>{if(document.getElementById("vysledek").offsetTop!=parseInt(window.visualViewport.pageTop)){document.getElementById("vysledek").scrollIntoView({behavior:"smooth", block:"start"});}},rez3);}};async function statistika(){const dataToSend='kalkulator';try{const xhr=new XMLHttpRequest();xhr.open('POST','../statistika/zapis.php',true);xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');xhr.onload=()=>{if(xhr.status===200){}else{}};xhr.send('data='+encodeURIComponent(dataToSend));}catch(err){console.log("Statistická data neodeslána. Chyba:"+err);}};const pocitej=()=>{statistika();animace.reset();animace.akce();zmena.NevSklad();zmena.NvPest();zmena.NvSkli();zmena.NevKlas();zapis.odhadVaha=[];zapis.kytek();zapis.zpusob();zapis.pro();zapis.clenu();zapis.vaha();zapis.trest();animace.brzda();};sdilet.prepis();prvky.aktivuj();zpusob.aktive();prepocet.posluchace();dia.posluchace();