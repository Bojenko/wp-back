const getJSONcurrentWeather = async (q) => {
    const base_url = `${process.env.API_URL}/current.json?`;
    const geolocation = q;
    
    let fetchURL = base_url + 
    `key=${process.env.WKEY}&q=${geolocation}&aqi=yes`;
    try {
      const res = await fetch(fetchURL);
      const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);
      let cw = 'Its string';
      const currentWeather = await res.json();
      //console.log(currentWeather);
      return currentWeather
    } catch (err) {
      console.log('Error:',err.message); //can be console.error
      return err.message.toString();
    }
  };
  
  const getJSONforecast = async (q,days) => {
    const base_url = `${process.env.API_URL}/forecast.json?`;
    const geolocation = q;
    
    let fetchURL = base_url + 
    `key=${process.env.WKEY}&q=${geolocation}&aqi=yes&days=${days}`;
    try {
      const res = await fetch(fetchURL);
      const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
      console.log('Status Code:', res.status);
      console.log('Date in Response header:', headerDate);
      let cw = 'Its string';
      const forecast = await res.json();
      //console.log(currentWeather);
      return forecast
    } catch (err) {
      console.log('Error:',err.message); //can be console.error
      return err.message.toString();
    }
  };


  module.exports = {
    getJSONcurrentWeather,
    getJSONforecast
  }