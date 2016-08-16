{
  '.badge': {
    display: 'inline-block',
    minWidth: '10px',
    padding: '3px 7px',
    fontSize: '@font-size-small',
    fontWeight: '@badge-font-weight',
    color: '@badge-color',
    lineHeight: '@badge-line-height',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    backgroundColor: '@badge-bg',
    borderRadius: '@badge-border-radius',
    '&:empty': {
      display: 'none'
    },
    '.btn &': {
      position: 'relative',
      top: '-1px'
    },
    '.btn-xs &,   .btn-group-xs > .btn &': {
      top: 0,
      padding: '1px 5px'
    },
    'a&': {
      '&:hover,     &:focus': {
        color: '@badge-link-hover-color',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    },
    '.list-group-item.active > &,   .nav-pills > .active > a > &': {
      color: '@badge-active-color',
      backgroundColor: '@badge-active-bg'
    },
    '.list-group-item > &': {
      float: 'right'
    },
    '.list-group-item > & + &': {
      marginRight: '5px'
    },
    '.nav-pills > li > a > &': {
      marginLeft: '3px'
    }
  }
}
