//create a random number for tresures
var treasureLocation = Math.floor(Math.random() * 16);
var bombLocation = Math.floor(Math.random() * 16);

//treasure and bomb are not the same number
if (treasureLocation === bombLocation) {
  bombLocation = Math.floor(Math.random() * 16);
}
console.log(treasureLocation, bombLocation);

//couter 
var counter = 10;

function treasure(location) {
  counter = counter - 1;
  document.getElementById("counter").innerHTML = `Counter: ${counter}`;

  if (treasureLocation === location) {
    document.getElementById("outcome").innerHTML = "You win! 🥇";
    document.getElementById("gameboard").innerHTML = "";
  } else if (bombLocation === location) {
    document.getElementById("outcome").innerHTML = "You lose! 💀";
    document.getElementById("gameboard").innerHTML = "";
  } else if (treasureLocation !== location && bombLocation !== location) {
    document.getElementById(location).innerHTML = "🍺";
  } else if (counter === 0) {
    document.getElementById("outcome").innerHTML = "You lose! 💀";
    document.getElementById("gameboard").innerHTML = "";
  }
  document.getElementById(location).disabled = true;
}
