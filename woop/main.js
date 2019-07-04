function closePopup(){
    let popup=document.getElementsByClassName("popup-promo")[0];
    popup.style.display="none";
}
function openPopup(){
  let popup=document.getElementsByClassName("popup-promo")[0];
  popup.style.display="block";
}
function getsubpromo(a){
    let svg=a.attributes["data-svg"].value;
    let icon=document.getElementsByClassName("popup-soc-icon")[Number(svg)];
    let ok=document.getElementsByClassName("popup-soc-img")[Number(svg)];
    icon.style.display="none";
    ok.style.display="inline-block";
    let popup=document.getElementsByClassName("popup-promo")[0];
    a.style.border="solid 1.5px #51e267";
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
if(window.screen.availWidth<720){
    let video=document.getElementsByTagName("video")[0];
    video.src="woop/mov_Woop_MOBILE.mp4"}

    var owl = $(".owl-one");
        owl.owlCarousel({
          items: 1,
          margin: 0,
          loop: false,
          rewind:  false,
          nav: false,
          touchDrag:false,
          startPosition:2,
          mouseDrag:false,
        });
        var owl1 = $(".owl-two");
        owl1.owlCarousel({
          items: 1,
          margin: 64,
          startPosition:2,
          loop: false,
          rewind: false,
          nav: false,
          touchDrag:false,
          freeDrag:  true,
          mouseDrag:false,
        });
       
       
       
     


        function changePos(a){
          owl.trigger('to.owl.carousel', a, 500);
          owl1.trigger('to.owl.carousel', a, 500);
        }
        $(".otz-arrow-right").click(function(){
            owl.trigger("next.owl.carousel");
            owl1.trigger("next.owl.carousel");
          });
           
          $(".otz-arrow-left").click(function(){
            owl.trigger("prev.owl.carousel");
            owl1.trigger("prev.owl.carousel");
          });
        

          let stars1=document.getElementsByClassName('otz')[0]; 
          
          var initialPoint;
          var finalPoint;
          if(stars1!=undefined){
          stars1.addEventListener('touchstart', function(event) {
          event.stopPropagation();
          initialPoint=event.changedTouches[0];
          }, false);
          stars1.addEventListener('touchend', touchEnd, false);
         };
  
          function touchEnd(event){
              event.stopPropagation();
              stars1.removeEventListener('touchend',touchEnd , false);
          finalPoint=event.changedTouches[0];
          var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
          var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
          if (xAbs > 20 || yAbs > 20) {
          if (xAbs > yAbs) {
          if (finalPoint.pageX < initialPoint.pageX){
              
            owl.trigger("next.owl.carousel");
            owl1.trigger("next.owl.carousel");}
          else{
            owl.trigger("prev.owl.carousel");
            owl1.trigger("prev.owl.carousel");}
          }
          };
          setTimeout(()=>{
            stars1.addEventListener('touchend', touchEnd, false);
        },500)
          };