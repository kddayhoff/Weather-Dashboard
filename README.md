# Weather-Dashboard Try and complete the homework in the following 5 phases. Get a phase fully functional before moving onto the next one. 
*ONLY* once you've completed all 5 phases should you even consider writing some CSS and formatting your page.

SECTION 1: DISPLAYING CURRENT WEATHER
1. Create a function that allows you to get the weather for a city (hard code the city for now). See activity 05-Bujumbura 
2. Create a button on the page that calls this function
3. Once you receive the object, you can put the name of the city, the date, the temperature, the humidity and wind speed on the page. 
4. Find from the API documentation how to get the UV Index for the current date, create a method to get this, and call it from within your current method's `.then()`.
5. Don't forget to use MomentJS to parse the date from unix to a readable format.

SECTION 2: DYNAMICISM
1. Make it dynamic by creating an input box, and passing the user input to the function call rather than hard coding it.
2. Test it by searching for and displaying weather for different cities

PHASE 3: SAVING CITY HISTORY
1. For this section, you want to save the value of each search (i.e. Nashville, Atlanta etc.) to an array of cities. On each search, update the array and save to localstorage. You'll need to make use of `JSON.stringify()` when saving the array and `JSON.parse()` when retrieving the array.
2. When the page loads, the localstorage array should be retrieved and set to the variable holding the cities array.
3. Go through this array, and display them to the page. You might think about only displaying the last 10 or so.

PHASE 4: 5 DAY FORECAST
1. Create a separate function that hits the queryURL for openweather that returns the forecast to you. 
2. You can call this function at the same time as you get the current weather by using a click event on the same button. 
3. Get the response console.logged first! Once you're getting the response, you'll want to loop through the area and create the items on the page. 

PHASE 5: LOAD THE FORECAST FOR THE MOST RECENTLY SEARCHED CITY
1. You already have the list of cities being pulled when you load the page. Now you just need to grab the value of the last item in the array (think `.length - 1`) and call your get forecast and get current weather functions. 

# # 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

## Before you Begin

1. Sign up for an OpenWeatherMap account and review the documentation (https://openweathermap.org/guide).

2. Create an API Key.

3. Experiment with the API using Postman.

4. You'll need to use several API endpoints in order to gather and display all the essential information to the user.

## Plain-English Instructions

1. Create a GitHub repo called `WeatherDashboard` and clone to your computer.

2. Create an `index.html` at the root (top) level of the `WeatherDashboard` folder. This is the entry point of your application.

3. Don't forget to source the full version jQuery CDN. This will allow you to use AJAX functionality.

4. Create an `assets` folder inside of the `DailyPlanner` folder. The following folders and files should be found inside the `assets` folder:

   1. `CSS` folder with a `style.css` file.
   2. `JS` folder with `app.js` file.
   3. Other supplemental files (such as fonts, images, sounds, etc.) should be placed in their own folders within the `assets` folder.

5. Users should be able to see weather information based on their input.

   * City Name
   * Date
   * Icon representation
   * Temperature
   * Humidity
   * Wind Speed
   * UV Index (with color representation)  
   _Hint: Multiple API endpoints will be required._

6. Each searched city should be stored for easy reference.

7. The last searched city should be displayed when a user revisits the page.

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Submission Reminders

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

  * Use proper language and grammar; Do not use expletives. 

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

* The URL of your portfolio. Your portfolio should be updated to include your deployed application.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
