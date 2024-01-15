const baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const apiKey = "3bf819164ec42d752ff3f10120cb9e6b";
const metric = "&units=metric";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".image img");

const checkWhether = async (city) => {
  let url = `${baseUrl}${city}${"&appid="}${apiKey}${metric}`;
  const response = await fetch(url);
  if (response.status > 200) {
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity1").innerHTML = data.main.humidity + " %";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      wheatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wheatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      wheatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wheatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      wheatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      wheatherIcon.src = "images/rain.png";
    }

    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWhether(searchBox.value);
});
