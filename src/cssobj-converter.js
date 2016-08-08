var postcss = require('postcss')
var scss = require('postcss-scss')
var less = require('postcss-less')
var util = require('util')

var src = 'h1{font-size:12px;color:blue;}\n@media(max-width: 800px){color:purple; p{color:red;}}'

var reOneRule = /^(?:charset|import|namespace)/


// for old node(0.10), using \\ instead of \\\\
var backSlash = util.inspect({'\\_':1}).length===12 ? '\\' : '\\\\'

// check if str offset position in inside '' or ""
function insideStr (str, offset) {
  for (var i = 0, curPair = '', char; char = str[i], i < offset; i++) {
    if (curPair && curPair === char) curPair = ''
    else if (char == '"' || char == "'") {
      if (!curPair) curPair = char
    }
  }
  return curPair
}

// replacer when & is not insideStr
function replacer (match, offset, str) {
  return insideStr(str, offset) ? backSlash+'&' : '&'
}


function camelCase (input) {
  return input.toLowerCase().replace(/-(.)/g, function (match, char) {
    return char.toUpperCase()
  })
}

var syntax = {
  'scss': scss,
  'less': less,
  'css': ''
}

function convertObj (src, format) {
  try {
    var ast = postcss([]).process(src, { parser: syntax[format] }).result.root
    // var ast = postcss.parse(src).toResult().root
  }catch(e) {
    console.log('parse error', e)
  }

  var store = {}

  var name = function (v) {

    if (v.type == 'atrule') return util.format(
      '@%s %s',
      v.name,
      v.params.replace(/[\n\r]/g, ' ')
    )

    if (v.type == 'rule') return v.selector.replace(/[\n\r]/g, ' ').replace( /&/g,
      // how to deal with & ?
      // stylus using \& to escape, SCSS/LESS check insideStr
      format==='less'
        ? '&'
        : backSlash + '&'
    )

  }



  var getObj = function (v) {
    var n = store, path = []
    while(v.parent && v.parent.type != 'root'){
      path.unshift(name(v.parent))
      v = v.parent
    }
    for (var i = 0; i < path.length; i++) {
      n = n[path[i]]
    }
    return n
  }

  ast.walk(function(v) {
    switch (v.type) {
    case 'atrule':
      if(reOneRule.test(v.name)){
        arrayKV(store, '@'+v.name, v.params)
        break
      }
    case 'rule':
      var obj = getObj(v)
      var sel = name(v)
      // it's LESS :extend / mixin
      if(v.ruleWithoutBody) {
        if(v.extendRule){
          sel+='1234'
        } else {
          sel+='abcd'
        }
      }
      if(sel in obj){
        arrayKV(obj, sel, {})
      } else {
        obj[sel] = {}
      }
      break
    case 'decl':
      // put back IE hacks from v.raws
      var prop = ''
      var value = v.value

      // css hacks stored in v.raws.before
      var prefix = v.raws.before.match(/[*_]+$/)

      if(prefix) prop += prefix.pop()

      // @prop don't camelcase
      prop += /^\s*@/i.test(v.prop) ? v.prop : camelCase(v.prop)

      if(Number(value)==value) value = Number(value)

      var obj = getObj(v)
      if(obj.constructor == Array) obj = obj[obj.length-1]

      if(prop[0]=='@') {
        obj['$vars'] = obj['$vars'] || {}
        obj['$vars'][prop] = value
        return
      }

      if(prop in obj) {
        arrayKV(obj, prop, value)
      }else{
        obj[prop] = value
      }
    }
  })

  return store
}


function arrayKV (obj, k, v, reverse, unique) {
  obj[k] = k in obj ? [].concat(obj[k]) : []
  if(unique && obj[k].indexOf(v)>-1) return
  reverse ? obj[k].unshift(v) : obj[k].push(v)
}


module.exports = convertObj

// console.log( convertObj(src)  )
