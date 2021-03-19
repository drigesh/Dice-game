function rollDice(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var dest = "dice"+randomNumber1+".png" ;
  document.querySelector(".img1").setAttribute("src",dest);

  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var dest = "dice"+randomNumber2+".png" ;
  document.querySelector(".img2").setAttribute("src",dest);


  if(randomNumber1>randomNumber2)
      document.querySelector(".container h1").innerHTML = "🚩 Player 1 wins!";

  else if(randomNumber2>randomNumber1)
    document.querySelector(".container h1").innerHTML = "Player 2 wins! 🚩";
  else
      document.querySelector(".container h1").innerHTML = "Draw! ";

}
