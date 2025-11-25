let input = document.getElementById("city");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let errorMsg = document.getElementById("error");

let apiKey = "YOUR_API_KEY";

btn.addEventListener("click", async () => {
    let cityName = input.value.trim();

    if (cityName === "") {
        errorMsg.innerText = "Please enter a city name!";
        result.innerText = "";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);

        // BONUS: Handle invalid city
        if (!response.ok) {
            throw new Error("City not found!");
        }

        let data = await response.json();

        let temp = data.main.temp;
        let humidity = data.main.humidity;
        let condition = data.weather[0].description;

        result.innerText =
            `Temperature: ${temp}°C\nHumidity: ${humidity}%\nCondition: ${condition}`;

        errorMsg.innerText = "";
    }
    catch (err) {
        errorMsg.innerText = "Error: " + err.message;
        result.innerText = "";
    }
});
