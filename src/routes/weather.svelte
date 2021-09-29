<script>
    import {fetchWeather, weather} from '../stores/weather-store';
    import {fetchCity, city} from '../stores/location-store';
    import MiniWeatherCard from './mini-weather-card.svelte';

    import Geolocation from "svelte-geolocation";
    import { afterUpdate } from 'svelte';

    let coords = [];
    let attemptedToGetWeather = false;
    
    afterUpdate(() => {
        if(coords[1] && !attemptedToGetWeather) {
            fetchWeather(coords[1], coords[0]);
            fetchCity(coords[1], coords[0]);
            attemptedToGetWeather = true;
        }
    })
    
</script>

<Geolocation getPosition bind:coords />
<div class="content-center uppercase">
    <h1 class="text-2xl text-center my-4 uppercase text-white">{$city}</h1>
    <div class="grid gap-4 md:grid-cols-7 grid-cols-1">
        {#if $weather.daily}
            {#each $weather.daily.slice(0,7) as weatherData}
                <MiniWeatherCard weatherData={weatherData}/>
            {/each}
        {/if}
    </div>
</div>
    
