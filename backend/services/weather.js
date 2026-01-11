const axios = require('axios');

const apiKey = "86c8170248ac797e69c8c5c8d5fd5130";

const getLatLon = async (location) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=10&appid=${apiKey}`;
    const locations = await axios.get(url);

    if (locations.data.length == 0) {
        return [];
    } else {
        return locations.data.filter((x) => x.country === 'US');
    }
}

const getWeatherData = async (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const weatherData = await axios.get(url);

    return weatherData.data.list.slice(0, 3);
}

exports.getWeather = async (location) => {
    const locations = await getLatLon(location);

    const promises = locations.map(async (x) => {
        const weatherData = await getWeatherData(x.lat, x.lon);

        return { weatherData, ...x }
    });

    const data = await Promise.all(promises)

    return data;
}