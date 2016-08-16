{ '.navbar': 
   { position: 'relative',
     minHeight: '@navbar-height',
     marginBottom: '@navbar-margin-bottom',
     border: '1px solid transparent',
     '$extend': '.clearfix all',
     '@media (min-width: @grid-float-breakpoint)': { borderRadius: '@navbar-border-radius' } },
  '.navbar-header': 
   { '$extend': '.clearfix all',
     '@media (min-width: @grid-float-breakpoint)': { float: 'left' } },
  '.navbar-collapse': 
   { overflowX: 'visible',
     paddingRight: '@navbar-padding-horizontal',
     paddingLeft: '@navbar-padding-horizontal',
     borderTop: '1px solid transparent',
     boxShadow: 'inset 0 1px 0 rgba(255,255,255,.1)',
     '$extend': '.clearfix all',
     WebkitOverflowScrolling: 'touch',
     '&.in': { overflowY: 'auto' },
     '@media (min-width: @grid-float-breakpoint)': 
      { width: 'auto',
        borderTop: 0,
        boxShadow: 'none',
        '&.collapse': 
         { display: 'block',
           height: 'auto',
           paddingBottom: 0,
           overflow: 'visible' },
        '&.in': { overflowY: 'visible' },
        '.navbar-fixed-top &,     .navbar-static-top &,     .navbar-fixed-bottom &': { paddingLeft: 0, paddingRight: 0 } } },
  '.navbar-fixed-top, .navbar-fixed-bottom': 
   [ { '.navbar-collapse': 
        { maxHeight: '@navbar-collapse-max-height',
          '@media (max-device-width: @screen-xs-min) and (orientation: landscape)': { maxHeight: '200px' } } },
     { position: 'fixed',
       right: 0,
       left: 0,
       zIndex: '@zindex-navbar-fixed' },
     '@media (min-width: @grid-float-breakpoint)': { borderRadius: 0 } ],
  '.container, .container-fluid': 
   { '> .navbar-header,   > .navbar-collapse': 
      { marginRight: '-@navbar-padding-horizontal',
        marginLeft: '-@navbar-padding-horizontal',
        '@media (min-width: @grid-float-breakpoint)': { marginRight: 0, marginLeft: 0 } } },
  '.navbar-static-top': 
   { zIndex: '@zindex-navbar',
     borderWidth: '0 0 1px',
     '@media (min-width: @grid-float-breakpoint)': { borderRadius: 0 } },
  '.navbar-fixed-top': { top: 0, borderWidth: '0 0 1px' },
  '.navbar-fixed-bottom': { bottom: 0, marginBottom: 0, borderWidth: '1px 0 0' },
  '.navbar-brand': 
   { float: 'left',
     padding: '@navbar-padding-vertical @navbar-padding-horizontal',
     fontSize: '@font-size-large',
     lineHeight: '@line-height-computed',
     height: '@navbar-height',
     '&:hover,   &:focus': { textDecoration: 'none' },
     '> img': { display: 'block' },
     '@media (min-width: @grid-float-breakpoint)': { '.navbar > .container &,     .navbar > .container-fluid &': { marginLeft: '-@navbar-padding-horizontal' } } },
  '.navbar-toggle': 
   { position: 'relative',
     float: 'right',
     marginRight: '@navbar-padding-horizontal',
     padding: '9px 10px',
     '$mixin': { '.navbar-vertical-align': [ '34px' ] },
     backgroundColor: 'transparent',
     backgroundImage: 'none',
     border: '1px solid transparent',
     borderRadius: '@border-radius-base',
     '&:focus': { outline: 0 },
     '.icon-bar': 
      { display: 'block',
        width: '22px',
        height: '2px',
        borderRadius: '1px' },
     '.icon-bar + .icon-bar': { marginTop: '4px' },
     '@media (min-width: @grid-float-breakpoint)': { display: 'none' } },
  '.navbar-nav': 
   { margin: '(@navbar-padding-vertical / 2) -@navbar-padding-horizontal',
     '> li > a': 
      { paddingTop: '10px',
        paddingBottom: '10px',
        lineHeight: '@line-height-computed' },
     '@media (max-width: @grid-float-breakpoint-max)': 
      { '.open .dropdown-menu': 
         { position: 'static',
           float: 'none',
           width: 'auto',
           marginTop: 0,
           backgroundColor: 'transparent',
           border: 0,
           boxShadow: 'none',
           '> li > a,       .dropdown-header': { padding: '5px 15px 5px 25px' },
           '> li > a': 
            { lineHeight: '@line-height-computed',
              '&:hover,         &:focus': { backgroundImage: 'none' } } } },
     '@media (min-width: @grid-float-breakpoint)': 
      { float: 'left',
        margin: 0,
        '> li': 
         { float: 'left',
           '> a': 
            { paddingTop: '@navbar-padding-vertical',
              paddingBottom: '@navbar-padding-vertical' } } } },
  '.navbar-form': 
   { marginLeft: '-@navbar-padding-horizontal',
     marginRight: '-@navbar-padding-horizontal',
     padding: '10px @navbar-padding-horizontal',
     borderTop: '1px solid transparent',
     borderBottom: '1px solid transparent',
     '$vars': { shadow: 'inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1)' },
     '$mixin': 
      [ { '.box-shadow': [ '@shadow' ] },
        { '.form-inline': [ 0 ] },
        { '.navbar-vertical-align': [ '@input-height-base' ] } ],
     '.form-group': { '@media (max-width: @grid-float-breakpoint-max)': { marginBottom: '5px', '&:last-child': { marginBottom: 0 } } },
     '@media (min-width: @grid-float-breakpoint)': 
      { width: 'auto',
        border: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        '$mixin': { '.box-shadow': [ 'none' ] } } },
  '.navbar-nav > li > .dropdown-menu': { marginTop: 0, '$mixin': { '.border-top-radius': [ 0 ] } },
  '.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu': 
   { marginBottom: 0,
     '$mixin': 
      [ { '.border-top-radius': [ '@navbar-border-radius' ] },
        { '.border-bottom-radius': [ 0 ] } ] },
  '.navbar-btn': 
   { '$mixin': { '.navbar-vertical-align': [ '@input-height-base' ] },
     '&.btn-sm': { '$mixin': { '.navbar-vertical-align': [ '@input-height-small' ] } },
     '&.btn-xs': { '$mixin': { '.navbar-vertical-align': [ 22 ] } } },
  '.navbar-text': 
   { '$mixin': { '.navbar-vertical-align': [ '@line-height-computed' ] },
     '@media (min-width: @grid-float-breakpoint)': 
      { float: 'left',
        marginLeft: '@navbar-padding-horizontal',
        marginRight: '@navbar-padding-horizontal' } },
  '@media (min-width: @grid-float-breakpoint)': 
   { '.navbar-left': { '$mixin': { '.pull-left': [ 0 ] } },
     '.navbar-right': 
      { '$mixin': { '.pull-right': [ 0 ] },
        marginRight: '-@navbar-padding-horizontal',
        '~ .navbar-right': { marginRight: 0 } } },
  '.navbar-default': 
   { backgroundColor: '@navbar-default-bg',
     borderColor: '@navbar-default-border',
     '.navbar-brand': 
      { color: '@navbar-default-brand-color',
        '&:hover,     &:focus': 
         { color: '@navbar-default-brand-hover-color',
           backgroundColor: '@navbar-default-brand-hover-bg' } },
     '.navbar-text': { color: '@navbar-default-color' },
     '.navbar-nav': 
      [ { '> li > a': 
           { color: '@navbar-default-link-color',
             '&:hover,       &:focus': 
              { color: '@navbar-default-link-hover-color',
                backgroundColor: '@navbar-default-link-hover-bg' } },
          '> .active > a': 
           { '&,       &:hover,       &:focus': 
              { color: '@navbar-default-link-active-color',
                backgroundColor: '@navbar-default-link-active-bg' } },
          '> .disabled > a': 
           { '&,       &:hover,       &:focus': 
              { color: '@navbar-default-link-disabled-color',
                backgroundColor: '@navbar-default-link-disabled-bg' } } },
        {},
        '> .open > a': { '&,       &:hover,       &:focus': 
           { backgroundColor: '@navbar-default-link-active-bg',
             color: '@navbar-default-link-active-color' } },
        '@media (max-width: @grid-float-breakpoint-max)': { '.open .dropdown-menu': 
           { '> li > a': 
              { color: '@navbar-default-link-color',
                '&:hover,           &:focus': 
                 { color: '@navbar-default-link-hover-color',
                   backgroundColor: '@navbar-default-link-hover-bg' } },
             '> .active > a': 
              { '&,           &:hover,           &:focus': 
                 { color: '@navbar-default-link-active-color',
                   backgroundColor: '@navbar-default-link-active-bg' } },
             '> .disabled > a': 
              { '&,           &:hover,           &:focus': 
                 { color: '@navbar-default-link-disabled-color',
                   backgroundColor: '@navbar-default-link-disabled-bg' } } } } ],
     '.navbar-toggle': 
      { borderColor: '@navbar-default-toggle-border-color',
        '&:hover,     &:focus': { backgroundColor: '@navbar-default-toggle-hover-bg' },
        '.icon-bar': { backgroundColor: '@navbar-default-toggle-icon-bar-bg' } },
     '.navbar-collapse,   .navbar-form': { borderColor: '@navbar-default-border' },
     '.navbar-link': 
      { color: '@navbar-default-link-color',
        '&:hover': { color: '@navbar-default-link-hover-color' } },
     '.btn-link': 
      { color: '@navbar-default-link-color',
        '&:hover,     &:focus': { color: '@navbar-default-link-hover-color' },
        '&[disabled],     fieldset[disabled] &': { '&:hover,       &:focus': { color: '@navbar-default-link-disabled-color' } } } },
  '.navbar-inverse': 
   { backgroundColor: '@navbar-inverse-bg',
     borderColor: '@navbar-inverse-border',
     '.navbar-brand': 
      { color: '@navbar-inverse-brand-color',
        '&:hover,     &:focus': 
         { color: '@navbar-inverse-brand-hover-color',
           backgroundColor: '@navbar-inverse-brand-hover-bg' } },
     '.navbar-text': { color: '@navbar-inverse-color' },
     '.navbar-nav': 
      [ { '> li > a': 
           { color: '@navbar-inverse-link-color',
             '&:hover,       &:focus': 
              { color: '@navbar-inverse-link-hover-color',
                backgroundColor: '@navbar-inverse-link-hover-bg' } },
          '> .active > a': 
           { '&,       &:hover,       &:focus': 
              { color: '@navbar-inverse-link-active-color',
                backgroundColor: '@navbar-inverse-link-active-bg' } },
          '> .disabled > a': 
           { '&,       &:hover,       &:focus': 
              { color: '@navbar-inverse-link-disabled-color',
                backgroundColor: '@navbar-inverse-link-disabled-bg' } } },
        {},
        '> .open > a': { '&,       &:hover,       &:focus': 
           { backgroundColor: '@navbar-inverse-link-active-bg',
             color: '@navbar-inverse-link-active-color' } },
        '@media (max-width: @grid-float-breakpoint-max)': { '.open .dropdown-menu': 
           { '> .dropdown-header': { borderColor: '@navbar-inverse-border' },
             '.divider': { backgroundColor: '@navbar-inverse-border' },
             '> li > a': 
              { color: '@navbar-inverse-link-color',
                '&:hover,           &:focus': 
                 { color: '@navbar-inverse-link-hover-color',
                   backgroundColor: '@navbar-inverse-link-hover-bg' } },
             '> .active > a': 
              { '&,           &:hover,           &:focus': 
                 { color: '@navbar-inverse-link-active-color',
                   backgroundColor: '@navbar-inverse-link-active-bg' } },
             '> .disabled > a': 
              { '&,           &:hover,           &:focus': 
                 { color: '@navbar-inverse-link-disabled-color',
                   backgroundColor: '@navbar-inverse-link-disabled-bg' } } } } ],
     '.navbar-toggle': 
      { borderColor: '@navbar-inverse-toggle-border-color',
        '&:hover,     &:focus': { backgroundColor: '@navbar-inverse-toggle-hover-bg' },
        '.icon-bar': { backgroundColor: '@navbar-inverse-toggle-icon-bar-bg' } },
     '.navbar-collapse,   .navbar-form': { borderColor: 'darken(@navbar-inverse-bg, 7%)' },
     '.navbar-link': 
      { color: '@navbar-inverse-link-color',
        '&:hover': { color: '@navbar-inverse-link-hover-color' } },
     '.btn-link': 
      { color: '@navbar-inverse-link-color',
        '&:hover,     &:focus': { color: '@navbar-inverse-link-hover-color' },
        '&[disabled],     fieldset[disabled] &': { '&:hover,       &:focus': { color: '@navbar-inverse-link-disabled-color' } } } } }
