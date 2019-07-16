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