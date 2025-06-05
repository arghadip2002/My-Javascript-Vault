const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const errorBody = document.querySelector(".errorBody");

const apiKey = "b1cf70d080d03f3f6435b9bfdea31282";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    const weatherData = await getWeatherData(city);
    displayWeatherInfo(weatherData);
  } else {
    displayErrorMessage("Please Enter the City");
  }
});

async function getWeatherData(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      displayErrorMessage("Invalid City");
      throw new Error("Invalid City");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function displayWeatherInfo(data) {
  console.log(data);

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ id, main, description, icon }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  errorBody.textContent = "";
  errorBody.style.display = "none";

  const h1 = document.createElement("h1");
  h1.textContent = city;
  h1.classList.add("cityDisplay");
  card.appendChild(h1);

  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `🌡Temperature : ${(temp - 273.15).toFixed(2)} °C`;
  tempDisplay.classList.add("tempDisplay");
  card.appendChild(tempDisplay);

  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity : ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");
  card.appendChild(humidityDisplay);

  console.log(description);
  console.log(main);
  console.log(id);
  console.log(city);
  console.log(icon);

  getWeatherEmoji(icon);

  const descDisplay = document.createElement("p");
  descDisplay.textContent = description.toUpperCase();
  descDisplay.classList.add("descDisplay");
  card.appendChild(descDisplay);
}

function getWeatherEmoji(icon) {
  const iconDisplay = document.createElement("p");
  iconDisplay.textContent = icon;
  iconDisplay.classList.add("weatherEmoji");
  card.appendChild(iconDisplay);
}

function displayErrorMessage(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "none";

  errorBody.textContent = "";
  errorBody.style.display = "flex";
  errorBody.appendChild(errorDisplay);
}
