//when the user clicks the search button
var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-control");

function handleSearch() {
  //Then I get the value that the entered into the search input
  makeWeatherRequest(search);
}
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    var city = $(".search-box").val();
    makeWeatherRequest(city);
  }
}

function makeWeatherRequest(city) {
  //Next we need to build the URL fot the first api request
  var queryUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=b9b4b4e352e630b8fffa863c640dbb65";

  //NEXT, make the request to the URL with ajax

  $.get(queryUrl, function (response) {
    console.log(response);
    $(".current").html(`
    <div class="temp">${response.main.temp}<span class="degree">°F</span></div>
          <div class="weather">${response.weather[0].main}</div>
          <div class="hi-low">High: ${response.main.temp_max}<span class="hi">°F</span> / Low: ${response.main.temp_min}<span class="hi">°F</span></div>
          <div class="humidity"> Humidity: ${response.main.humidity}<span class="hi">%</span></div>
          <div class="wind-speed">Wind Speed: ${response.wind.speed}<span class="hi">%</span></div>
          <div class="uv-index">UVINDEX: ${response.main.humidity}</div>
          `);
    //Start rendering data to the html
    //THEN get the lat and lng out of the response object
    //NEXT call makeOneCallRequest and pass in the lat and lng
  });

}

// function weekForecast(){
//  let queryUrl = "api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=b9b4b4e352e630b8fffa863c640dbb65"

// $.get(queryUrl, function (response) {
//   console.log(response)
//   $(".current").html(`    
//   <div class="row">
//   <h2>5-Day Forecast</h2>
// </div>
// <div class="row">
//   <div class="weekday"></div>
//   <div class="weekday"></div>
//   <div class="weekday"></div>
//   <div class="weekday"></div>
//   <div class="weekday"></div>
// </div>`);
// })

// }

