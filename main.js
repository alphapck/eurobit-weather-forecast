// Load city list from CSV
fetch('city_coordinates.csv')
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split("\n").slice(1); // skip header
    const citySelect = document.getElementById('city');
    lines.forEach(line => {
      const [lat, lon, city, country] = line.split(",");
      if (lat && lon && city) {
        const option = document.createElement('option');
        option.value = `${lat},${lon}`;
        option.textContent = `${city}, ${country}`;
        citySelect.appendChild(option);
      }
    });
  });

// Get Forecast button click
document.getElementById('getForecast').addEventListener('click', () => {
  const citySelect = document.getElementById('city');
  if (!citySelect.value) return;
  const [lat, lon] = citySelect.value.split(",");
  getWeather(lat, lon);
});

// Fetch weather data
function getWeather(lat, lon) {
  const url = `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById('forecast').innerHTML =
        "<p>Unable to fetch forecast. Try again.</p>";
    });
}

// Map weather keywords to icons (use your own local icons if needed)
function getWeatherIcon(weather) {
  return `https://www.7timer.info/img/misc/${weather}.png`;
}

// Convert API fields to readable weather
function interpretWeather(item, date) {
  let baseWeather = "";
  if (item.prec_type === "snow") {
    baseWeather = "snow";
  } else if (item.prec_type === "rain") {
    baseWeather = "rain";
  } else {
    if (item.cloudcover <= 3) baseWeather = "clear";
    else if (item.cloudcover <= 6) baseWeather = "pcloudy";
    else if (item.cloudcover <= 8) baseWeather = "mcloudy";
    else baseWeather = "cloudy";
  }

  // Day/night variation
  const hour = date.getHours();
  if (baseWeather === "snow" || baseWeather === "rain") {
    return baseWeather;
  } else {
    return hour >= 6 && hour < 18
      ? `${baseWeather}day`
      : `${baseWeather}night`;
  }
}

// Display weather forecast
function displayWeather(data) {
  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = "";
  if (!data.dataseries) {
    forecastDiv.innerHTML = "<p>No forecast data available.</p>";
    return;
  }

  data.dataseries.slice(0, 7).forEach(item => {
    const date = new Date();
    date.setHours(date.getHours() + item.timepoint);

    const weather = interpretWeather(item, date);
    const temp = item.temp2m; // °C
    const wind = item.wind10m.speed; // m/s

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${date.toDateString()}</h3>
      <img src="${getWeatherIcon(weather)}" alt="${weather}" />
      <p>${weather.toUpperCase()}</p>
      <p>Temp: ${temp}°C</p>
      <p>Wind: ${wind} m/s</p>
    `;
    forecastDiv.appendChild(card);
  });
}
