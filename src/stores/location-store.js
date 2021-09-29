import { writable } from "svelte/store";

export const city = writable("Loading...");
export const fetchCity = async (lat, lon) => {
    if(lat && lon) {
        const apikey = import.meta.env.VITE_GOOGLE_API_KEY;
        const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=${apikey}`
        const res = await fetch(url);
        const data = await res.json();
        city.set(`${data.results[0].address_components[3].long_name}, ${data.results[0].address_components[5].long_name}`);
    }
}