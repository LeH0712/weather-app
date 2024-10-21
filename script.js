function showTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city-element");
  let temperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();

  let searchEntry = document.querySelector("#city-search");
  let city = searchEntry.value.trim().toLowerCase();

  let apiKey = "d0333349394fbbea5t3609f61c8982o3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function currentTime(date) {
  let currentDay = date.getDay();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[currentDay];
  return `${formattedDay} ${currentHours}:${currentMinutes}`;
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", searchCity);

let dateTime = document.querySelector("#time-now");
let now = new Date();

dateTime.innerHTML = currentTime(now);
