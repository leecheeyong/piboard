setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  if (hour > 12) {
    hour -= 12;
  }
  if (hour == 0) {
    hour = 12;
  }

  hour = hour < 10 ? "" + hour : hour;
  min = min < 10 ? "0" + min : min;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = min;
  defaultTimeZone();
}

function defaultTimeZone() {
  let time = new Date();
  let hour = time.getHours();

  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  document.getElementById("ampm").innerHTML = am_pm;
}

function updateWeather() {
  fetch("https://leecheeyong.vercel.app/bayanlepasweather")
    .then((res) => res.json())
    .then((bayanLepas) => {
      document.getElementById("weather-icon").src =
        "https://openweathermap.org/img/wn/" +
        bayanLepas?.weather[0]?.icon +
        "@2x.png";
      document.getElementById("weather-temp").textContent =
        `${Math.round(bayanLepas.main.temp)}°`;
      document.getElementById("weather-main").textContent =
        bayanLepas.weather[0].main;
      document.getElementById("weather-feels-like").textContent =
        `Feels like ${bayanLepas.main.feels_like}°C`;
      document.getElementById("weather-highest").textContent =
        `Highest ${bayanLepas.main.temp_max}°C`;
      document.getElementById("weather-pressure").textContent =
        bayanLepas.main.pressure;
      document.getElementById("weather-humidity").textContent =
        bayanLepas.main.humidity + "%";
      document.getElementById("weather-wind-speed").textContent =
        bayanLepas.wind.speed;
    });
}

updateWeather();
