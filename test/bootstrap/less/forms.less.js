{ fieldset: { padding: 0, margin: 0, border: 0, minWidth: 0 },
  legend: 
   { display: 'block',
     width: '100%',
     padding: 0,
     marginBottom: '@line-height-computed',
     fontSize: '(@font-size-base * 1.5)',
     lineHeight: 'inherit',
     color: '@legend-color',
     border: 0,
     borderBottom: '1px solid @legend-border-color' },
  label: 
   { display: 'inline-block',
     maxWidth: '100%',
     marginBottom: '5px',
     fontWeight: 'bold' },
  'input[type="search"]': 
   [ { '$mixin': { '.box-sizing': [ 'border-box' ] } },
     { WebkitAppearance: 'none' } ],
  'input[type="radio"], input[type="checkbox"]': 
   [ { margin: '4px 0 0', marginTop: '1px \\9', lineHeight: 'normal' },
     {},
     '&[disabled],   &.disabled,   fieldset[disabled] &': { cursor: '@cursor-disabled' } ],
  'input[type="file"]': { display: 'block' },
  'input[type="range"]': { display: 'block', width: '100%' },
  'select[multiple], select[size]': { height: 'auto' },
  'input[type="file"]:focus, input[type="radio"]:focus, input[type="checkbox"]:focus': { '$mixin': { '.tab-focus': [ 0 ] } },
  output: 
   { display: 'block',
     paddingTop: '(@padding-base-vertical + 1)',
     fontSize: '@font-size-base',
     lineHeight: '@line-height-base',
     color: '@input-color' },
  '.form-control': 
   { display: 'block',
     width: '100%',
     height: '@input-height-base',
     padding: '@padding-base-vertical @padding-base-horizontal',
     fontSize: '@font-size-base',
     lineHeight: '@line-height-base',
     color: '@input-color',
     backgroundColor: '@input-bg',
     backgroundImage: 'none',
     border: '1px solid @input-border',
     borderRadius: '@input-border-radius',
     '$mixin': 
      [ { '.box-shadow': [ 'inset 0 1px 1px rgba(0,0,0,.075)' ] },
        { '.transition': [ '~"border-color ease-in-out .15s, box-shadow ease-in-out .15s"' ] },
        { '.form-control-focus': [ 0 ] },
        { '.placeholder': [ 0 ] } ],
     '&::-ms-expand': { border: 0, backgroundColor: 'transparent' },
     '&[disabled],   &[readonly],   fieldset[disabled] &': { backgroundColor: '@input-bg-disabled', opacity: 1 },
     '&[disabled],   fieldset[disabled] &': { cursor: '@cursor-disabled' },
     'textarea&': { height: 'auto' } },
  '@media screen and (-webkit-min-device-pixel-ratio: 0)': 
   { 'input[type="date"],   input[type="time"],   input[type="datetime-local"],   input[type="month"]': 
      { '&.form-control': { lineHeight: '@input-height-base' },
        '&.input-sm,     .input-group-sm &': { lineHeight: '@input-height-small' },
        '&.input-lg,     .input-group-lg &': { lineHeight: '@input-height-large' } } },
  '.form-group': { marginBottom: '@form-group-margin-bottom' },
  '.radio, .checkbox': 
   [ { position: 'relative',
       display: 'block',
       marginTop: '10px',
       marginBottom: '10px',
       label: 
        { minHeight: '@line-height-computed',
          paddingLeft: '20px',
          marginBottom: 0,
          fontWeight: 'normal',
          cursor: 'pointer' } },
     {},
     '&.disabled,   fieldset[disabled] &': { label: { cursor: '@cursor-disabled' } } ],
  '.radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"]': 
   { position: 'absolute',
     marginLeft: '-20px',
     marginTop: '4px \\9' },
  '.radio + .radio, .checkbox + .checkbox': { marginTop: '-5px' },
  '.radio-inline, .checkbox-inline': 
   [ { position: 'relative',
       display: 'inline-block',
       paddingLeft: '20px',
       marginBottom: 0,
       verticalAlign: 'middle',
       fontWeight: 'normal',
       cursor: 'pointer' },
     {},
     '&.disabled,   fieldset[disabled] &': { cursor: '@cursor-disabled' } ],
  '.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline': { marginTop: 0, marginLeft: '10px' },
  '.form-control-static': 
   { paddingTop: '(@padding-base-vertical + 1)',
     paddingBottom: '(@padding-base-vertical + 1)',
     marginBottom: 0,
     minHeight: '(@line-height-computed + @font-size-base)',
     '&.input-lg,   &.input-sm': { paddingLeft: 0, paddingRight: 0 } },
  '.input-sm': 
   { '$mixin': 
      { '.input-size': 
         [ '@input-height-small',
           '@padding-small-vertical',
           '@padding-small-horizontal',
           '@font-size-small',
           '@line-height-small',
           '@input-border-radius-small' ] } },
  '.form-group-sm': 
   { '.form-control': 
      { height: '@input-height-small',
        padding: '@padding-small-vertical @padding-small-horizontal',
        fontSize: '@font-size-small',
        lineHeight: '@line-height-small',
        borderRadius: '@input-border-radius-small' },
     'select.form-control': 
      { height: '@input-height-small',
        lineHeight: '@input-height-small' },
     'textarea.form-control,   select[multiple].form-control': { height: 'auto' },
     '.form-control-static': 
      { height: '@input-height-small',
        minHeight: '(@line-height-computed + @font-size-small)',
        padding: '(@padding-small-vertical + 1) @padding-small-horizontal',
        fontSize: '@font-size-small',
        lineHeight: '@line-height-small' } },
  '.input-lg': 
   { '$mixin': 
      { '.input-size': 
         [ '@input-height-large',
           '@padding-large-vertical',
           '@padding-large-horizontal',
           '@font-size-large',
           '@line-height-large',
           '@input-border-radius-large' ] } },
  '.form-group-lg': 
   { '.form-control': 
      { height: '@input-height-large',
        padding: '@padding-large-vertical @padding-large-horizontal',
        fontSize: '@font-size-large',
        lineHeight: '@line-height-large',
        borderRadius: '@input-border-radius-large' },
     'select.form-control': 
      { height: '@input-height-large',
        lineHeight: '@input-height-large' },
     'textarea.form-control,   select[multiple].form-control': { height: 'auto' },
     '.form-control-static': 
      { height: '@input-height-large',
        minHeight: '(@line-height-computed + @font-size-large)',
        padding: '(@padding-large-vertical + 1) @padding-large-horizontal',
        fontSize: '@font-size-large',
        lineHeight: '@line-height-large' } },
  '.has-feedback': 
   { position: 'relative',
     '.form-control': { paddingRight: '(@input-height-base * 1.25)' } },
  '.form-control-feedback': 
   { position: 'absolute',
     top: 0,
     right: 0,
     zIndex: 2,
     display: 'block',
     width: '@input-height-base',
     height: '@input-height-base',
     lineHeight: '@input-height-base',
     textAlign: 'center',
     pointerEvents: 'none' },
  '.input-lg + .form-control-feedback, .input-group-lg + .form-control-feedback, .form-group-lg .form-control + .form-control-feedback': 
   { width: '@input-height-large',
     height: '@input-height-large',
     lineHeight: '@input-height-large' },
  '.input-sm + .form-control-feedback, .input-group-sm + .form-control-feedback, .form-group-sm .form-control + .form-control-feedback': 
   { width: '@input-height-small',
     height: '@input-height-small',
     lineHeight: '@input-height-small' },
  '.has-success': 
   { '$mixin': 
      { '.form-control-validation': 
         [ '@state-success-text',
           '@state-success-text',
           '@state-success-bg' ] } },
  '.has-warning': 
   { '$mixin': 
      { '.form-control-validation': 
         [ '@state-warning-text',
           '@state-warning-text',
           '@state-warning-bg' ] } },
  '.has-error': 
   { '$mixin': 
      { '.form-control-validation': 
         [ '@state-danger-text',
           '@state-danger-text',
           '@state-danger-bg' ] } },
  '.has-feedback label': 
   { '& ~ .form-control-feedback': { top: '(@line-height-computed + 5)' },
     '&.sr-only ~ .form-control-feedback': { top: 0 } },
  '.help-block': 
   { display: 'block',
     marginTop: '5px',
     marginBottom: '10px',
     color: 'lighten(@text-color, 25%)' },
  '.form-inline': 
   { '@media (min-width: @screen-sm-min)': 
      { '.form-group': 
         { display: 'inline-block',
           marginBottom: 0,
           verticalAlign: 'middle' },
        '.form-control': 
         { display: 'inline-block',
           width: 'auto',
           verticalAlign: 'middle' },
        '.form-control-static': { display: 'inline-block' },
        '.input-group': 
         { display: 'inline-table',
           verticalAlign: 'middle',
           '.input-group-addon,       .input-group-btn,       .form-control': { width: 'auto' } },
        '.input-group > .form-control': { width: '100%' },
        '.control-label': { marginBottom: 0, verticalAlign: 'middle' },
        '.radio,     .checkbox': 
         { display: 'inline-block',
           marginTop: 0,
           marginBottom: 0,
           verticalAlign: 'middle',
           label: { paddingLeft: 0 } },
        '.radio input[type="radio"],     .checkbox input[type="checkbox"]': { position: 'relative', marginLeft: 0 },
        '.has-feedback .form-control-feedback': { top: 0 } } },
  '.form-horizontal': 
   { '.radio,   .checkbox,   .radio-inline,   .checkbox-inline': 
      { marginTop: 0,
        marginBottom: 0,
        paddingTop: '(@padding-base-vertical + 1)' },
     '.radio,   .checkbox': { minHeight: '(@line-height-computed + (@padding-base-vertical + 1))' },
     '.form-group': { '$mixin': { '.make-row': [ 0 ] } },
     '@media (min-width: @screen-sm-min)': 
      { '.control-label': 
         { textAlign: 'right',
           marginBottom: 0,
           paddingTop: '(@padding-base-vertical + 1)' } },
     '.has-feedback .form-control-feedback': { right: 'floor((@grid-gutter-width / 2))' },
     '.form-group-lg': 
      { '@media (min-width: @screen-sm-min)': 
         { '.control-label': 
            { paddingTop: '(@padding-large-vertical + 1)',
              fontSize: '@font-size-large' } } },
     '.form-group-sm': 
      { '@media (min-width: @screen-sm-min)': 
         { '.control-label': 
            { paddingTop: '(@padding-small-vertical + 1)',
              fontSize: '@font-size-small' } } } } }
