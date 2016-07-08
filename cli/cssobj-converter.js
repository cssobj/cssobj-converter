#!/usr/bin/env node

var fs = require('fs')
var util = require('util')
var esformatter = require('esformatter')
var convert = require('../src/cssobj-converter.js')
var minimist = require('minimist')

var args = minimist(process.argv.slice(2), {
  'boolean':[
    'pretty'
  ],
  'alias':{
    'p': 'pretty',
    'o': 'output'
  }
})

var file = args._.shift()

try{
  var str = fs.readFileSync(file,'utf8')
}catch(e){
  console.log(e)
  process.exit(1)
}

var code = util.inspect(convert(str), {depth:null})

if(args.pretty) code = esformatter.format('!'+code).slice(1)

if(args.output){
  fs.writeFileSync(args.output, code, 'utf8')
} else {
  console.log(code)
}



