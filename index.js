//console app to get the adress of a particular place
var request = require('request')
var inquirer = require('inquirer')
inquirer.prompt([{
  type: 'input',
  name: 'location',
  message: 'Where are you searching for(eg eiffel tower or big ben)?  '
} ]).then(function (input) {
  var loc = input.location.split(/\s+/).join('+')
  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + loc + '&sensor=false'

  request(link, function (error, response, body) {
    body = JSON.parse(body)
    if (error) {
      return console.log(error)
    } else if (body.results.length === 0) {
      console.log('place not found')
    } else {
      console.log("The address is: "+ body.results[0].formatted_address)
    }
  })
})