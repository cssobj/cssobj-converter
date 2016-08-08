var expect = require('chai').expect
var convert = require('../src/cssobj-converter.js')
var spawn = require('child_process').spawn
var path = require('path')
var fs = require('fs')

function formatResult (str) {
  return str.replace(/\n/g, '\\n').replace(/\s+$/, '[ ]')
}

function testCli(testFile, option, targetFile, done) {
  var cli = 'cli/cssobj-converter.js'
  // var format = path.extname(testFile).slice(1).toLowerCase()
  var cliProcess = spawn('node', [cli].concat(option).concat([testFile]))
  var srcFile = option[0]=='-o' && option[1]

  var output = '', msg=''
  cliProcess.stdout.on('data', function(data) {
    output += data
  })
  cliProcess.stderr.on('data', function(data) {
    msg += data
  })
  cliProcess.on('exit', function() {
    if(msg) return done(msg)


    if(srcFile){
      if(output) return done('should have empty output, but the output is:\n'+ output)
      try {
        output = fs.readFileSync(srcFile, 'utf8')
      } catch(e) {
        return done(e)
      }
      if(srcFile) fs.unlinkSync(srcFile)
    }

    try {
      var target = fs.readFileSync(targetFile, 'utf8')
    } catch(e) {
      return done(e)
    }

    var result = '', line=0

    expect(output).equal(target)

    done(result)

  })
}

describe('Test cli converter', function () {
  this.slow(3000)
  this.timeout(5000)

  it('with pretty false', function (done) {
    testCli('test/cli/test.css', ['-p', false], 'test/cli/test.js', done)
  })

  it('with pretty true', function (done) {
    testCli('test/cli/test.css', ['-p', true], 'test/cli/test-pretty.js', done)
  })

  it('with output file', function(done) {
    testCli('test/cli/test.css', ['-o', 'cli-temp.js'], 'test/cli/test-pretty.js', done)
  })

  it('format less no -f', function(done) {
    // without -f option
    testCli('test/cli/test.less', [], 'test/cli/test-less.js', done)

  })

  it('format less with -f', function(done) {
    // with explicitly -f less option
    testCli('test/cli/test.less', ['-f', 'less'], 'test/cli/test-less.js', done)

  })

  it('format with -c', function(done) {
    // with explicitly -f less option
    testCli('', ['-c', 'p{color: red;}'], 'test/cli/command-line.css', done)

  })

  it('with output file and no pretty', function(done) {
    testCli('test/cli/test.css', ['-o', 'cli-temp.js', '-p', false], 'test/cli/test.js', done)
  })

})
