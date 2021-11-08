
var ranDomNum = Math.floor(Math.random() * 9);

const treasure = (location) => {
//  alert(location);
  if (location == ranDomNum ) {
    alert("Jackpot");
  } else {
    alert("Nah");
  }
}



/*
var counter = 10;
function treasure(location){
  counter = counter - 1;
  document.getElementById("counter").innerHTML = (`counter: ${counter}`;

  if(treasureLocation === location) {
    document.getElementById("outcome").innerHTML = "YEAH! You got it!!";
    document.getElementById("gameboard").innerHTML = "";
  }
  else if(bombLocation === location) {
    document.getElementById("outcome").innerHTML = " NAH!!";
    document.getElementById("gameboard").innerHTML = "";
  }
  else if(treasureLocation !== location && bombLocation !== location) {
    document.getElementById(location).innerHTML = "";
  }
  else if(counter === 0) {
    document.getElementById("outcome").innerHTML = " NAH!!";
    document.getElementById("gameboard").innerHTML = "";
  }
  document.getElementById(location).disabled = true;
}
treasure(location);
*/




// location.reload();
// var ranDomNum = Math.floor(Math.random() * 9);


// var askQuestion = prompt("Can I ask a question?");
