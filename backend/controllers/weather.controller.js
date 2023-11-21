const weather = require('../services/weather')

exports.getWeather = async (req, res) => {
    const location = req.params['location'];
    const weatherData = await weather.getWeather(location);
    
    return res.status(200).json(weatherData);
}