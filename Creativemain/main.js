function scrolle()
{window.scrollBy(0,700);
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