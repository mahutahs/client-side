var xhr = require('xhr')
var example = require('./views/example.hbs')


xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) {throw err} // do something
    console.log('all data: ',data)
    console.log('just body: ', data.body)
var receivedData = JSON.parse(data.body)
//console.log(data.body)

  console.log(receivedData)

//  document.body.innerHTML = example(receivedData);
})
