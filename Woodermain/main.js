
let index=0;
function visibleMenu(n){
    if (window.screen.availWidth<849){ visible(index+=n);};
};

function visible(n){
    let menu=document.getElementsByClassName("hidden-menu-el"),a;
    a=menu.length;
    
    for(let i=0;i<a;i++){    
    menu[i].classList.remove("animated");
    menu[i].style.display="none";};
    
    if (n%2==1){
        for(let i=0;i<a;i++){
        menu[i].style.display="block";
        menu[i].classList.add("animated");
        menu[i].style.animationName="Up";}
    }; if(n%2==0) {
        for(let i=0;i<a;i++){
        menu[i].style.display="block";
        menu[i].classList.add("animated");
        menu[i].style.animationName="bounceLeft";}
        setTimeout(function(){for(let i=0;i<a;i++){
        menu[i].style.display="none";}
        },500);
    }
    setTimeout(function(){
        for(let i=0;i<a;i++){
        menu[i].classList.remove("animated");menu[i].style.animationName="";}
    },1000);
};















function scrolle()
{window.scrollBy(0,800);
    doAnimations();
    doAnimations();};


var doAnimations = function() {
    let offset =  window.screen.availHeight + window.pageYOffset,
        animatables = document.getElementsByClassName('animatable');
    if (animatables.length == 0) {
      window.removeEventListener('scroll', doAnimations);
    }
   
    for(let i=0;i<animatables.length;i++){
      let animatable = animatables[i],counter;
      if (window.screen.availHeight<animatable.clientHeight) {counter=800} else counter=40;
      if ((animatable.getBoundingClientRect().top + animatable.clientHeight  + window.pageYOffset-counter) < offset) {
        setTimeout(function(){
            animatable.classList.remove('animated');
            },1200);
      animatable.classList.remove('animatable');
      animatable.classList.add('animated');
      };
    };};
    doAnimations();
    doAnimations();
    doAnimations();
    window.addEventListener('load', doAnimations,false);
    window.addEventListener('scroll', doAnimations,false);
   
    doAnimations();