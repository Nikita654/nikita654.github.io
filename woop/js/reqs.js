function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function users() {
  
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://podnimaem.cash/api/games/get_total_players_won", true);


  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)
        let names=document.getElementsByClassName('online-payments-js')[0];
        names.innerHTML=rek2.amount
      
     
       
        
  
    
      }
      
  }
  xhr.send(null);
}
function liders() {
  
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://podnimaem.cash/api/games/get_leaders?interval=all", true);


  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)
        let names=document.getElementsByClassName('liders-names');
            let money=document.getElementsByClassName('liders-payments');
            let avatar=document.getElementsByClassName('liders-get-avatar');
      for (i = 0; i < 4; i++) {
        names[i].innerHTML=rek2.leaders.by_sum[i].username;
        money[i].innerHTML=rek2.leaders.by_sum[i].total_bets.sum;
        avatar[i].src=rek2.leaders.by_sum[i].avatar;
      }
       
        
  
     
      }
      
  }
  xhr.send(null);
}











function online() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ws.podnimaem.cash/clients_count");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)
        let players=document.getElementsByClassName('online-players')[0];
        players.innerHTML=rek2.count;
        let game1=document.getElementsByClassName('online-players-1')[0];
        let game2=document.getElementsByClassName('online-players-2')[0];
        let game3=document.getElementsByClassName('online-players-3')[0];
        game1.innerHTML=randomInteger(0, Number(players.innerHTML));
        game2.innerHTML=randomInteger(0, (Number(players.innerHTML)-Number(game1.innerHTML)));
        game3.innerHTML=Number(players.innerHTML)-Number(game1.innerHTML)-Number(game2.innerHTML);
      }
  }
  xhr.send();
}
function payments() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://podnimaem.cash/api/payments/last_payments");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { 
            rek2= JSON.parse(xhr.response)
            let avatar=document.getElementsByClassName('oplata-get-avatar');
            let names=document.getElementsByClassName('oplata-get-name');
            let money=document.getElementsByClassName('oplata-get-money');
            
      for (i = 0; i < 4; i++) {
        names[i].innerHTML=rek2.withdraws[i].username;
        money[i].innerHTML=rek2.withdraws[i].amount;
        avatar[i].src=rek2.withdraws[i].avatar;
         
      }
      

          }
      }
      xhr.send();
    }



    online();
    setInterval(() => {
      let rek2=randomInteger(-9, 9);
  let players=document.getElementsByClassName('online-players')[0];
  players.innerHTML=rek2+Number(players.innerHTML);
  if (Number(players.innerHTML)<=0){
    players.innerHTML=0;
  };    
        let players1,players2,players3;
        let game1=document.getElementsByClassName('online-players-1')[0];
        let game2=document.getElementsByClassName('online-players-2')[0];
        let game3=document.getElementsByClassName('online-players-3')[0];
       
      
          players1=randomInteger(0, rek2);
        players2=randomInteger(0, rek2-players1);
        players3=rek2-players1-players2;
        
        
        game1.innerHTML=Number(game1.innerHTML)+players1;
        game2.innerHTML=Number(game2.innerHTML)+players2;
        game3.innerHTML=Number(game3.innerHTML)+players3;
        if (Number( game1.innerHTML)<=0){
          game1.innerHTML=0;
        };
        if (Number( game2.innerHTML)<=0){
          game2.innerHTML=0;
        };
        if (Number( game3.innerHTML)<=0){
          game3.innerHTML=0;
        };
        
    }, 7000); 







    setInterval(() => {
      let rek2=randomInteger(200, 500);
  let count=document.getElementsByClassName('online-payments-js')[0];
  count.innerHTML=rek2+Number(count.innerHTML);
  let game1=document.getElementsByClassName('online-payments-1')[0];
        let game2=document.getElementsByClassName('online-payments-2')[0];
        let game3=document.getElementsByClassName('online-payments-3')[0];
     let choose=randomInteger(1,3);
     if(choose==1){
        game1.innerHTML=Number(game1.innerHTML)+rek2;}
    if(choose==2){
        game2.innerHTML=Number(game2.innerHTML)+rek2;}
    if(choose==3){
        game3.innerHTML=Number(game3.innerHTML)+rek2;}
    }, 3000); 


    users()
    liders();
    payments();
    