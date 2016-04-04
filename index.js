var xhr = require('xhr')
var example = require('./views/example.hbs')


xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
console.log("hello")
  if (err) {throw err} // do something
    console.log('all data: ',data)
    console.log('just body: ', data.body)
    var data2 = JSON.parse(data.body)
    console.log('data2',data2)
    console.log('data2 0',data2[0])


//  document.body.innerHTML = example(receivedData);
})
