$(document).ready(function() {


    $( "#user-input" ).keyup(function( event ) {
        if ( event.which == 13 ) {
         event.preventDefault();
        
$("#searchBtn").on("click", function(event) {
    event.preventDefault;
var userInput = $("#user-input").val();
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
           


        // var weatherData = $("<div>");
        // weatherData.addClass("data-item");
        // weatherData.add("li");
        // $("#weather-info").append(weatherData);

        $("#weather-info").append("<li>" + "City: " + name + "</li>");
        $("#weather-info").append("<li>" + "Current Date:" + date + "</li>");
        $("#weather-info").append("<li>" + "Temperature Fahrenheit: " + tempF + "</li>");
        $("#weather-info").append("<li>" + "Temperature Kelvin: " + temp + "</li>");
        $("#weather-info").append("<li>" + "Humidity: " + humidity + "</li>");
        $("#weather-info").append("<li>" + "Wind Speed: " + windSpeed + "</li>");
        $("#weather-info").append("<li>" + "UV Index" + uvIndex + "</li>");

       

        var fiveDayForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lng + apiKey;

        $.ajax({
            url: fiveDayForecast,
            method: 'GET',

        }).then(function(forecast) {
            // console.log(forecast);
            
            //console.log("temp: " + forecast.list[0].main.temp)
            // console.log("temp min: " + forecast.list[0].main.temp_min)
            // console.log("temp max: " + forecast.list[0].main.temp_max)
           
            for (var i = 0; i < forecast.list.length; i++) {
                console.log(forecast.list[i].main.temp)
                console.log(forecast.list[i].main.temp_min)
                console.log(forecast.list[i].main.temp_max)
                if (i === 5) {
                    break;
                } 
            }

        


           $("#weather-info").append("<div>" + fiveDayForecast + "</div>)");

        })
        //console.log(forecast);
    
        


        })
     });
  });
}
})
})

 
 
      
// //}



