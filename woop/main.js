function closePopup(){
    let popup=document.getElementsByClassName("popup-promo")[0];
    popup.style.display="none";
}
function getsubpromo(a){
    let svg=a.attributes["data-svg"].value;
    let icon=document.getElementsByClassName("popup-soc-icon")[Number(svg)];
    let ok=document.getElementsByClassName("popup-soc-img")[Number(svg)];
    icon.style.display="none";
    ok.style.display="inline-block";
    let popup=document.getElementsByClassName("popup-promo")[0];
    popup.attributes["data-status"].value=1;
}
function getpromo(a){
    let popup=document.getElementsByClassName("popup-promo")[0];
   if( popup.attributes["data-status"].value=="1"){
    a.style.display="none";
    let text=document.getElementsByClassName("promo-text")[0]
    text.style.display="none";
    let textPromo=document.getElementsByClassName("popup-priz-text")[0]
    textPromo.style.display="flex";
    let promo=document.getElementsByClassName("popup-promocode")[0]
    promo.style.display="block";
   };
   
}