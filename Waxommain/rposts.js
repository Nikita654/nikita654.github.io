 export function rpostsArticle(n)
{let article=document.getElementsByClassName("rposts-gr");
let m=article.length;
 for(let i=0;i>m;i++)
 {
    article[i].classList.remove("rposts-grACTIVE");
 };
 article[n].classList.add("rposts-grACTIVE");
};
