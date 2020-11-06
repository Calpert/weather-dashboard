/*
Make dashboard with form inputs
-input city
Take weather info from input field
-City name
-Date
-Icon
-Temp
-Humidity
-Windspeed
-Uv Index
When user clicks on UV index
-turn color that indicates weather severity
-future weather 5-day forcast
Click on city in search history
-presented with past and future
When opened presented with last search city
*/
//This is our API key
// var APIKey = "6dda318d813c701c5214af7008878c77";

// // Here we are building the URL we need to query the database
// // Here we run our AJAX call to the OpenWeatherMap API
//    $.ajax({
//      url: queryURL,
//      method: "GET"
//    }).then(function(response)

// // We store all of the retrieved data inside of an object called "response"
//    .then(function(response) {

//    }


$(document).ready(function() {
    console.log("page was loaded")
    $("#search-weather").on("click", function(e){
        e.preventDefault()
        var searchInput= $("#weather-input").val()
        console.log(searchInput)
        console.log("button was clicked")
        searchWeather(searchInput)
    })
    function searchWeather(city) {
        var queryURL = "https://openweathermap.org/api" + city + "&y=&plot=short&apikey=6dda318d813c701c5214af7008878c77";

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            console.log(response)
            //Look at response and see how to look at the JSON object that you get returned
            //ex: response.temp if that's what the object comes back as
            //JSON beautifier (google)
            //Call function for forcast and function for UV index

        })
        //Define functions outside of searchWeather function
        //Look at API website (ex longitude and latitude)
        //append things to the website
        //dynamically create the card then append response items to the card then append card to the page
        //three ajax (days weather, UV index, five-day forecast)

    }

})