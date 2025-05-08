const input = document.querySelector(".input");
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelector(".cards");

cards.innerHTML = '';

fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data =>{
  console.log(data);
  data.forEach(country => {
    cards.innerHTML = `
    <img src=${country.flags.png}>
    <h2 class="name">${country.name.common}</h2>
    <span class="continent">${country.continents}</span>
    <span class="population">${country.population}</span>
    `
  });
})
