$(document).ready(function() {


    // $("#user-input").keyup(function( event ) {
    //     if ( event.keyCode === 13 ) {
    //      event.preventDefault();
        
$("#searchBtn").on("click", function(event) {
    event.preventDefault;

var userInput = $("#user-input").val();
            console.log(userInput);
            localStorage.setItem("City:", userInput);
var getUserInput = localStorage.getItem("City:");
$("#city-list").append(getUserInput);

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
            
            //console.log("temp: " + forecast.list[0].main.temp)
            // console.log("temp min: " + forecast.list[0].main.temp_min)
            // console.log("temp max: " + forecast.list[0].main.temp_max)
         
            for (var i = 0; i < forecast.list.length; i++) {
                var timeOfDay = forecast.list[i].dt_txt.substring(10);
                
                // console.log(timeOfDay);
                // console.log("Current temp:" + forecast.list[i].main.temp)
                // console.log("Min temp" + forecast.list[i].main.temp_min)
                // console.log("Max temp" + forecast.list[i].main.temp_max)
                // var minTemp = forecast.list[i].main.temp.temp_min;
                // //var maxTemp = forecast.list[i].main.temp.temp_max;

                // var forecastMin = minTemp.map(function (temp) {
                //     return forecastMin.list[i].main.temp_min === "Minimum Temp";
                    
               
                // }); 
                // console.log(forecastMin);
                // // var forecastMax = forecast.filter(function (temp) {
                // //     return temp.list[i].main.temp_max === "Maximum Temp";
                // // } )
                
                // //console.log(forecastMax);
                // //var midday = (forecast.dates.indexOf("12:00:00") > -1);
                // // if (timeOfDay === "12:00:00") {
                // //     ;
                // // }
                // //console.log(midday);
                if (i === 5) {
                    break;
                } 
               }
             })
           })
         });
       });
      
   })

 
 
      
// //}



