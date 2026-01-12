
function spaceGameFetch(url){
  document.getElementById('game-screen').src = url;
  
}
function loadGameList(){
    fetch('files/res/game_list.html')
    .then(response => response.text())
    .then(data => document.getElementById('lists').innerHTML = data);

   
}



loadGameList();