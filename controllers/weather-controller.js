var axios = require('axios');

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

//https://maps.googleapis.com/maps/api/geocode/json?address=[address]

function getWeather(req, res) {
  var address = req.query.address;
  console.log(address);

  // Third party API where I am injecting my user's info
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
  .then(function (response) {

    // Extracting LAT and LNG from the Google API's response object
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var key = process.env.API_KEY;

    // Chaining a request to Dark Sky API using LAT and LNG as params
    return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
    
  })
  .then(function (response) {
    console.log("DARK SKY RESPONSE");
    console.log(response.data);
    res.json(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

module.exports = { getWeather }