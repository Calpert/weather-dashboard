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


$(document).ready(function () {
    console.log("page was loaded")
    $("#search-weather").on("click", function (e) {
        e.preventDefault()
        var searchInput = $("#weather4").val()
        console.log(searchInput)
        console.log("button was clicked")
        searchWeather(searchInput)
        displayForecast(searchInput)
    })
    function searchWeather(city) {
        console.log(city)
        var api = "b0f7f7e94d3f5e9983a12176da905fce"
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api + "&units=imperial"
       

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response)
            //Look at response and see how to look at the JSON object that you get returned
            var getTemp = response.main.temp.toFixed(0)
            tempEl = $('<p>').text('temperature: ' + getTemp + "°F")
            //display humidity
            var getHumid = response.main.humidity
            humidEl = $('<p>').text('humidity: ' + getHumid + "%")
            //display windspeed
            var getWind = response.wind.speed.toFixed(0)
            windEl = $('<p>').text('wind: ' + getWind + "mph")
            //display image
            var image = response.weather[0].icon
            var imageURL = "http://openweathermap.org/img/w/" + image + ".png";
            var imgEl = $("<img>").attr("src", imageURL)
            $("#weather-input").append(imgEl);
            //appending elements to page
            $("#weather-input").append(tempEl);
            $("#weather-input").append(humidEl);
            $("#weather-input").append(windEl);
            //display UV index
            queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=b0f7f7e94d3f5e9983a12176da905fce"
            $.ajax({
                url: queryURL,
                method: "GET",

            }).then(function (indexResponse) {
                uvEl = $('<p>').text('uv-index: ' + indexResponse.value)
            })


        })
    }
        function displayForecast(city) {
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=6dda318d813c701c5214af7008878c77";
            response = $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (forecastResponse) {
                var days = forecastResponse.list
                for (let i = 0; i < days.length; i++) {
                    if (days[i].dt_txt.includes("00:00:00")) {
                        console.log(days[i].main)
                        //create our card
                        var col=$("<div>").addClass("col-md-2")
                        var card=$("<div>").addClass("card")
                        var cardBody=$("<div>").addClass("card-body")
                        var date=$("<h6>").addClass("card-title").text(days[i].dt_txt.slice(5,10))
                        var temp=$("<p>").text("temp" + days[i].main.temp)
                        var humidity=$("<p>").text("humidity" + days[i].main.humidity)


                        //append to forecast
                        $("#forecast").append(col.append(card.append(cardBody.append(date, temp, humidity))));
                    }

                }




            })
        }
        })
