#!/usr/bin/env node

var fs = require('fs')
var util = require('util')
var esformatter = require('esformatter')
var convert = require('../src/cssobj-converter.js')
var minimist = require('minimist')
var path = require('path')

var args = minimist(process.argv.slice(2), {
  'boolean': [
    'pretty'
  ],
  'alias': {
    'p': 'pretty',
    'o': 'output',
    'f': 'format',
    'c': 'css'
  },
  'default': {
    pretty: true
  }
})

var file = args._.shift()
var format = args.format || file && path.extname(file).slice(1).toLowerCase()

try {
  var str = args.css || fs.readFileSync(file, 'utf8')
} catch(e) {
  console.log(fs.readFileSync(path.join(__dirname, 'usage.md'), 'utf8'))
  // console.error(e)
  process.exit(1)
}


var code = util.inspect(convert(str, format), {depth: null})

if (args.pretty) {
  code = esformatter.format('!' + code).slice(1)
}

if (args.output) {
  fs.writeFileSync(args.output, code+'\n', 'utf8')
} else {
  console.log(code)
}



