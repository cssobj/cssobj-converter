var expect = require('chai').expect
var convert = require('../src/cssobj-converter.js')
var spawn = require('child_process').spawn
var exec = require('child_process').exec
var path = require('path')
var fs = require('fs')

var cli = 'cli/cssobj-converter.js'

function formatResult (str) {
  return str.replace(/\n/g, '\\n').replace(/\s+$/, '[ ]')
}

function strToObj(str) {
  var moduleRe = /^\s*(module\.exports\s*=|exports\s*=|export\s+default\s*)/i
  if(moduleRe.test(str)) {
    str = str.replace(moduleRe, '')
  }
  return new Function('return ' + str)()
}

function testCli(source, option, target, done) {
  var fileRe = /^file::/
  var folderRe = /^folder::/
  // var format = path.extname(testFile).slice(1).toLowerCase()
  var cliProcess = spawn('node', [cli].concat(option).concat([source]))
  var srcFile = option[0]=='-o' && option[1]
  var isJS = option[0]=='-f' && option[1] == 'js'

  var output = '', msg=''
  cliProcess.stdout.on('data', function(data) {
    output += data
  })
  cliProcess.stderr.on('data', function(data) {
    msg += data
  })
  cliProcess.on('exit', function() {
    if(msg) return done(msg)

    if(srcFile) {
      if(output) return done('should have empty output, but the output is:\n'+ output)
      try {
        output = fs.readFileSync(srcFile, 'utf8')
      } catch(e) {
        return done(e)
      }
      if(srcFile) fs.unlinkSync(srcFile)
    }

    // file type result check
    if(fileRe.test(target)) {
      try {
        target = fs.readFileSync(target.replace(fileRe, ''), 'utf8')
      } catch(e) {
        return done(e)
      }
      if(!isJS) {
        output = strToObj(output)
        target = strToObj(target)
      } else {
        output = output.trim()
        target = target.trim()
      }
      expect(output).deep.equal(target)
    } else if(folderRe.test(target)) {
      // folder type check
      var result = require('./'+path.join(target.replace(folderRe, '')))
      fs.readdirSync(source, 'utf8').forEach(function(file) {
        if(/\.js$/.test(file)) {
          if(!(file in result)) return done(file + ' not exists in result json.')
          var filePath = path.join(source, file)
          var code = fs.readFileSync(filePath, 'utf8').trim()
          fs.unlinkSync(filePath)
          expect(strToObj(result[file])).deep.equal(strToObj(code))
        }
      })
    } else {
      expect(output).equal(target)
    }
    // ensure test done
    done()
  })
}

describe('Test cli converter', function () {
  this.slow(3000)
  this.timeout(5000)

  it('with pretty false', function (done) {
    testCli('test/cli/test.css', ['-p', false], 'file::test/cli/test.js', done)
  })

  it('with pretty true', function (done) {
    testCli('test/cli/test.css', ['-p', true], 'file::test/cli/test-pretty.js', done)
  })

  it('with output file', function(done) {
    testCli('test/cli/test.css', ['-o', 'cli-temp.js'], 'file::test/cli/test-pretty.js', done)
  })

  it('with export str', function(done) {
    this.timeout(3e4)

    testCli('test/cli/export.css', ['-o', 'cli-temp.js'], `module.exports = {
  p: {
    color: 'red'
  }
}
`, done)
  })

  it('with export str with ES6', function(done) {

    testCli('test/cli/export.css', ['-o', 'cli-temp2.js', '-e', 'export default '], `export default {
  p: {
    color: 'red'
  }
}
`, done)
  })

  it('with export str with empty', function(done) {
    testCli('test/cli/export.css', ['-o', 'cli-temp3.js', '--export', ''], `{
  p: {
    color: 'red'
  }
}
`, done)
  })

  it('format less no -f', function(done) {
    // without -f option
    testCli('test/cli/test.less', [], 'file::test/cli/test-less.js', done)

  })

  it('format less with -f', function(done) {
    // with explicitly -f less option
    testCli('test/cli/test.less', ['-f', 'less'], 'file::test/cli/test-less.js', done)

  })

  it('format with -c', function(done) {
    // with explicitly -f less option
    testCli('', ['-c', 'p{color: red;}'], 'file::test/cli/command-line.js', done)

  })

  it('format with -k', function(done) {
    // keep vendor prefix
    testCli('test/cli/keep-vendor.css', ['-k', true], 'file::test/cli/keep-vendor.js', done)

  })

  it('format with js', function(done) {
    // keep vendor prefix
    testCli('test/cli/test.js', ['-f', 'js'], 'file::test/cli/test.css', done)

  })

  it('with output file and no pretty', function(done) {
    testCli('test/cli/test.css', ['-o', 'cli-temp.js', '-p', false], 'file::test/cli/test.js', done)
  })

})

describe('test with multiple @media and nested', function() {

  it('should work with media-nest.css', function(done) {
    testCli('test/cli/media-nest.css', ['-o', 'cli-temp.js', '-p', true], 'file::test/cli/media-nest.js', done)
  })

})

describe('test with folder', function() {
  it('should accept folder', function(done) {
    testCli('test/cli/folder', ['-p', false], `folder::cli/folder.js`, done)
  })
})


function testCSSJS(filePath, done) {
  var resultOK = /0 extra rules and 0 missing rules/i
  var pathObj = path.parse(filePath)
  var folder = pathObj.dir
  var name = pathObj.name
  var ext = pathObj.ext
  var lib = path.relative(folder, cli)

  if(!/css|less/.test(ext)) return done('file type should be .css|.less')

  var cmds = [
    ['node', lib, name + ext, '-o', name + '_1' + '.js'],
    ['node', lib, name + '_1' + '.js', '-f js -o', name + '_1' + '.css'],
    function (next) {
      var file = path.join(folder, name + '_1' + '.css')
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/ 0\./g, ' .'), 'utf8')
      next()
    },
    ['strip-css-comments --no-preserve ' + name + ext + ' > ' + name + '_0' + ext],
    ['css-astdiff', name + '_0' + ext, name + '_1' + ext]
  ]

  var execCmds = function(output) {
    var cmd = cmds.shift()
    if(cmd) {
      if(typeof cmd=='function') cmd(execCmds)
      else exec(cmd.join(' '), {cwd: folder}, function(err, output) {
        // console.log(cmd, err, output)
        if(err) return done(err)
        execCmds(output)
      })
    } else {
      expect(output).match(resultOK)
      done()
    }
  }
  execCmds()
}

describe('css-js-css test', function() {
  this.timeout(3e4)

  it('it should work with bootstrap.css', function(done) {
    testCSSJS('./test/bootstrap/css/bootstrap.css', done)
  })
})
