function displayCities () {
    
   $("#cities").empty();
    
    for ( var i = 0; i < cities.length; i++) {
        var newItem = $("<li>").text(cities[i]);
        
        $("#cities").append(newItem);
    }

}

if (localStorage.cities) {
    var cities = JSON.parse(localStorage.getItem("cities"));
    }
    else {
        var cities = []
    }

$(document).ready(function() {


displayCities();
console.log(cities);

    
    
//  $(document).on("keypress", function(x){                   if(x.which == 13) {
//             input = $("#user-input").val();
//         }
//     })
        
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


//Userinput field is NOT working at the moment
var apiKey = "&appid=b74f70f75df1dd598f40a1fa0a327642";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET" 

    }).then(function(response) {
        console.log(response);
        console.log(queryURL);

        var name = response.name;

        var temp = (response.main.temp);
       
        var tempF = (response.main.temp - 273.15) * 1.80 + 32; 

        var humidity = response.main.humidity
        
        var windSpeed = response.wind.speed;

        var lng = response.coord.lon;
        console.log(lng);

        var lat = response.coord.lat;
        console.log(lat);
        
        var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + lat + "&lon=" + lng + apiKey;

        $.ajax({
            url: uvIndex,
            method: 'GET',

        }).then(function(request) {
            
            var date = request.date_iso;
            
            var uvIndex = request.value;
     

        $("#weather-info").append("<li>" + "City: " + name + "</li>");
        $("#weather-info").append("<li>" + "Current Date:" + date + "</li>");
        $("#weather-info").append("<li>" + "Temperature Fahrenheit: " + tempF + "</li>");
        $("#weather-info").append("<li>" + "Temperature Kelvin: " + temp + "</li>");
        $("#weather-info").append("<li>" + "Humidity: " + humidity + "</li>");
        $("#weather-info").append("<li>" + "Wind Speed: " + windSpeed + "</li>");
        $("#weather-info").append("<li>" + "UV Index " + uvIndex + "</li>");

        

        var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + apiKey;



        
//=============================================================
//Five day forecast here



        $.ajax({
            url: fiveDayForecast,
            method: 'GET',

        }).then(function(forecast) {
            console.log(forecast);
           
         
            for (var i = 0; i < forecast.list.length; i++) {
                if(forecast.list[i].dt_txt.indexOf("15:00:00")!== -1) {
                    console.log(forecast.list[i]);
                }

                
               }
             })
           })
         });
       });
      
   })

 
 
      
// //}



