//when the user clicks the search button
var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-control");
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  
var searchContainer = document.getElementById("searchContainer");
var cities = JSON.parse(localStorage.getItem("savedCities"));

if (cities === null) {
    cities = [];
}  
else {

    makeWeatherRequest(cities[cities.length - 1]);
}
// else get the weather for the last searched item
//onload populate last searched results
//onload display last searched city and weather



function handleSearch() {
  //Then I get the value that was entered into the search input
  makeWeatherRequest(search);
}

// const searchbox = document.querySelector(".search-box");
// const searchButton = document.querySelector(".searchButton");

//Using local storage to save searches
const inpKey = document.getElementById("inpKey");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

for (let i = 0; i < cities.length; i++) {

    searchResults.innerHTML += `${cities[i]}<br />`
}

searchContainer.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var city = $(".search-box").val();
    cities.push(city);
    localStorage.setItem("savedCities", JSON.stringify(cities))
   // location.reload();
    makeWeatherRequest(city);
});


// get the current date and time 
document.getElementById("date").innerHTML = date;

function makeWeatherRequest(city) {
  //Next we need to build the URL fot the first api request
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=b9b4b4e352e630b8fffa863c640dbb65";
  
  //NEXT, make the request to the URL with ajax

  $.get(queryUrl, function (response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;    

    getForcast(lat, lon);
    console.log(response);

     $.get("http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=b9b4b4e352e630b8fffa863c640dbb65", function (uvRes) {
    console.log(uvRes)
        var iconcode = response.weather[0].icon
         var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
     $(".current").html(`
        <h1>
              <div class="temp">Current Tempurature in ${response.name}: ${response.main.temp}<span class="degree">°F</span> <img src=${iconurl} /> </div>
              <div class="weather"><span>Currenty ${response.weather[0].main} </span></div>
              <div class="hi-low">High: ${response.main.temp_max}<span class="hi">°F</span> / Low: ${response.main.temp_min}<span class="hi">°F</span></div>
              <div class="humidity"> Humidity: ${response.main.humidity}<span class="hi">%</span></div>
              <div class="wind-speed">Wind Speed: ${response.wind.speed}<span class="hi">%</span></div>
              <div class="uv-index">UVINDEX: ${uvRes.value}</div>
        </h1>
              `);
     })
  });
};

function getForcast(lat, lon) {

    var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=367fe79e97e40c475673bac6ad6a00fa";

    $.get(queryUrl, function (response) {
        console.log(response);
        
        $(".forcast").html(`

        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${response.list[3].dt_txt} </div>
            <div class="card-body">
                <p class="card-text">Humidity:${response.list[3].main.humidity}</p>
                <p class="card-text">Temp:${response.list[3].main.temp}</p>
                <p class="card-text">${response.list[3].weather[0].main}</p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${response.list[14].dt_txt}</div>
            <div class="card-body">
                <p class="card-text">Humidity:${response.list[14].main.humidity}</p>
                <p class="card-text">Temp:${response.list[14].main.temp}</p>
                <p class="card-text">${response.list[14].weather[0].main}</p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${response.list[22].dt_txt}</div>
            <div class="card-body">
                <p class="card-text">Humidity:${response.list[22].main.humidity}</p>
                <p class="card-text">Temp:${response.list[22].main.temp}</p>
                <p class="card-text">${response.list[22].weather[0].main}</p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${response.list[28].dt_txt}</div>
            <div class="card-body">
                <p class="card-text">Humidity:${response.list[28].main.humidity}</p>
                <p class="card-text">Temp:${response.list[28].main.temp}</p>
                <p class="card-text">${response.list[28].weather[0].main}</p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${response.list[38].dt_txt}</div>
            <div class="card-body">
                <p class="card-text">Humidity:${response.list[38].main.humidity}</p>
                <p class="card-text">Temp:${response.list[38].main.temp}</p>
                <p class="card-text">${response.list[38].weather[0].main}</p>
            </div>
        </div>

       
        `)
    })
}

// Uv function 