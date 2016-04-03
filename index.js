var xhr = require('xhr')
var example = require('./views/example.hbs')


xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) console.log(err) // do something
  JSON.parse(index.html)
  console.log()
  document.body.innerHTML = example({ name: "Space" });
})
