{
  '$mixins': {
    '.make-grid-columns': {
      '$vars': {
        '': ''
      },
      '.col(@index)': {
        '$vars': {
          item: '~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}"'
        },
        '$mixin': {
          '.col': ['(@index + 1), @item']
        }
      },
      '.col(@index, @list) when (@index =< @grid-columns)': {
        '$vars': {
          item: '~".col-xs-@{index}, .col-sm-@{index}, .col-md-@{index}, .col-lg-@{index}"'
        },
        '$mixin': {
          '.col': ['(@index + 1), ~"@{list}, @{item}"']
        }
      },
      '.col(@index, @list) when (@index > @grid-columns)': {
        '$vars': {},
        '@{list}': {
          position: 'relative',
          minHeight: '1px',
          paddingLeft: 'ceil((@grid-gutter-width / 2))',
          paddingRight: 'floor((@grid-gutter-width / 2))'
        }
      },
      '$mixin': {
        '.col': [1]
      }
    },
    '.float-grid-columns': {
      '$vars': {
        '@class': ''
      },
      '.col(@index)': {
        '$vars': {
          item: '~".col-@{class}-@{index}"'
        },
        '$mixin': {
          '.col': ['(@index + 1), @item']
        }
      },
      '.col(@index, @list) when (@index =< @grid-columns)': {
        '$vars': {
          item: '~".col-@{class}-@{index}"'
        },
        '$mixin': {
          '.col': ['(@index + 1), ~"@{list}, @{item}"']
        }
      },
      '.col(@index, @list) when (@index > @grid-columns)': {
        '$vars': {},
        '@{list}': {
          float: 'left'
        }
      },
      '$mixin': {
        '.col': [1]
      }
    },
    '.calc-grid-column': {
      '$vars': {
        '@index, @class, @type) when (@type ': ' offset'
      },
      '.col-@{class}-offset-@{index}': {
        marginLeft: 'percentage((@index / @grid-columns))'
      }
    },
    '.loop-grid-columns': {
      '$vars': {
        '@index, @class, @type) when (@index >': ' 0'
      },
      '$mixin': [{
        '.calc-grid-column': ['@index, @class, @type']
      },
        {
          '.loop-grid-columns': ['(@index - 1), @class, @type']
        }]
    },
    '.make-grid': {
      '$vars': {
        '@class': ''
      },
      '$mixin': [{
        '.float-grid-columns': ['@class']
      },
        {
          '.loop-grid-columns': ['@grid-columns, @class, width']
        },
        {
          '.loop-grid-columns': ['@grid-columns, @class, pull']
        },
        {
          '.loop-grid-columns': ['@grid-columns, @class, push']
        },
        {
          '.loop-grid-columns': ['@grid-columns, @class, offset']
        }]
    }
  }
}
