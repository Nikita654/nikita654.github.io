var index=0;
function visibleMenu(n){
    visible(index+=n);
};
function visible(n){
    let menu=document.getElementsByClassName("hidden-menu-el");
    let a=menu.length;
    if (n%2==1){
    for(let i=0;i<a;i++){
        menu[i].style.display="block";
        menu[i].style.animationName="come";
    };} else {for(let i=0;i<a;i++){
        menu[i].style.display="none";
        menu[i].style.animationName="come";
    };}
};

function scrolle()
{window.scrollBy(0,800)};


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