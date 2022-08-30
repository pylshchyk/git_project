let currentDate = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days[currentDate.getDay()];
let currentDayDisplay = document.querySelector("#current-day");
currentDayDisplay.innerHTML = currentDay;

let currentHour = currentDate.getHours();
let currentHourDisplay = document.querySelector("#current-hour");
currentHourDisplay.innerHTML = currentHour;

let currentMinutes = currentDate.getMinutes();
let currentMinutesDisplay = document.querySelector("#current-minutes");
if (currentMinutes < 10) {
  currentMinutesDisplay.innerHTML = `0${currentMinutes}`;
} else {
  currentMinutesDisplay.innerHTML = currentMinutes;
}
// end of the time block

function displayCityWeather(response) {
  //searched city info block
  let currentCityTemp = Math.round(response.data.main.temp);
  let currentCityTempDisplay = document.querySelector("#current-temperature");
  currentCityTempDisplay.innerHTML = currentCityTemp;

  let currentCityFeelsLike = Math.round(response.data.main.feels_like);
  let currentCityFeelsLikeDisplay = document.querySelector("#feels-like");
  currentCityFeelsLikeDisplay.innerHTML = `${currentCityFeelsLike} °C`;

  let currentCityHum = response.data.main.humidity;
  let currentCityHumDisplay = document.querySelector("#humidity");
  currentCityHumDisplay.innerHTML = currentCityHum;

  let currentCityWind = Math.round(response.data.wind.speed);
  let currentCityWindDisplay = document.querySelector("#wind-speed");
  currentCityWindDisplay.innerHTML = currentCityWind;

  let currentCityPressure = response.data.main.pressure;
  let currentCityPressureDisplay = document.querySelector("#pressure");
  currentCityPressureDisplay.innerHTML = currentCityPressure;

  let currentCityState = response.data.weather[0].main;
  let currentCityStateDisplay = document.querySelector("#current-state");
  currentCityStateDisplay.innerHTML = currentCityState;
  //end of the searched city info block

  //change block
  function changeToFahrenheit() {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = Math.round(currentCityTemp * 1.8 + 32);
    currentCityFeelsLikeDisplay.innerHTML = `${Math.round(
      currentCityFeelsLike * 1.8 + 32
    )} °F`;
  }
  let fahrenheitChange = document.querySelector("#fahrenheit");
  fahrenheitChange.addEventListener("click", changeToFahrenheit);
  // end of change to Fahrenheit block

  function changeToCelsius() {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = currentCityTemp;
    currentCityFeelsLikeDisplay.innerHTML = `${currentCityFeelsLike} °C`;
  }
  let celsiusChange = document.querySelector("#celsius");
  celsiusChange.addEventListener("click", changeToCelsius);
  // end of change block
}

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-engine");
  let searchedCity = searchInput.value;
  let searchedCityDisplay = document.querySelector("#current-city");
  searchedCityDisplay.innerHTML = searchedCity;

  let apiKey = "d0eed7ffdd3d238cb719b960f1d2635b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&&units=metric`;

  axios.get(apiUrl).then(displayCityWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", displayCity);
// end of the city block

//default block
let apiKey = "d0eed7ffdd3d238cb719b960f1d2635b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&&units=metric`;

function showDefault(response) {
  //default info block
  let currentTempDefault = Math.round(response.data.main.temp);
  let currentTempDefaultDisplay = document.querySelector(
    "#current-temperature"
  );
  currentTempDefaultDisplay.innerHTML = currentTempDefault;

  let currentFeelsLikeDefault = Math.round(response.data.main.feels_like);
  let currentFeelsLikeDefaultDisplay = document.querySelector("#feels-like");
  currentFeelsLikeDefaultDisplay.innerHTML = `${currentFeelsLikeDefault} °C`;

  let currentHumDefault = response.data.main.humidity;
  let currentHumDefaultDisplay = document.querySelector("#humidity");
  currentHumDefaultDisplay.innerHTML = currentHumDefault;

  let currentPressureDefault = response.data.main.pressure;
  let currentPressureDefaultDisplay = document.querySelector("#pressure");
  currentPressureDefaultDisplay.innerHTML = currentPressureDefault;

  let currentWindDefault = Math.round(response.data.wind.speed);
  let currentWindDefaultDisplay = document.querySelector("#wind-speed");
  currentWindDefaultDisplay.innerHTML = currentWindDefault;

  let currentStateDefault = response.data.weather[0].main;
  let currentStateDefaultDisplay = document.querySelector("#current-state");
  currentStateDefaultDisplay.innerHTML = currentStateDefault;
  //end of the default info block

  //change.default block
  function changeToFahrenheit() {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = Math.round(currentTempDefault * 1.8 + 32);
    currentFeelsLikeDefaultDisplay.innerHTML = `${Math.round(
      currentTempDefault * 1.8 + 32
    )} °F`;
  }
  let fahrenheitChange = document.querySelector("#fahrenheit");
  fahrenheitChange.addEventListener("click", changeToFahrenheit);
  // change to Fahrenheit block

  function changeToCelsius() {
    let currentTemperature = document.querySelector("#current-temperature");
    currentTemperature.innerHTML = currentTempDefault;
    currentFeelsLikeDefaultDisplay.innerHTML = `${currentFeelsLikeDefault} °C`;
  }
  let celsiusChange = document.querySelector("#celsius");
  celsiusChange.addEventListener("click", changeToCelsius);
  //edn of the change.default block
}

function changeToFahrenheit() {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `75`;
}
let fahrenheitChange = document.querySelector("#fahrenheit");
fahrenheitChange.addEventListener("click", changeToFahrenheit);
// change to Fahrenheit block

function changeToCelsius() {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `24`;
}
let celsiusChange = document.querySelector("#celsius");
celsiusChange.addEventListener("click", changeToCelsius);

axios.get(apiUrl).then(showDefault);
// end of the default block

//current location block
function showGeolocationWeather(event) {
  function logPosition(position) {
    let currentLat = position.coords.latitude;
    let currentLon = position.coords.longitude;

    let apiKey = "d0eed7ffdd3d238cb719b960f1d2635b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${apiKey}&&units=metric`;

    function displayGeolocationWeather(response) {
      let locationName = response.data.name;
      let locationNameDisplay = document.querySelector("#current-city");
      locationNameDisplay.innerHTML = locationName;

      let locationTemp = Math.round(response.data.main.temp);
      let locationTempDisplay = document.querySelector("#current-temperature");
      locationTempDisplay.innerHTML = locationTemp;

      let locationFeelsLike = Math.round(response.data.main.feels_like);
      let locationFeelsLikeDisplay = document.querySelector("#feels-like");
      locationFeelsLikeDisplay.innerHTML = `${locationFeelsLike} °C`;

      let locationHum = response.data.main.humidity;
      let locationHumDisplay = document.querySelector("#humidity");
      locationHumDisplay.innerHTML = locationHum;

      let locationWind = Math.round(response.data.wind.speed);
      let locationWindDisplay = document.querySelector("#wind-speed");
      locationWindDisplay.innerHTML = locationWind;

      let locationPressure = response.data.main.pressure;
      let locationPressureDisplay = document.querySelector("#pressure");
      locationPressureDisplay.innerHTML = locationPressure;

      //change button block
      function changeToFahrenheit() {
        locationTempDisplay.innerHTML = Math.round(locationTemp * 1.8 + 32);
        locationFeelsLikeDisplay.innerHTML = `${Math.round(
          locationFeelsLike * 1.8 + 32
        )} °F`;
      }
      let fahrenheitChange = document.querySelector("#fahrenheit");
      fahrenheitChange.addEventListener("click", changeToFahrenheit);
      // change to Fahrenheit block

      function changeToCelsius() {
        locationTempDisplay.innerHTML = locationTemp;
        locationFeelsLikeDisplay.innerHTML = `${locationTemp} °C`;
      }
      let celsiusChange = document.querySelector("#celsius");
      celsiusChange.addEventListener("click", changeToCelsius);
      //end of the change button block
    }

    axios.get(apiUrl).then(displayGeolocationWeather);
  }
  navigator.geolocation.getCurrentPosition(logPosition);
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", showGeolocationWeather);
//end of the current location block
