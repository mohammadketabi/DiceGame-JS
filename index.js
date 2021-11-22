  var randomNumber1 = (Math.random() * 6) + 1;

  randomNumber1 = Math.floor(randomNumber1);

  var randomNumber2 = (Math.random() * 6) + 1;

  randomNumber2 = Math.floor(randomNumber2);

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Win 🚩";
  }else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Win 🚩";
  }else{
    document.querySelector("h1").textContent = "Draw!";
  }
