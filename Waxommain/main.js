
var slideindex = 1,rpostsindex=0;



showsSlides(slideindex);

function prevBack(n) {
    showsSlides(slideindex += n,n);
};

function currentBack(n){
    showsSlides(slideindex= n);
};

function showsSlides(n,p) {
    let back = document.getElementsByClassName("header-back-imgs");
    let circle = document.getElementsByClassName("slider-circle");
    let sizeImg=document.getElementsByClassName("header-background")[0];
    let size=-sizeImg.offsetWidth;
    if (n==0){slideindex=5;n=5};
    if (n==6){slideindex=1;n=1;};
    setTimeout(()=>{
        for(let i=0; i<5;i++){
        circle[i].classList.remove("header-circle-active");};
        if(n==1){
            back[0].style.transform="translateX(0px)";
        };
        if(n==2){
            
            back[0].style.transform="translateX("+1*size+"px)";
        };
        if(n==3){
            back[0].style.transform="translateX("+2*size+"px)";
        };
        if(n==4){
            back[0].style.transform="translateX("+3*size+"px)";
        };
        if(n==5){
            back[0].style.transform="translateX("+4*size+"px)";
        };
        
        circle[n-1].classList.add("header-circle-active");
    },0)
               
};

let stars1=document.getElementsByClassName('header-background')[0]; 
          
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
              
            prevBack(1)}
          else{
            prevBack(-1)}
          }
          };
          setTimeout(()=>{
            stars1.addEventListener('touchend', touchEnd, false);
        },500)
          };

function ProjectChoose(x,name){
    let a=document.getElementsByClassName(name);
    let k,m,menuButton=document.getElementsByClassName("category");
    let chooseArticle=document.getElementsByClassName("project-gridel");
    m=chooseArticle.length;
    let n=menuButton.length;
    for(let i=0;i<m-1;i++){
        chooseArticle[i].classList.remove("project-gridelACTIVE");
        chooseArticle[i].style.display="none";
};
for(let i=0;i<n;i++){
    menuButton[i].classList.remove("categoryACTIVE");
};
    chooseArticle[m-1].style.display="none";
    chooseArticle[m-1].classList.remove("project-gridelACTIVE");
    menuButton[x].classList.add("categoryACTIVE");
    k=a.length;
    for(let i=0;i<k;i++){
        //chooseArticle[a[i]].classList.add("project-gridelACTIVE");
        a[i].style.display="block";};
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


let indexSearch=0;
function openSearch(n){
    closeSearch(indexSearch+=n);
};
function closeSearch(n){
    if (n%2==1){
    let cart=document.getElementsByClassName("header-s-text")[0];

    cart.classList.add('animated');
    cart.style.animationName="Search"
    }
    if(n%2==0) {
        let cart=document.getElementsByClassName("header-s-text")[0];
    cart.style.animationName="SearchR"
    cart.classList.add('animated');
    setTimeout(function(){
        cart.classList.remove('animated');
        
        },1200);
    }
}




function openBuy(){
    let popup=document.getElementsByClassName("popup-buy")[0];
    let cart=document.getElementsByClassName("purchase")[1];
    popup.style.display="block";
    cart.classList.add('animated');
    cart.style.animationName="Purchase"
    popup.style.backgroundColor="rgba(0, 0, 0, 0.19)"
    
}
function closeBuy(){
    let popup=document.getElementsByClassName("popup-buy")[0];
    let cart=document.getElementsByClassName("purchase")[1];
    cart.style.animationName="PurchaseR"
    cart.classList.add('animated');
    popup.style.backgroundColor="rgba(0, 0, 0, 0)"
    setTimeout(function(){
        cart.classList.remove('animated');
        popup.style.display="none";
        },1200);
}



function moreProjects(){
    let block=document.getElementsByClassName("project-grid")[0];
    let extra=block.innerHTML;
    block.innerHTML+=extra;
}





function closePopupV(){
    let popup=document.getElementsByClassName("popup-video")[0];
    popup.style.display="none";
    let video=document.getElementsByClassName("popup-video-v")[0];
    let source=video.src
    video.src=source
}

function openPopupV(){
  let popup=document.getElementsByClassName("popup-video")[0];
  popup.style.display="block";
  let video=document.getElementsByClassName("popup-video-v")[0];
    video.style.display="block";
}

/*
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        closePopupV()
    }
};*/






function validationSearch()                                    
    { let uname = document.forms["LogForm"]["q"];
    if (uname.value == "")                                  
    { 
        uname.placeholder="Please enter your Search."; 
        uname.focus();
        uname.style.backgroundColor="#998675"
        setTimeout(() => {
            uname.style.backgroundColor="#555555"
        }, 2000);
        return false; 
    };
    return true; 
    }