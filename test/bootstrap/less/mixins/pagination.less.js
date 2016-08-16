{
  '$mixins': {
    '.pagination-size': {
      '$vars': {
        '@padding-vertical': '',
        '@padding-horizontal': '',
        '@font-size': '',
        '@line-height': '',
        '@border-radius': ''
      },
      '> li': {
        '> a,     > span': {
          padding: '@padding-vertical @padding-horizontal',
          fontSize: '@font-size',
          lineHeight: '@line-height'
        },
        '&:first-child': {
          '> a,       > span': {
            '$mixin': {
              '.border-left-radius': ['@border-radius']
            }
          }
        },
        '&:last-child': {
          '> a,       > span': {
            '$mixin': {
              '.border-right-radius': ['@border-radius']
            }
          }
        }
      }
    }
  }
}
