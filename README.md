# CSSOBJ Converter

[![Build Status](https://travis-ci.org/cssobj/cssobj-converter.svg?branch=master)](https://travis-ci.org/cssobj/cssobj-converter)

Convert from normal css to cssobj.

The online version is below:

http://convertcssobj-futurist.rhcloud.com/

( Currently using [OpenShift](https://www.openshift.com/) free hosting for nodejs backend, it will sleep for some idle time.

If you cannot open the page, try again after few seconds, it will wake up.

Someone can help with this? Or provide a node js hosting? )

## Server

Clone this repo, and run:

``` bash
npm install
npm server
```

Service URL: `http://localhost:8080`

Accept `POST` json data as below:

``` bash
curl -d '{ "text" : "p {color:red;}" }' localhost:8080
```

## CLI

### Install

``` javascript
npm install -g cssobj-converter
```

### Usage

``` bash
cssobjconv [option] cssfile
```

### Option

option | short | description
---|---|---
--output | -o | output file name(.js file)
--pretty | -p | pretty format output js object
--css | -c | css code from command line
--format | -f | supported: css,less
--dir | -d | recursive convert all [css/less] files in [dir]
--watch | -w | watch [dir] for changes

### Example

``` bash
#convert abc.css into cssobj, output to stdout
cssobjconv abc.css

#convert abc.css into cssobj, output to abc.js
cssobjconv abc.css -o abc.js

#convert abc.css into cssobj, output to abc.js, without pretty format
cssobjconv abc.css -o abc.js -p false

#convert less
cssobjconv abc.less -f less -o abc.js
cssobjconv abc.less -o abc.js  #same as above

#convert css in command line
cssobjconv -c "p{ color:red; }"

# all files convert to .js
cssobjconv -d ./abc

# convert all files and watch
cssobjconv -w -d ./abc

```


## NodeJS

### Install

``` bash
npm install -S cssobj-converter
```

### Usage

``` javascript
var converter = require('cssobj-converter')
console.log( converter('p { color: red; }') )
```

