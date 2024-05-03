const {getJSONcurrentWeather, getJSONforecast} = require('./weather_api_requests')

const getWeather = async (req, res) => {
    const {geo} = req.body;
    const current = await getJSONcurrentWeather(geo);
    const forecast = await getJSONforecast(geo,7)

    return res.send({current:current, forecast:forecast});
  }
module.exports = {
    getWeather
}