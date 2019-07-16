
var slideindex = 1,rpostsindex=0;



showsSlides(slideindex);

function prevBack(n) {
    showsSlides(slideindex += n,n);
};

function currentBack(n){
    showsSlides(slideindex= n);
};

function showsSlides(n,p) {
    let back = document.getElementsByClassName("header-background");
    let circle = document.getElementsByClassName("slider-circle");
    if (n==0){slideindex=5;n=5};
    if (n==6){slideindex=1;n=1;};
    back[0].classList.remove("animated");
   
    if (p==1 ){
        back[0].style.animationName="position";
    };
    if (p==-1 || p==undefined){
        back[0].style.animationName="Reposition";
    };
    back[0].classList.add("animated")
    setTimeout(function(){
        back[0].classList.remove("animated");
        back[0].style.backgroundImage="";
        if (p==1 ){
            back[0].style.animationName="positionN";
        };
        if (p==-1 || p==undefined){
            back[0].style.animationName="RepositionN";};
            back[0].classList.add("animated");
            
        for(let i=0; i<5;i++){
        circle[i].classList.remove("header-circle-active");};
        if(n==1){
            back[0].style.backgroundImage="url(Waxommain/img/sl-back.png)";
        };
        if(n==2){
            back[0].style.backgroundImage="url(Waxommain/img/sl-back2.jpeg)";
        };
        if(n==3){
           back[0].style.backgroundImage="url(Waxommain/img/sl-back3.jpeg)";
        };
        if(n==4){
            back[0].style.backgroundImage="url(Waxommain/img/sl-back4.jpeg)";
        };
        if(n==5){
            back[0].style.backgroundImage="url(Waxommain/img/sl-back5.jpeg)";
        };
        
        circle[n-1].classList.add("header-circle-active");
        setTimeout(function(){back[0].style.animationName="";},1000);},800);
               
};



function ProjectChoose(x){
    let a=arguments;
    let k,m,menuButton=document.getElementsByClassName("category");
    let chooseArticle=document.getElementsByClassName("project-gridel");
    m=chooseArticle.length;
    for(let i=0;i<m-1;i++){
        menuButton[i].classList.remove("categoryACTIVE");
        chooseArticle[i].classList.remove("project-gridelACTIVE");
        chooseArticle[i].style.display="none";
};
    chooseArticle[m-1].style.display="none";
    chooseArticle[m-1].classList.remove("project-gridelACTIVE");
    menuButton[x].classList.add("categoryACTIVE");
    k=a.length;
    for(let i=1;i<k;i++){
        //chooseArticle[a[i]].classList.add("project-gridelACTIVE");
        chooseArticle[a[i]].style.display="block";};
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
    for(let i=0;i<3;i++){
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

};
    window.addEventListener('load', doAnimations,false);
    window.addEventListener('scroll', doAnimations,false);
    doAnimations();
    doAnimations();
    doAnimations();
    doAnimations();

function openCart(){
    let cart=document.getElementsByClassName("header-cart")[0];
    cart.style.display="block";
    cart.classList.add('animated');
    cart.style.animationName="Cart"
    
}
function closeCart(){
    let cart=document.getElementsByClassName("header-cart")[0];
    cart.style.animationName="cartR"
    cart.classList.add('animated');
    setTimeout(function(){
        cart.classList.remove('animated');
        cart.style.display="none";
        },1200);


}