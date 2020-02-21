document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=bb6a840e165f96c36af5cdece6273c23";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      // console.log to show what is in the json
      console.log(json);

      let results = "";


      results += '<div class="bg-gold verticalCenter">';
      //

      // WEATHER IN
      results += '<div class="horizontalCenter"><h2>Current Weather in<br>' + json.name + "</h2>";
      // DESCRIPTION
      results += "<h4> Description: "
      for (let i = 0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += "</h4></div>";


      results += '<div class="horizontalCenter circle">';
      // WEATHER ICON
      for (let i = 0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      // TEMPRETURE
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += '</div>';

      //
      results += '</div>';
      document.getElementById("weatherResults").innerHTML = results;


      // const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=APIKEY";
      // fetch(url2)
      //   .then(function(response) {
      //     return response.json();
      //   }).then(function(json) {
      //     let forecast = "";
      //     for (let i = 0; i < json.list.length; i++) {
      //       forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
      //       forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
      //       forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
      //     }
      //     document.getElementById("forecastResults").innerHTML = forecast;
      //   });


      const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=bb6a840e165f96c36af5cdece6273c23";
      fetch(url2)
        .then(function(response) {
          return response.json();
        }).then(function(json) {

          // console.log to show what is in the json
          console.log(json);


          let forecast = '<div class="horizontalCenter verticalCenter weatherForecastBox"><h2>5-day/3-hour WEATHER FORCAST <br></h2></div>';


          for (let i = 0; i < json.list.length; i++) {
            //FORECAST
            forecast += '<div class="bg-green verticalCenter horizontalCenter">';

            forecast += '<div class="horizontalCenter">';
            forecast += '<h2>' + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm a') + "</h2>";
            forecast += "</div>";

            forecast += '<div class="horizontalCenter circle">';
            forecast += '<h2>' + json.list[i].main.temp + "</h2>";

            forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
            forecast += "</div>";

            forecast += "</div>";
            //
          }

          document.getElementById("forecastResults").innerHTML = forecast;
        });
    });
});


// APIKEY:
// bb6a840e165f96c36af5cdece6273c23
