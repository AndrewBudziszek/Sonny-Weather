<script>
    export let weatherData;
    let tempInFahrenheit = Math.round(weatherData.temp.max * 9/5 - 459.67);
    let date = new Date(weatherData.dt * 1000);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = daysOfWeek[date.getDay()];
</script>

<div class='p-6 bg-gray-600 text-center text-white rounded-md shadow-sm hover:shadow-md flex flex-col items-center'>
    <h1 class='text-lg font-bold'>
        {day}
    </h1>
    <p>{tempInFahrenheit}°F</p>
    <p>{weatherData.weather[0].description}</p>
    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
</div>
