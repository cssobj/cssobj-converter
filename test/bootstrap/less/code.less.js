{
  'code, kbd, pre, samp': {
    fontFamily: '@font-family-monospace'
  },
  code: {
    padding: '2px 4px',
    fontSize: '90%',
    color: '@code-color',
    backgroundColor: '@code-bg',
    borderRadius: '@border-radius-base'
  },
  kbd: {
    padding: '2px 4px',
    fontSize: '90%',
    color: '@kbd-color',
    backgroundColor: '@kbd-bg',
    borderRadius: '@border-radius-small',
    boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.25)',
    kbd: {
      padding: 0,
      fontSize: '100%',
      fontWeight: 'bold',
      boxShadow: 'none'
    }
  },
  pre: {
    display: 'block',
    padding: '((@line-height-computed - 1) / 2)',
    margin: '0 0 (@line-height-computed / 2)',
    fontSize: '(@font-size-base - 1)',
    lineHeight: '@line-height-base',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    color: '@pre-color',
    backgroundColor: '@pre-bg',
    border: '1px solid @pre-border-color',
    borderRadius: '@border-radius-base',
    code: {
      padding: 0,
      fontSize: 'inherit',
      color: 'inherit',
      whiteSpace: 'pre-wrap',
      backgroundColor: 'transparent',
      borderRadius: 0
    }
  },
  '.pre-scrollable': {
    maxHeight: '@pre-scrollable-max-height',
    overflowY: 'scroll'
  }
}
