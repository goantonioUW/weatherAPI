//when the user clicks the search button
var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-control");

function handleSearch() {
  //Then i get the value that the entered into the search input
  makeWeatherRequest(search);
}

function makeWeatherRequest(search) {
  //Next we need to build the URL fot the first api request
  //https://api.openweathermap.org/data/2.5/weather?q=[USER_INPUT]&appid=b99b4b4e352e630b8fffa863c640dbb65

  //NEXT, make the request to the URL with ajax

  $.ajax(querryUrl).then(function (response) {
    //Start rendering data to the html
    //THEN get the lat and lng out of the response object
    //NEXT call makeOneCallRequest and pass in the lat and lng
  });
}

function makeOneCallRequest(lat, lng) {
  //Next we need to build the URL fot the first api request
  //https://api.openweathermap.org/data/2.5/weather?q=[USER_INPUT]&appid=b9b4b4e352e630b8fffa863c640dbb65

  //NEXT, make the request to the URL with ajax

  $.ajax(querryUrl).then(function (response) {
    //Finish rendering data to the html
  });
}
