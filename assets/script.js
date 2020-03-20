//This stores the cities in local storage to the page
function displayCities () {
    
   $("#cities").empty();
    
    for ( var i = 0; i < cities.length; i++) {
        var newItem = $("<li>").text(cities[i]);
        
        $("#cities").append(newItem);
    }

}

//This gets the cities store in local storage and keeps them displayed to the page after refreshing
if (localStorage.cities) {
    var cities = JSON.parse(localStorage.getItem("cities"));
    }
    else {
        var cities = []
    }


$(document).ready(function() {
displayCities();
console.log(cities);

//This is will start search for city to display weather based on a button click and input from a user        
$("#searchBtn").on("click", function(event) {
    event.preventDefault;

var userInput = $("#user-input").val();
cities.push(userInput);
localStorage.setItem("cities", JSON.stringify(cities));
console.log(cities)
console.log(userInput);

displayCities();

//call function for cities
var getUserInput = localStorage.getItem("City:");
$("#city-list").append(getUserInput);

//clear user input here

//This is where we call our first API to get weather info for a city of the user's choice
var apiKey = "&appid=b74f70f75df1dd598f40a1fa0a327642";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET" 

    }).then(function(response) {
        console.log(response);
        console.log(queryURL);

        var name = response.name;

        var tempC = Math.floor(response.main.temp - 273.15);
       
        var tempF = Math.floor(response.main.temp * 1.8 - 459.67); 
       
        var humidity = response.main.humidity
        
        var windSpeed = response.wind.speed;

        var lng = response.coord.lon;
        console.log(lng);

        var lat = response.coord.lat;
        console.log(lat);
        
        //getting UVindex with different API using longitude and latitude from first API
        var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + lat + "&lon=" + lng + apiKey;

        $.ajax({
            url: uvIndex,
            method: 'GET',

        }).then(function(request) {
            
            var date = moment().format("MMMM Do YYYY"); 
            
            var uvIndex = request.value;
     
//puts current weather on to the page in list form
        $("#weather-info").append("<li>" + "City: " + name + "</li>");

        $("#weather-info").append("<li>" + "Current Date: " + date + "</li>");

        $("#weather-info").append("<li>" + "Temperature Fahrenheit: " + tempF + "</li>");

        $("#weather-info").append("<li>" + "Temperature Celsius: " + tempC + "</li>");

        $("#weather-info").append("<li>" + "Humidity: " + humidity + "</li>");

        $("#weather-info").append("<li>" + "Wind Speed: " + windSpeed + "</li>");

        $("#weather-info").append("<li>" + "UV Index " + uvIndex + "</li>");


//Five day forecast starts here
 var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + apiKey;

        $.ajax({
            url: fiveDayForecast,
            method: 'GET',

        }).then(function(forecast) {
            console.log(forecast);
           
         
            for (var i = 0; i < forecast.list.length; i++) {
                if(forecast.list[i].dt_txt.indexOf("15:00:00")!== -1) {
                    console.log(forecast.list[i]);
                   
                    var tempF = Math.floor(forecast.list[i].main.temp * 1.8 - 459.67);  
                    console.log(tempF);
                    var clouds = forecast.list[i].weather[0].icon;
                    console.log(clouds);
                }    
               }
             })
           })
         });
       });      
   })

 
 
      
// //}



