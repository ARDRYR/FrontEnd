const sissors = document.querySelector(".sissorsButton");
const textSissors = document.querySelector(".playerResult");

const playerCount = document.getElementsByClassName("playerCount")[0];
const computerCount = document.getElementsByClassName("computerCount")[0];


let computerScore = 0;
let playerScore = 0;

sissors.addEventListener('click', function() {
  textSissors.textContent = "가위";
  value = makeRandomValue();
  sissorsResult(value);
});

const rock = document.querySelector(".rockButton");
const textRock = document.querySelector(".playerResult");

rock.addEventListener('click', function() {
  textRock.textContent = "바위";
  value = makeRandomValue();
  rockResult(value);
});

const paper = document.querySelector(".paperButton");
const textPaper = document.querySelector(".playerResult");

paper.addEventListener('click', function() {
  textRock.textContent = "보";
  value = makeRandomValue();
  paperResult(value);
});


function makeRandomValue(){
  const textComputer = document.querySelector(".computerResult");
  const computerResult = Math.floor(Math.random() * 3);

  let value = "";
  if (computerResult == 0) {
    textComputer.textContent = "가위";
    value = "가위";
  } else if (computerResult == 1) {
    textComputer.textContent = "바위";
    value = "바위";
  } else {
    textComputer.textContent = "보";
    value = "보";
  }

  return value;
}


function sissorsResult(value){
  const whoWin = document.querySelector(".whoWin");
  console.log(computerCount);
  if (value == "가위"){
    whoWin.textContent = "비김";
  } else if (value == "바위"){
    whoWin.textContent = "짐";
    computerScore = computerScore + 1;
    computerCount.innerText = computerScore;
  } else if (value == "보") {
    whoWin.textContent = "이김";
    playerScore = playerScore + 1;
    playerCount.innerText = playerScore;
  }
}

function rockResult(value){
  const whoWin = document.querySelector(".whoWin");

  if (value == "가위"){
    whoWin.textContent = "이김";
    playerScore = playerScore + 1;
    playerCount.innerText = playerScore;
  } else if (value == "바위"){
    whoWin.textContent = "비김";
  } else if (value == "보") {
    whoWin.textContent = "짐";
    computerScore = computerScore + 1;
    computerCount.innerText = computerScore;
  }
}

function paperResult(value){
  const whoWin = document.querySelector(".whoWin");

  if (value == "가위"){
    whoWin.textContent = "짐";
    computerScore = computerScore + 1;
    computerCount.innerText = computerScore;
  } else if (value == "바위"){
    whoWin.textContent = "이김";
    playerScore = playerScore + 1;
    playerCount.innerText = playerScore;
  } else if (value == "보") {
    whoWin.textContent = "비김";
  }
}