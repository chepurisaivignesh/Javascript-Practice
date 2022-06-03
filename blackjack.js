score = 0;
document.getElementById("but").textContent = "Start";
document.getElementById("butreload").disabled = true;



function card1(cardnum) {
  if (1 <= cardnum <= 10) {
    document.getElementById("num1top").textContent = cardnum;
    document.getElementById("num1bottom").textContent = cardnum;
  } else if (cardnum == 11) {
    document.getElementById("num1top").textContent = "J";
    document.getElementById("num1bottom").textContent = "J";
  } else if (cardnum == 12) {
    document.getElementById("num1top").textContent = "Q";
    document.getElementById("num1bottom").textContent = "Q";
  } else if (cardnum == 13) {
    document.getElementById("num1top").textContent = "K";
    document.getElementById("num1bottom").textContent = "K";
  } else {
    document.getElementById("num1top").textContent = "A";
    document.getElementById("num1bottom").textContent = "A";
  }
}
function card2(cardnum) {
  if (1 <= cardnum <= 10) {
    document.getElementById("num2top").textContent = cardnum;
    document.getElementById("num2bottom").textContent = cardnum;
  } else if (cardnum == 11) {
    document.getElementById("num2top").textContent = "J";
    document.getElementById("num2bottom").textContent = "J";
  } else if (cardnum == 12) {
    document.getElementById("num2top").textContent = "Q";
    document.getElementById("num2bottom").textContent = "Q";
  } else if (cardnum == 13) {
    document.getElementById("num2top").textContent = "K";
    document.getElementById("num2bottom").textContent = "K";
  } else {
    document.getElementById("num2top").textContent = "A";
    document.getElementById("num2bottom").textContent = "A";
  }
}

function activity() {
  document.getElementById("butreload").disabled = false;

  num1 = Math.ceil(Math.random() * 13);
  num2 = Math.ceil(Math.random() * 13);
  document.getElementById("num1").textContent = num1;
  document.getElementById("num2").textContent = num2;

  card1(num1);
  card2(num2);
  summation = Number(num1) + Number(num2);
  console.log(summation);

  if (summation < 21) {
    document.getElementById("result").textContent =
      "You have nothing to worry about, Try Again!";
    document.getElementById("but").textContent = "Try again";
  } else if (summation == 21) {
    document.getElementById("result").textContent =
      "Congratulations you won, Go on!";
    score += 1;
    document.getElementById("but").textContent = "Go on";
  } else {
    document.getElementById("result").textContent = "Sorry you lost!";
    document.getElementById("butreload").textContent = "Reload";
    document.getElementById("but").setAttribute("disabled", "disabled");
    alert("Your Score is " + score);
  }

  document.getElementById("score").textContent = "Score :" + score;
}
