import axios from 'axios';

const API_KEY = 'b7465c958274835886bef0b18f2fdf87';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    let request = axios.get(url);

    // Redux-promise will stop this action, allow the promise to finish, and provide us with an unwrapped value in the form of a new action
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}