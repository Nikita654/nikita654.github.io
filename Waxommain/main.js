
var slideindex = 1,rpostsindex=0;



showsSlides(slideindex);

function prevBack(n) {
    showsSlides(slideindex += n);
};

function currentBack(n){
    showsSlides(slideindex= n);
};

function showsSlides(n) {
    let back = document.getElementsByClassName("header-background");
    let circle = document.getElementsByClassName("slider-circle");
    if (n==0){slideindex=5;n=5};
    if (n==6){slideindex=1;n=1;};
    back[0].style.filter= "brightness(50%)";
    for(let i=0; i<5;i++){
    circle[i].classList.remove("header-circle-active");};
    if(n==1){
        back[0].style.backgroundImage="url(Waxommain/img/sl-back.png)";
    };
    if(n==2){
        back[0].style.backgroundImage="url(Waxommain/img/partners-back.png)";
    };
    if(n==3){
        back[0].style.backgroundImage="url(Waxommain/img/playback.png)";
    };
    if(n==4){
        back[0].style.backgroundImage="url(Waxommain/img/backh1.png)";
    };
    if(n==5){
        back[0].style.backgroundImage="url(Waxommain/img/vp-back.png)";
    };
    circle[n-1].classList.add("header-circle-active");
    setTimeout(function(){back[0].style.filter= "brightness(100%)";},800);
               
};



function ProjectChoose(x){
    let a=arguments;
    let k,m,menuButton=document.getElementsByClassName("category");
    let chooseArticle=document.getElementsByClassName("project-gridel");
    m=chooseArticle.length;
    for(let i=0;i<m-1;i++){
        menuButton[i].classList.remove("categoryACTIVE");
        chooseArticle[i].classList.remove("project-gridelACTIVE");
};
    chooseArticle[m-1].classList.remove("project-gridelACTIVE");
    menuButton[x].classList.add("categoryACTIVE");
    k=a.length;
    for(let i=1;i<k;i++){
        chooseArticle[a[i]].classList.add("project-gridelACTIVE");};
        
    setTimeout(
        function(){for(let i=0;i<m-1;i++){
        menuButton[i].classList.remove("categoryACTIVE");
        chooseArticle[i].classList.remove("project-gridelACTIVE");
};
    chooseArticle[m-1].classList.remove("project-gridelACTIVE");},3000);
   
};

function prevrposts(n){
    rpostsArticle(rpostsindex+= n);
};

function rpostsArticle(n)
{let article=document.getElementsByClassName("rposts-gr");
let m=article.length;
if (n==-1){rpostsindex=2;n=2};
    if (n==3){rpostsindex=0;n=0;};
 for(let i=0;i<m;i++)
 {
    article[i].classList.remove("rposts-grACTIVE");
 };
 article[n].classList.add("rposts-grACTIVE");
 setTimeout(function(){article[n].classList.remove("rposts-grACTIVE");},3000);
};



function rpostsImage(n){
    
        let image = document.getElementsByClassName("rposts-img1");
        let circle = document.getElementsByClassName("rposts-circle");
        if (n==0){slideindex=5;n=5};
        if (n==6){slideindex=1;n=1;};
        image[0].style.filter= "brightness(100%)";
        image[0].style.opacity="1";
        for(let i=0; i<5;i++){
        circle[i].classList.remove("rposts-circle-active");};
        image[0].style.animationName="switching ";
        
        setTimeout(function(){
            
            if(n==1){
                circle[0].classList.add("rposts-circle-active");
                image[0].style.backgroundImage="url(Waxommain/img/rposts-img1.png)";
            };
            if(n==2){
                circle[1].classList.add("rposts-circle-active");
                image[0].style.backgroundImage="url(Waxommain/img/pr-img4.png)";
            };
            if(n==3){
                circle[2].classList.add("rposts-circle-active");
        
                image[0].style.backgroundImage="url(Waxommain/img/pr-img6.png)";
            };
            if(n==4){
                circle[3].classList.add("rposts-circle-active");
                
        
                image[0].style.backgroundImage="url(Waxommain/img/pr-img2.png)";
            };
            if(n==5){
                circle[4].classList.add("rposts-circle-active");
        
                image[0].style.backgroundImage="url(Waxommain/img/pr-img1.png)";
            };
            
            
            image[0].style.animationName="switching1";;},2000);
                   
   
};



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
    window.addEventListener('load', doAnimations,false);
    window.addEventListener('scroll', doAnimations,false);
   
    doAnimations();
    