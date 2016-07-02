var convert = require('../src/cssobj-converter.js')
var http = require('http')

var port = 8080
var server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'})
  if (req.method == 'POST') {
    var bodyString = ''
    req.on('data', function (data) {
      bodyString += data
    })

    req.on('end', function () {
      try{
        var json = JSON.parse(bodyString || '')
        console.log(json)
        var result = convert(json.text)
      } catch(e){
        return res.end('')
      }
      res.end( JSON.stringify(result) )
    })
  }
}).listen(port, e=>console.log('Listen on ', port))
