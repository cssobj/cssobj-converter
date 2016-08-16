{
  '.pagination': {
    display: 'inline-block',
    paddingLeft: 0,
    margin: '@line-height-computed 0',
    borderRadius: '@border-radius-base',
    '> li': {
      display: 'inline',
      '> a,     > span': {
        position: 'relative',
        float: 'left',
        padding: '@padding-base-vertical @padding-base-horizontal',
        lineHeight: '@line-height-base',
        textDecoration: 'none',
        color: '@pagination-color',
        backgroundColor: '@pagination-bg',
        border: '1px solid @pagination-border',
        marginLeft: '-1px'
      },
      '&:first-child': {
        '> a,       > span': {
          marginLeft: 0,
          '$mixin': {
            '.border-left-radius': ['@border-radius-base']
          }
        }
      },
      '&:last-child': {
        '> a,       > span': {
          '$mixin': {
            '.border-right-radius': ['@border-radius-base']
          }
        }
      }
    },
    '> li > a,   > li > span': {
      '&:hover,     &:focus': {
        zIndex: 2,
        color: '@pagination-hover-color',
        backgroundColor: '@pagination-hover-bg',
        borderColor: '@pagination-hover-border'
      }
    },
    '> .active > a,   > .active > span': {
      '&,     &:hover,     &:focus': {
        zIndex: 3,
        color: '@pagination-active-color',
        backgroundColor: '@pagination-active-bg',
        borderColor: '@pagination-active-border',
        cursor: 'default'
      }
    },
    '> .disabled': {
      '> span,     > span:hover,     > span:focus,     > a,     > a:hover,     > a:focus': {
        color: '@pagination-disabled-color',
        backgroundColor: '@pagination-disabled-bg',
        borderColor: '@pagination-disabled-border',
        cursor: '@cursor-disabled'
      }
    }
  },
  '.pagination-lg': {
    '$mixin': {
      '.pagination-size': ['@padding-large-vertical',
        '@padding-large-horizontal',
        '@font-size-large',
        '@line-height-large',
        '@border-radius-large']
    }
  },
  '.pagination-sm': {
    '$mixin': {
      '.pagination-size': ['@padding-small-vertical',
        '@padding-small-horizontal',
        '@font-size-small',
        '@line-height-small',
        '@border-radius-small']
    }
  }
}
