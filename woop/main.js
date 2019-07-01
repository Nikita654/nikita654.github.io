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
function gamesLeftIn(){
    if(window.screen.availWidth<1250&&window.screen.availWidth>1023){
    let games=document.getElementsByClassName("games-grid")[0];
    games.style.transform="translateX(0)";}
}
function gamesLeftOut(){
    if(window.screen.availWidth<1250&&window.screen.availWidth>1023){
    let games=document.getElementsByClassName("games-grid")[0];
    games.style.transform="translateX(-164px)";}
}
function gamesRightIn(){
    if(window.screen.availWidth<1250&&window.screen.availWidth>1023){
    let games=document.getElementsByClassName("games-grid")[0];
    games.style.transform="translateX(-328px)";}
}
function gamesRightOut(){
    if(window.screen.availWidth<1250&&window.screen.availWidth>1023){
    let games=document.getElementsByClassName("games-grid")[0];
    games.style.transform="translateX(-164px)";}
}
if(window.screen.availWidth<768){
    let video=document.getElementsByTagName("video")[0];
    video.src="woop/mov_Woop_MOBILE.mp4"}

    var owl = $(".owl-one");
        owl.owlCarousel({
          items: 1,
          margin: 0,
          loop: false,
          rewind: true,
          nav: false,
          touchDrag:false,
          
        });
        var owl1 = $(".owl-two");
        owl1.owlCarousel({
          items: 1,
          margin: 64,
          startPosition:2,
          loop: false,
          rewind: true,
          nav: false,
          touchDrag:false,
          
        });
       
       
       
      $('.otz').on({ 'touchstart' : function(){ owl.trigger("next.owl.carousel");
      owl1.trigger("next.owl.carousel"); } });



        $(".otz-arrow-right").click(function(){
            owl.trigger("next.owl.carousel");
            owl1.trigger("next.owl.carousel");
          });
           
          $(".otz-arrow-left").click(function(){
            owl.trigger("prev.owl.carousel");
            owl1.trigger("prev.owl.carousel");
          });
        

  