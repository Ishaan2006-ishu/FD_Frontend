async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "YOUR_API_KEY"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Clear previous messages
  document.getElementById("error").innerText = "";
  document.getElementById("temp").innerText = "";
  document.getElementById("humidity").innerText = "";
  document.getElementById("condition").innerText = "";

  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();

    document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;

  } catch (error) {
    document.getElementById("error").innerText = "Invalid city name. Please try again!";
    console.error(error);
  }
}

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);
