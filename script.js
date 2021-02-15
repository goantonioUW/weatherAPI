//when the user clicks the search button
var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-control");

function handleSearch() {
  //Then i get the value that the entered into the search input
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
          <div class="weather">Sunny</div>
          <div class="hi-low">High: 13<span class="hi">°F</span> / Low: 6<span class="hi">°F</span></div>
          <div class="humidity">Humidity: 75<span class="hi">%</span></div>
          <div class="wind-speed">Wind Speed: 15<span class="hi">%</span></div>
          <div class="uv-index">UVINDEX</div>
          `);
    //Start rendering data to the html
    //THEN get the lat and lng out of the response object
    //NEXT call makeOneCallRequest and pass in the lat and lng
  });
}

function makeOneCallRequest(lat, lng) {
  //Next we need to build the URL fot the first api request
  //https://api.openweathermap.org/data/2.5/weather?q=[USER_INPUT]&appid=b9b4b4e352e630b8fffa863c640dbb65

  //NEXT, make the request to the URL with ajax

  $.ajax(queryUrl).then(function (response) {
    //Finish rendering data to the html
  });
}
