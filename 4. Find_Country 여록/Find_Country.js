const button = document.querySelector(".button");
const input = document.querySelector(".input");
const value = input.value;

let timer;    
function alert_timer(){   //input에 글을 쓰면 300ms마다 console에 현황 나타내는 함수
  if (timer){
    clearTimeout(timer)
  }
  const value = input.value;
  timer = setTimeout(()=> console.log(`${value}`), 300)
}

// https://restcountries.com/v3.1/name/j





fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    const county_data = data;
    input.addEventListener("input", function(){   //input을 작성하면 console에 나타내는 함수 실행
      alert_timer();
    })


    button.addEventListener("click", function(){
      const user_input = input.value;
      const find_country = county_data.find(function(country){
        return country.name.common === user_input;
      });
      
      if (find_country) {
        console.log(find_country.name.common);
      } else {
        alert("해당 국가를 찾을 수 없습니다.");
      }

      const capital = find_country.capital;
      const flag = find_country.flags.png;
           
      const country_name = document.querySelector(".country-name");
      const country_capital = document.querySelector(".capital-name");
      const country_flag = document.querySelector(".flag");

      country_name.textContent = user_input;
      country_capital.textContent = capital[0];
      country_flag.src = flag;

      country_flag.style.borderWidth = "2px";
      country_flag.style.borderStyle = "solid";
      country_flag.style.borderColor = "black";
      country_flag.style.margin = "20px";

      const content_box = document.querySelector(".content-box");
      content_box.style.margin = "20px";
    })
  })

  