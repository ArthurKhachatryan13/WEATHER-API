async function getWeather() {
    try{
        let cityInput = document.getElementById('city-input').value;
        cityInput = cityInput ? cityInput : 'yerevan';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=88079e32942a9c77d117f0afce7e60cf`;
        const response = await fetch(url);
        const { name, main, weather } = await response.json();
        console.log(weather);
        console.log(main);
        document.getElementById('weather-data').innerHTML = `<h1 class="city">${name}</h1><h2>Cloudy is ${weather[0].description} and Humidity is ${main.humidity}</h2>`;

    } catch(error) {
        alert('Your add incorrect city name. Please try again with correct one.')
        document.getElementById('city-input').value = '';
        console.log(error)
    }
}

// button.addEventListener("click", getWeather());