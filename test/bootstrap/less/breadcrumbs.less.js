{
  '.breadcrumb': {
    padding: '@breadcrumb-padding-vertical @breadcrumb-padding-horizontal',
    marginBottom: '@line-height-computed',
    listStyle: 'none',
    backgroundColor: '@breadcrumb-bg',
    borderRadius: '@border-radius-base',
    '> li': {
      display: 'inline-block',
      '+ li:before': {
        content: '"@{breadcrumb-separator}\\00a0"',
        padding: '0 5px',
        color: '@breadcrumb-color'
      }
    },
    '> .active': {
      color: '@breadcrumb-active-color'
    }
  }
}
