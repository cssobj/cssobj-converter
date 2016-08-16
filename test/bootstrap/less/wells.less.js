{
  '.well': {
    minHeight: '20px',
    padding: '19px',
    marginBottom: '20px',
    backgroundColor: '@well-bg',
    border: '1px solid @well-border',
    borderRadius: '@border-radius-base',
    '$mixin': {
      '.box-shadow': ['inset 0 1px 1px rgba(0,0,0,.05)']
    },
    blockquote: {
      borderColor: ['#ddd', 'rgba(0,0,0,.15)']
    }
  },
  '.well-lg': {
    padding: '24px',
    borderRadius: '@border-radius-large'
  },
  '.well-sm': {
    padding: '9px',
    borderRadius: '@border-radius-small'
  }
}
