const searchBar = document.querySelector('.search');    //input 받아오기
const recommendWrapper = document.querySelector('.recommend-wrapper');    //컨테이너 받아오기
const recommendList = document.querySelector('.recommend');   //제안컨테이너 받아오기
const recommendItem = document.querySelector('.recommend-item');    //제안컨테이너 요소 받아오기

const API_URL = 'https://restcountries.com/v3.1/name/';   //api 주소를 담아두기 뒤에 나라 이름은 비워두고 나중에 받음

recommendList.removeChild(recommendItem);   //recommendList의 자식요소인 recommendItem 지우기

const createRecommendItem = (flag, name) => {
  const newRecommendItem = recommendItem.cloneNode(true);   //recommendItem의 모든 자식요소의 세부적인 것까지 복사해서 newRecommenItem에 담기기
  const img = newRecommendItem.querySelector('.svg');   //복사해온 newRecommendItem의 자식에서 svg요소 받아오기
  const span = newRecommendItem.querySelector('.country-name');   //복사해온 newRecommendItem의 자식에서 country-name요소 받아오기

  img.src = flag;   //img를 flag의 값으로 경로 설정하기
  span.textContent = name;    //span의 글자를 name의 값으로 변경하기기

  return newRecommendItem;    //newRecommendItem을 반환하기
}

const createRecommend = async () => {
  recommendList.innerHTML = '';   //recommendList안에 공백 요소 추가하기
  const inputValue = searchBar.value;   //searchBar input값 받아오기

  if (inputValue.length === 0) {    //inputValue값의 길이가 0이라면
    recommendWrapper.classList.add('hidden');   //recommendWrapper에 hidden이라는 class 추가하기
    return;
  }

  recommendWrapper.classList.remove('hidden');    //recommendWrapper에 있는 hidden class를 삭제하기

  try {   //아래 코드를 실행하고 에러가 뜨면 catch코드 실행
    const response = await fetch(`${API_URL}${inputValue}`);    //API_URL값과 inputValue값을 둘 다 받아와서 fetch에 넣고 값을 받아올 때까지 기다리고 response에 넣어주기
    const json = await response.json();   //response에 받아온 값들을 js값으로 바꿔줄동안 기다렸다가 json에 넣기

    if (response.status === 404) {    //만약 response의 상태가 404라면
      const noResult = document.createElement('div');   //noResult라는 새로운 div요소를 만든다
      noResult.textContent = '검색 결과가 없습니다';    //noResult의 값을 변환함
      recommendList.appendChild(noResult);    //recommendList의 자식 요소에 noResult를 자식으로 넣어주기기
      return;
    }

    json.forEach((country) => {   //json에 있는 각각의 요소에서 country에 접근
      const item = createRecommendItem(country.flags.svg, country.name.common);   //createRecommendItem함수값을 item에 넣어주기
      recommendList.appendChild(item);    //recommendList에 item을 자식 요소로 넣어주기
    });
  } catch (error) {   //try에서 에러가 나면 실행할 코드
    console.error(error);   //console에 error 출력하기기
  }
}

const debounce = (func, delay = 300) => {   //검색하는데 지연시키는 함수
  let timer;    //timer 설정하기
  return (...args) => {   //이름 없는 함수로 반환하는데, 모든 인자를 받는다는 내용이다.
    clearTimeout(timer);    //timer의 값을 초기화하기
    timer = setTimeout(() => {    //timer의 값을 설정하기
      func.apply(this, args);   //func함수를 실행하는데 뒤에 있는 this와 args를 적용, 앞에 함수를 실행할 때 this에 있는 값을 사용, args로 받아온 모든 인자를 배열 형태로 해서 전달
    }, delay);    //delay=300적용
  };
}

searchBar.addEventListener('input', debounce(createRecommend))    //searchBar에 input이벤트 적용하고 input이 발생하면 debounce함수에 createRecommed함수 값을 넣어서 실행한다.