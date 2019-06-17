
  Usage: cssobj [options] [input.css]

  Options:

    --help, -h        show help message
    --version, -v     show version number
    --output, -o      output filename(.js file)
    --pretty, -p      pretty format output js object
    --css, -c         css code from command line
    --format, -f      supported: css,less,js
    --watch, -w       watch [dir] for changes
    --recursive, -r   recursively convert/watch for [dir]
    --keepVendor, -k  keep vendor prefix for css props
    --nameStore, -n   export nameStore as `classes`/`ids`, and js object as `obj`

  Examples:

    cssobj  # read from STDIN
    cssobj abc.css
    cssobj abc.css -w # watch abc.css and output
    cssobj abc.css -o abc.js
    cssobj abc.css -o abc.js -p false -w
    cssobj abc.less -f less -o abc.js
    cssobj abc.less -o abc.js   # same as above
    cssobj -c "p{ color:red; }"
    cssobj ./abc         # all files convert to .js
    cssobj ./abc -w      # convert all files and watch
    cssobj abc.js -f js  # convert js to css
    cssobj -c '{p:{color: "red"}}' -f js
