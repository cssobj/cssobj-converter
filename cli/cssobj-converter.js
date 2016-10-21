#!/usr/bin/env node

var fs = require('fs')
var util = require('util')
var esformatter = require('esformatter')
var convert = require('../src/cssobj-converter.js')
var minimist = require('minimist')
var path = require('path')
var dive = require('dive')
var watch = require('node-watch')
var pkg = require('../package.json')

var argv = process.argv.slice(2)
var args = minimist(argv, {
  'boolean': [
    'pretty',
    'watch',
    'keepVendor',
    'recursive'
  ],
  'alias': {
    'v': 'version',
    'h': 'help',
    'p': 'pretty',
    'o': 'output',
    'f': 'format',
    'k': 'keepVendor',
    'c': 'css',
    'w': 'watch',
    'r': 'recursive'
  },
  'default': {
    pretty: true,
    watch: false,
    keepVendor: false,
    recursive: false
  }
})

if(args.help || argv.length==0) {
  console.log(fs.readFileSync(path.join(__dirname, 'usage.md'), 'utf8'))
  process.exit(0)
}

if(args.version) {
  console.log(pkg.version)
  process.exit(0)
}

var isDir = false
var source = args._.shift()

var format = args.format
var str = args.css

if (str) {
  output(convertFile(null, str, format))
} else if (source) {
  try {
    var sourceStat = fs.lstatSync(source)
    isDir = sourceStat.isDirectory()
  }catch(e) {
    console.log('invalid file/folder')
    process.exit(1)
  }
  if (isDir) {
    dive(source, {recursive: args.recursive, files: true, directories: false}, function (err, file, stat) {
      processFile(file)
    })
  } else {
    directFile()
  }

  if(args.watch) {
    // if(!dir) console.log('--watch must used with --dir'), process.exit(0)
    watch(source, {recursive: args.recursive}, function(file) {
      console.log(file, 'changed')
      isDir ? processFile(file) : directFile()
    })
    console.log('watching', source)
  }
}

function directFile() {
  var code = convertFile(source, str, format || source && path.extname(source).slice(1).toLowerCase())
  output(code)
}

function processFile(file) {
  var match = file.match(/\.(css|less)$/i)
  if(!match) return
  var format = match.pop().toLowerCase()
  fs.readFile(file, function (err, str) {
    if(err) {
      console.log(err)
      return
    }
    var code = convertFile(null, str, format)
    fs.writeFileSync(file + '.js', code+'\n', 'utf8')
  })
}

function output(code) {
  if (args.output) {
    fs.writeFileSync(args.output, code+'\n', 'utf8')
  } else {
    console.log(code)
  }
}

function convertFile(file, str, format) {
  if(!str && file) {
    try {
      str = fs.readFileSync(file, 'utf8')
    } catch(e) {
      console.error(e)
      process.exit(1)
    }
  }

  var code = util.inspect(convert(str, format, {keepVendor: args.keepVendor}), {depth: null})

  if (args.pretty) {
    try{
      code = esformatter.format('!' + code).slice(1)
    }catch(e){}
  }

  return code
}
