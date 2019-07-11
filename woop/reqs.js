function users() {
  
  var xhr = new XMLHttpRequest();
  xhr.open("get", "http://podnimaem.cash/api/games/get_total_players_won", true);


  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)
        let names=document.getElementsByClassName('online-won')[0];
           
            
      
        names.innerHTML=rek2.amount
      
     
       
        
  
    
      }
      
  }
  xhr.send(null);
}
function liders() {
  
  var xhr = new XMLHttpRequest();
  xhr.open("get", "http://podnimaem.cash/api/games/get_leaders?interval=all", true);


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
  xhr.open("GET", "http://ws.podnimaem.cash/clients_count");
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)

        let players=document.getElementsByClassName('online-players')[0];
        players.innerHTML=rek2.count;
        
  

      }
  }
  xhr.send();
}
function payments() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://podnimaem.cash/api/payments/last_payments");
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
    users()
    online()
    liders();
    payments()