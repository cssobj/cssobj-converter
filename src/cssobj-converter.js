var postcss = require('postcss')
var util = require('util')

var src = 'h1{font-size:12px;color:blue;}\n@media(max-width: 800px){color:purple; p{color:red;}}'

var reOneRule = /^(?:charset|import|namespace)/

function convertObj (src) {
  var ast = postcss().process(src).result.root

  var store = {}

  var name = function (v) {

    if (v.type == 'atrule') return util.format(
      '@%s %s',
      v.name,
      v.params.replace(/[\n\r]/g, ' ')
    )

    if (v.type == 'rule') return v.selector.replace(/[\n\r]/g, ' ')

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

  ast.walk(v => {
    switch (v.type) {
    case 'atrule':
      if(reOneRule.test(v.name)){
        store['@'+v.name] = v.params
        break
      }
    case 'rule':
      var p = getObj(v)
      var sel = name(v)
      p[sel] = p[sel] || {}
      break
    case 'decl':
      // put back IE hacks from v.raws
      var prop = ''
      var value = v.value

      var prefix = v.raws.before.match(/[*_]+$/)
      if(prefix) prop = prefix.pop().replace(/_/g, '\\\\_')

      prop += v.prop
        .replace(/-/g, '_')

      if(Number(value)==value) value = Number(value)

      getObj(v)[prop] = value
    }
  })

  return store
}

module.exports = convertObj

// console.log( convertObj(src)  )
