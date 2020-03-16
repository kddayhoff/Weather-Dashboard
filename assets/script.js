
var searchBtn = $("#search");


$(document).ready(function() {
searchBtn.on("click", function(event) {
    event.preventDefault;
})
//function displayWeatherInfo() {
//Userinput field is NOT working at the moment

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Chicago" + "&appid=b74f70f75df1dd598f40a1fa0a327642";

//var userInput = $("#user-input").val().trim(); 
    $.ajax({
        url: queryURL,
        method: "GET" 

    }).then(function(response) {
        console.log(response);
      
        console.log(queryURL);
        console.log(response.name);
        console.log(moment().format('MMMM Do YYYY'));
        console.log(response.main.temp);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(tempF + " F ");
        console.log(response.main.humidity);
        console.log(response.wind.speed);
        console.log(response.coord.lon);
        console.log(response.coord.lat);
        var lng = response.coord.long;
        var lat = response.coord.lat;

        function getUVIndex() {
            var url = "https://api.openuv.io/api/v1/uv?lat=" + lat + "&lng=" + lng;
              
            $.ajax({
              url: queryURL,
              method: 'GET',
              }).then(function(request) {
                  console.log(request);
                request.setRequestHeader('x-access-token', '35f2d7b929804c83614eef57af1623ed');
              })  

              console.log(url);
            }
        });
 
        });
//}



