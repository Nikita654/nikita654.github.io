
function liders() {
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://podnimaem.cash/api/games/get_total_players_won", true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status === 200) { 
        rek2= JSON.parse(xhr.response)

       
        
  
     console.log(rek2)
      }
      
  }
  xhr.send(rek2);
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
  
            let names=document.getElementsByClassName('oplata-get-name');
            let money=document.getElementsByClassName('oplata-get-money');
            
      for (i = 0; i < 4; i++) {
        names[i].innerHTML=rek2.withdraws[i].username
        money[i].innerHTML=rek2.withdraws[i].amount
      }
      

          }
      }
      xhr.send();
    }

    online()
    liders();
    payments()