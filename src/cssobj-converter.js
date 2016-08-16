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

function parseMixin(sel) {
  var match = sel.match(/^\s*([\.\#a-z0-9\&_-]+)\s*\((.*)\)\s*$/i)
  if(match) {
    return [match[1], match[2].split(/\s*;\s*/g)]
  }
}

function parseExtend(sel) {
  var match = sel.match(/^\s*([^@]+)\s*:extend\((.*)\)\s*$/i)
  if(match){
    return [match[1], match[2]]
  }
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
      if(format=='less'){
        var arrExt = parseExtend(v.selector)
        var arrMix = parseMixin(v.selector)
        if(arrExt) v.selector = arrExt[0]
      }
      var obj = getObj(v)
      var sel = name(v)
      var body = {}
      // it's LESS :extend / mixin
      if(v.ruleWithoutBody) {
        // console.log(sel, parseExtend(sel), parseMixin(sel))
        if(v.extendRule) {
          // combine & selector into parent
          if(arrExt[0]=='&') {
            sel = '$extend'
            body = arrExt[1]||''
          } else {
            sel = arrExt[0]
            body.$extend = arrExt[1]||''
          }
        } else {
          sel = '$mixin'
          body[arrMix[0]] = arrMix[1].map(function(value) {
            return Number(value)==value ? Number(value) : value
          })
        }
      } else {
        // mixin & extend in selector with prop
        if(arrMix) {
          // fix $vars order poblem
          body.$vars = {}
        }
        if(arrExt) {
          body.$extend = arrExt[1]||''
        }
      }
      if(sel in obj){
        arrayKV(obj, sel, body)
      } else {
        obj[sel] = body
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
      if(obj && obj.constructor == Array) obj = obj[obj.length-1]

      if(prop[0]=='@') {
        obj['$vars'] = obj['$vars'] || {}
        obj['$vars'][prop.slice(1)] = value
        return
      }

      if(prop in obj) {
        arrayKV(obj, prop, value)
      } else {
        obj[prop] = value
      }
    }
  })

  return transformMixin(store)
}

function transformMixin(obj) {
  var $mixins = {}
  for(var k in obj) {
    var arr = parseMixin(k)
    if(arr) {
      obj[k].$vars = obj[k].$vars || {}
      arr[1].forEach(function(v) {
        v = v.split('=')
        obj[k].$vars[v[0]] = v[1]||''
      })
      $mixins[arr[0]] = obj[k]
      delete obj[k]
    }
  }
  if(Object.keys($mixins).length) obj.$mixins = $mixins
  return obj
}


function arrayKV (obj, k, v, reverse, unique) {
  obj[k] = k in obj ? [].concat(obj[k]) : []
  if(unique && obj[k].indexOf(v)>-1) return
  reverse ? obj[k].unshift(v) : obj[k].push(v)
}


module.exports = convertObj

// console.log( convertObj(src)  )
