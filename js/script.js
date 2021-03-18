//when the user clicks the search button
var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-control");
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();  

function handleSearch() {
  //Then I get the value that the entered into the search input
  makeWeatherRequest(search);
}
const searchbox = document.querySelector(".search-box");
const searchButton = document.querySelector(".searchButton");

searchbox.addEventListener("keypress", setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    var city = $(".search-box").val();

    makeWeatherRequest(city);
    
  }
};

searchButton.addEventListener("click", setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    var city = $(".search-box").val();

    makeWeatherRequest(city);
    
  }
};

searchButton.onclick = function (city) {
    const key = inpKey.value;
    if (key) {
        localStorage.setItem(key, city.name);
        location.reload();
    }
    // console.log(key)
};




// get the current date and time 
document.getElementById("date").innerHTML = date;

function makeWeatherRequest(city) {
  //Next we need to build the URL fot the first api request
  var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=b9b4b4e352e630b8fffa863c640dbb65";

  //NEXT, make the request to the URL with ajax

  $.get(queryUrl, function (response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;    

    getForcast(lat, lon);
    console.log(response);
    $(".current").html(`
    <h1>
          <div class="temp">Current Tempurature in ${response.name}: ${response.main.temp}<span class="degree">°F</span></div>
          <div class="weather"><span>Currenty ${response.weather[0].main} </span></div>
          <div class="hi-low">High: ${response.main.temp_max}<span class="hi">°F</span> / Low: ${response.main.temp_min}<span class="hi">°F</span></div>
          <div class="humidity"> Humidity: ${response.main.humidity}<span class="hi">%</span></div>
          <div class="wind-speed">Wind Speed: ${response.wind.speed}<span class="hi">%</span></div>
          <div class="uv-index">UVINDEX: ${response.main.humidity}</div>
    </h1>
          `);
  });
};

function getForcast(lat, lon) {
    // var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=367fe79e97e40c475673bac6ad6a00fa";


    //============================================TEST QUERYURL=================================================================//
    var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=367fe79e97e40c475673bac6ad6a00fa";
    //============================================TEST QUERYURL=================================================================//



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

//onload populate last searched results
//onload display last searched city and weather


//Using local storage to save searches
const inpKey = document.getElementById("inpKey");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorage.getItem(key);
    searchResults.innerHTML += `${key}<br />`


}
