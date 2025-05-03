
function spaceGameFetch(url){
  document.getElementById('game-screen').src = url;
  
}
function loadGameList(){
    fetch('files/res/game_list.html')
    .then(response => response.text())
    .then(data => document.getElementById('lists').innerHTML = data);

   
}
function keyPress(key){
  let event = new KeyboardEvent('Keydown',{key: key});
  document.dispatchEvent(event);

}
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});
loadGameList();