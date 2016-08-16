
  Usage: cssobjconv [options] input.css

  Options:

    --output, -o  output filename(.js file)
    --pretty, -p  pretty format output js object
    --css, -c     css code from command line
    --format, -f  supported: css,scss,less
    --dir, -d     recursive convert all [css/less] files in [dir]
    --watch, -w   watch [dir] for changes

  Examples:

    cssobjconv abc.css
    cssobjconv abc.css -o abc.js
    cssobjconv abc.css -o abc.js -p false
    cssobjconv abc.less -f less -o abc.js
    cssobjconv abc.less -o abc.js  # same as above
    cssobjconv -c "p{ color:red; }"
    cssobjconv -d ./abc  # all files convert to .js
    cssobjconv -w -d ./abc # convert all files and watch



