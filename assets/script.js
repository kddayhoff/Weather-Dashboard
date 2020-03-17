$(document).ready(function() {

var userInput = $("#user-input").val();

$("#search").on("click", function(event) {
    event.preventDefault;

//Userinput field is NOT working at the moment

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Chicago" + "&appid=b74f70f75df1dd598f40a1fa0a327642";


    $.ajax({
        url: queryURL,
        method: "GET" 

    }).then(function(response) {
        console.log(response);
        console.log(queryURL);

        var name = response.name;
        console.log(name);

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

        var lat = response.coord.lat;
        console.log(lat);
        
      
        var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?&lat=" + lat + "&lon=" + lng + "&appid=b74f70f75df1dd598f40a1fa0a327642";

        // var futureUVindex = "http://api.openweathermap.org/data/2.5/uvi/forecast?&appid=b74f70f75df1dd598f40a1fa0a327642&lat=" + lat + "&lon=" + lng;

        $.ajax({
            url: uvIndex,
            method: 'GET',

        }).then(function(request) {
            console.log(request);
            var date = request.date_iso;
            console.log(date + "I'm Here");
            var uvIndex = request.value;
            console.log(uvIndex);


        var weatherData = $("<div>");
        weatherData.addClass("data-item");
        weatherData.add("li");
        $("#weather-info").append(weatherData);

        $("#weather-info").append("<h3>" + "City: " + name + "</h3>");
        $("#weather-info").append("<h5>" + "Current Date:" + date + "</h5>");
        $("#weather-info").append("<h5>" + "Temperature Fahrenheit: " + tempF + "</h5>");
        $("#weather-info").append("<h5>" + "Temperature Kelvin: " + temp + "</h5>");
        $("#weather-info").append("<h5>" + "Humidity: " + humidity + "</h5>");
        $("#weather-info").append("<h5>" + "Wind Speed: " + windSpeed + "</h5>");
        $("#weather-info").append("<h5>" + "UV Index" + uvIndex + "</h5>");

            // for (var i = 0; i < listItems.length; i++) {

            //     var listItems = [name, date, temp, tempF, humidity, windSpeed, uvIndex];
            

            // $("li").each(function() {
            //     $("#weather-info").append(listItems);
            // })
            
           //$("#weather-info").append(listItems);
            //$("#weather-info").append(listData);

        })
     });
  });
})

 
 
      
// //}



