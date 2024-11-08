setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = min;
}

setInterval(updateWeather, 10000);

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
  document.getElementById("spotify").src =
    "https://spotify-github-profile.kittinanx.com/api/view?uid=31zjckvsv7dmthfeq5aij7dvaxpm&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false&timestamp=" +
    new Date().getTime();
  fetch("https://leecheeyong.vercel.app/quote")
    .then((r) => r.json())
    .then((q) => {
      document.getElementById("quote").textContent =
        `"${q.content}"`;
    });
}

updateWeather();
