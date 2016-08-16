{
  '$mixins': {
    '.animation': {
      '$vars': {
        '@animation': ''
      },
      WebkitAnimation: '@animation',
      OAnimation: '@animation',
      animation: '@animation'
    },
    '.animation-name': {
      '$vars': {
        '@name': ''
      },
      WebkitAnimationName: '@name',
      animationName: '@name'
    },
    '.animation-duration': {
      '$vars': {
        '@duration': ''
      },
      WebkitAnimationDuration: '@duration',
      animationDuration: '@duration'
    },
    '.animation-timing-function': {
      '$vars': {
        '@timing-function': ''
      },
      WebkitAnimationTimingFunction: '@timing-function',
      animationTimingFunction: '@timing-function'
    },
    '.animation-delay': {
      '$vars': {
        '@delay': ''
      },
      WebkitAnimationDelay: '@delay',
      animationDelay: '@delay'
    },
    '.animation-iteration-count': {
      '$vars': {
        '@iteration-count': ''
      },
      WebkitAnimationIterationCount: '@iteration-count',
      animationIterationCount: '@iteration-count'
    },
    '.animation-direction': {
      '$vars': {
        '@direction': ''
      },
      WebkitAnimationDirection: '@direction',
      animationDirection: '@direction'
    },
    '.animation-fill-mode': {
      '$vars': {
        '@fill-mode': ''
      },
      WebkitAnimationFillMode: '@fill-mode',
      animationFillMode: '@fill-mode'
    },
    '.backface-visibility': {
      '$vars': {
        '@visibility': ''
      },
      WebkitBackfaceVisibility: '@visibility',
      MozBackfaceVisibility: '@visibility',
      backfaceVisibility: '@visibility'
    },
    '.box-shadow': {
      '$vars': {
        '@shadow': ''
      },
      WebkitBoxShadow: '@shadow',
      boxShadow: '@shadow'
    },
    '.box-sizing': {
      '$vars': {
        '@boxmodel': ''
      },
      WebkitBoxSizing: '@boxmodel',
      MozBoxSizing: '@boxmodel',
      boxSizing: '@boxmodel'
    },
    '.content-columns': {
      '$vars': {
        '@column-count': '',
        '@column-gap: @grid-gutter-width': ''
      },
      WebkitColumnCount: '@column-count',
      MozColumnCount: '@column-count',
      columnCount: '@column-count',
      WebkitColumnGap: '@column-gap',
      MozColumnGap: '@column-gap',
      columnGap: '@column-gap'
    },
    '.hyphens': {
      '$vars': {
        '@mode: auto': ''
      },
      wordWrap: 'break-word',
      WebkitHyphens: '@mode',
      MozHyphens: '@mode',
      MsHyphens: '@mode',
      OHyphens: '@mode',
      hyphens: '@mode'
    },
    '.placeholder': {
      '$vars': {
        '@color: @input-color-placeholder': ''
      },
      '&::-moz-placeholder': {
        color: '@color',
        opacity: 1
      },
      '&:-ms-input-placeholder': {
        color: '@color'
      },
      '&::-webkit-input-placeholder': {
        color: '@color'
      }
    },
    '.scale': {
      '$vars': {
        '@ratioX': '',
        '@ratioY': ''
      },
      WebkitTransform: 'scale(@ratioX, @ratioY)',
      MsTransform: 'scale(@ratioX, @ratioY)',
      OTransform: 'scale(@ratioX, @ratioY)',
      transform: 'scale(@ratioX, @ratioY)'
    },
    '.scaleX': {
      '$vars': {
        '@ratio': ''
      },
      WebkitTransform: 'scaleX(@ratio)',
      MsTransform: 'scaleX(@ratio)',
      OTransform: 'scaleX(@ratio)',
      transform: 'scaleX(@ratio)'
    },
    '.scaleY': {
      '$vars': {
        '@ratio': ''
      },
      WebkitTransform: 'scaleY(@ratio)',
      MsTransform: 'scaleY(@ratio)',
      OTransform: 'scaleY(@ratio)',
      transform: 'scaleY(@ratio)'
    },
    '.skew': {
      '$vars': {
        '@x': '',
        '@y': ''
      },
      WebkitTransform: 'skewX(@x) skewY(@y)',
      MsTransform: 'skewX(@x) skewY(@y)',
      OTransform: 'skewX(@x) skewY(@y)',
      transform: 'skewX(@x) skewY(@y)'
    },
    '.translate': {
      '$vars': {
        '@x': '',
        '@y': ''
      },
      WebkitTransform: 'translate(@x, @y)',
      MsTransform: 'translate(@x, @y)',
      OTransform: 'translate(@x, @y)',
      transform: 'translate(@x, @y)'
    },
    '.translate3d': {
      '$vars': {
        '@x': '',
        '@y': '',
        '@z': ''
      },
      WebkitTransform: 'translate3d(@x, @y, @z)',
      transform: 'translate3d(@x, @y, @z)'
    },
    '.rotate': {
      '$vars': {
        '@degrees': ''
      },
      WebkitTransform: 'rotate(@degrees)',
      MsTransform: 'rotate(@degrees)',
      OTransform: 'rotate(@degrees)',
      transform: 'rotate(@degrees)'
    },
    '.rotateX': {
      '$vars': {
        '@degrees': ''
      },
      WebkitTransform: 'rotateX(@degrees)',
      MsTransform: 'rotateX(@degrees)',
      OTransform: 'rotateX(@degrees)',
      transform: 'rotateX(@degrees)'
    },
    '.rotateY': {
      '$vars': {
        '@degrees': ''
      },
      WebkitTransform: 'rotateY(@degrees)',
      MsTransform: 'rotateY(@degrees)',
      OTransform: 'rotateY(@degrees)',
      transform: 'rotateY(@degrees)'
    },
    '.perspective': {
      '$vars': {
        '@perspective': ''
      },
      WebkitPerspective: '@perspective',
      MozPerspective: '@perspective',
      perspective: '@perspective'
    },
    '.perspective-origin': {
      '$vars': {
        '@perspective': ''
      },
      WebkitPerspectiveOrigin: '@perspective',
      MozPerspectiveOrigin: '@perspective',
      perspectiveOrigin: '@perspective'
    },
    '.transform-origin': {
      '$vars': {
        '@origin': ''
      },
      WebkitTransformOrigin: '@origin',
      MozTransformOrigin: '@origin',
      MsTransformOrigin: '@origin',
      transformOrigin: '@origin'
    },
    '.transition': {
      '$vars': {
        '@transition': ''
      },
      WebkitTransition: '@transition',
      OTransition: '@transition',
      transition: '@transition'
    },
    '.transition-property': {
      '$vars': {
        '@transition-property': ''
      },
      WebkitTransitionProperty: '@transition-property',
      transitionProperty: '@transition-property'
    },
    '.transition-delay': {
      '$vars': {
        '@transition-delay': ''
      },
      WebkitTransitionDelay: '@transition-delay',
      transitionDelay: '@transition-delay'
    },
    '.transition-duration': {
      '$vars': {
        '@transition-duration': ''
      },
      WebkitTransitionDuration: '@transition-duration',
      transitionDuration: '@transition-duration'
    },
    '.transition-timing-function': {
      '$vars': {
        '@timing-function': ''
      },
      WebkitTransitionTimingFunction: '@timing-function',
      transitionTimingFunction: '@timing-function'
    },
    '.transition-transform': {
      '$vars': {
        '@transition': ''
      },
      WebkitTransition: '-webkit-transform @transition',
      MozTransition: '-moz-transform @transition',
      OTransition: '-o-transform @transition',
      transition: 'transform @transition'
    },
    '.user-select': {
      '$vars': {
        '@select': ''
      },
      WebkitUserSelect: '@select',
      MozUserSelect: '@select',
      MsUserSelect: '@select',
      userSelect: '@select'
    }
  }
}
