const searchInput = document.querySelector(".search-input");
const cityName = document.querySelector(".city-name");
const weatherStatus = document.querySelector(".weather-status");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunset = document.querySelector(".sunset");
const sunrise = document.querySelector(".sunrise");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");


searchInput.addEventListener("change",(e)=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=2e5d4d165e38b4c070bab5cd91030be6&units=metric&lang=ja`)
    .then(async res => {
        const data = await res.json();
        console.log('[Search Input]',data);
        cityName.innerHTML = data.name || "--";
        weatherStatus.innerHTML = data.weather[0].description || "--";
        weatherIcon.setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || "--";

        sunset.innerHTML = moment.unix(data.sys.sunset).format("H:mm") || "--";
        sunrise.innerHTML = moment.unix(data.sys.sunrise).format("H:mm") || "--";
        humidity.innerHTML = data.main.humidity || "--";
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || "--"; 
    })
})