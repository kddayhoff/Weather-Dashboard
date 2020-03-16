
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

        var name = response.name;
        console.log(name);

        var date = moment().format('MMMM Do YYYY');
        console.log(date);

        var temp = (response.main.temp);
        console.log(temp);

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(tempF + " F ");

        var humidity = response.main.humidity
        console.log(humidity);

        var windSpeed = response.wind.speed;
        console.log(windSpeed);

        var lng = response.coord.lon;
        console.log(lng);

        var lat = response.coord.lat;console.log(lat);
        
        $("#weather-info").append(name, temp, tempF, humidity, windSpeed);
       


        // var wellSection = $("<div>");
        // wellSection.addClass("well");
    


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



