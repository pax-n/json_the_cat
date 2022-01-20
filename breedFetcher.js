//const args = process.argv.slice(2)
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {

    let data = JSON.parse(body);
    //onsole.log (data)
    if (error) {
      //console.log(error)
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(`Server response: ${response.statusCode}`, null)
    };

    const breed = data[0]
    if (breed) {
      return callback(null, data[0].description)
    } else {
      return callback("Breed not found", null);
    }; 
  })
};
  
module.exports = { fetchBreedDescription };
