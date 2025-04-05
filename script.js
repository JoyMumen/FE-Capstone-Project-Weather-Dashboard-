const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key
const city = "Athens"; // You can change this to fetch data for a different city

async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Use metric units for Celsius

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather data fetched:", data);
    // You can now call other functions here to update the UI with this data
    updateWeatherUI(data); // We'll create this function in the next step
  } catch (error) {
    console.error("Could not fetch weather data:", error);
    // Optionally, display an error message in the UI
  }
}

// Call the function to fetch weather data when the script loads
fetchWeatherData(city);

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayOfWeek = days[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];

  const dateString = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  const timeElement = document.getElementById("current-time");
  const dateElement = document.getElementById("current-date");

  if (timeElement) {
    timeElement.textContent = timeString;
  }

  if (dateElement) {
    dateElement.textContent = dateString;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateWeatherUI(data) {
  // This function will be responsible for updating the HTML elements
  // with the fetched weather data. We'll implement this in the next step.
  const temperatureElement = document.querySelector(
    ".weather-card.athens-card .time"
  ); // Using the time element for now as a placeholder
  if (temperatureElement && data.main && data.main.temp) {
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
  }

  const cityElement = document.querySelector(".weather-card.athens-card .city");
  if (cityElement && data.name) {
    cityElement.textContent = data.name;
  }

  // You'll add more code here to update other elements based on the 'data' object
  // For example, to update the weather condition:
  // const conditionElement = document.querySelector(".weather-condition");
  // if (conditionElement && data.weather && data.weather[0] && data.weather[0].description) {
  //     conditionElement.textContent = data.weather[0].description;
  // }
}
