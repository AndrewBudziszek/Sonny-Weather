import { writable } from "svelte/store";

export const weather = writable([]);

export const fetchWeather = async (lat, lon) => {
    if(lat && lon) {
        // const apikey = import.meta.env.VITE_OPENWEAHTER_API_KEY
        const apikey = import.meta.env.VITE_OPENWEAHTER_API_KEY_ALT; //ALT
        const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const res = await fetch(url);
        const data = await res.json();
        weather.set(data);
    }
}