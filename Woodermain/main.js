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