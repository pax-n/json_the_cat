//const args = process.argv.slice(2);
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request (`https://api.thecatapi.com/v1/breeds/search?q=${breedName[0]}`, (error, response, body) => {

    let data = JSON.parse(body);

    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(`Server response: ${response.statusCode}`, null)
    }
    
    if (data[0] === undefined) {
      console.log("Breed not found");
    } else {
      return callback(null, data[0].description)
    }  
  })
};
  
module.exports = { fetchBreedDescription };
