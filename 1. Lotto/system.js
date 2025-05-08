const blank = document.getElementById("blank");
const buyLottoButton = document.querySelector(".buyLottoButton");

function generateNumber() {   //로또 생성 함수임
  const lotto = [];
  while(lotto.length < 6){
    let num = Math.floor(Math.random() * 45) + 1;
    if (!lotto.includes(num)) {
      lotto.push(num);
    }
  }
  return lotto.sort((a, b) => a - b);
}

function generateNumbers(lottoCount) {    //생성한 로또를 input만큼 배열에 담기기
  let lottoes = [];
  for (let i = 0;i<lottoCount;i++) {
    lottoes.push(generateNumber());
  }
  return lottoes;
}

function matchNumber(arr1, arr2){
  return arr1.filter(num => arr2.includes(num).length);
}

const main = document.querySelector(".mainbox");
main.addEventListener("DOMContentLoaded", ()=>{
  for(let i = 1;i<7;i++){
    const cpuNumber = document.createElement("span");
    cpuNumber.className = `ball cpuNum${i}`;
    cpuNumber.textContent = `${cpuPick[i-1]}`;
    console.log(cpuNumber);

    cpuNumbers.appendChild(cpuNumber);
  }
})

let myPick=[];

buyLottoButton.addEventListener("click", function(){    //로또 구매 버튼 눌렀을 때 이벤트
  let wantLottoCount = parseInt(blank.value);
  const money = document.querySelector(".money");

  if(wantLottoCount >= 1){    //버튼클릭시 번호 생성버튼 색깔 바뀌는거+총 금액 바뀌는거
    createNumberButton.style.backgroundColor = '#4B89DC';
    money.textContent = wantLottoCount + ",000";
  } else if(wantLottoCount === 0 || isNaN(wantLottoCount)){
    createNumberButton.style.backgroundColor = '#A0B3E0';
    money.textContent = "0";
    return;
  }


  let result = "";
  document.querySelector('.lottoResult').innerHTML="";
  while(wantLottoCount > 0) {
    const myNumbers = document.createElement("div");
    myNumbers.className = 'balls';
    myPick = [];

    const lottoSet = generateNumber();
    myPick.push(lottoSet);
    result += lottoSet.join(", ") + "\n";
    wantLottoCount--;

    console.log(myPick);
    
    for(let i = 1; i < 7;i++){
      const myNumber = document.createElement("span");
      myNumber.className = `ball myNum${i}`;
      myNumber.textContent = `${lottoSet[i-1]}`;

      myNumbers.appendChild(myNumber);
    }
    document.querySelector('.lottoResult').appendChild(myNumbers);
  }

})



const createNumberButton = document.querySelector(".createNumberButton");
const cpuPick = generateNumber();
const cpuNumbers = document.createElement("div");
cpuNumbers.className = 'balls';


createNumberButton.addEventListener("click", function(){   //번호생성 버튼을 클릭했을 때 이벤트
  wantLottoCount = parseInt(blank.value);

  if (isNaN(wantLottoCount) || wantLottoCount <= 0){    //input이 공백이거나 0이면 구매하라고 하기
    alert("로또를 구매해주세요");
    return;
  }

  cpuNumbers.innerHTML="";

  for(let i = 1; i < 7;i++){    //이번주 숫자 랜덤으로 6개 정하기기
    const cpuNumber = document.createElement("span");
    cpuNumber.className = `ball cpuNum${i}`;
    cpuNumber.textContent = `${cpuPick[i-1]}`;

    cpuNumbers.appendChild(cpuNumber);
  }
  const checkNumberBox = document.querySelector('.checkNumber');  //한 번 출력했으면 더 안되게 하기기
  if (!checkNumberBox.contains(cpuNumbers)){
    checkNumberBox.appendChild(cpuNumbers);
  }

  const match = matchNumber(cpuPick, myPick);
  console.log(match);


})


