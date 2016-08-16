{
  '.pager': {
    paddingLeft: 0,
    margin: '@line-height-computed 0',
    listStyle: 'none',
    textAlign: 'center',
    '$extend': '.clearfix all',
    li: {
      display: 'inline',
      '> a,     > span': {
        display: 'inline-block',
        padding: '5px 14px',
        backgroundColor: '@pager-bg',
        border: '1px solid @pager-border',
        borderRadius: '@pager-border-radius'
      },
      '> a:hover,     > a:focus': {
        textDecoration: 'none',
        backgroundColor: '@pager-hover-bg'
      }
    },
    '.next': {
      '> a,     > span': {
        float: 'right'
      }
    },
    '.previous': {
      '> a,     > span': {
        float: 'left'
      }
    },
    '.disabled': {
      '> a,     > a:hover,     > a:focus,     > span': {
        color: '@pager-disabled-color',
        backgroundColor: '@pager-bg',
        cursor: '@cursor-disabled'
      }
    }
  }
}
