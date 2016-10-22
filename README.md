# CSSOBJ Converter

[![Join the chat at https://gitter.im/css-in-js/cssobj](https://badges.gitter.im/css-in-js/cssobj.svg)](https://gitter.im/css-in-js/cssobj) [![Build Status](https://travis-ci.org/cssobj/cssobj-converter.svg?branch=master)](https://travis-ci.org/cssobj/cssobj-converter)

Convert from normal css/LESS/SASS/SCSS to [cssobj](https://github.com/cssobj/cssobj).

The online version is below:

http://convertcssobj-futurist.rhcloud.com/

( Currently using [OpenShift](https://www.openshift.com/) free hosting for nodejs backend, it will sleep for some idle time.

If you cannot open the page, try again after few seconds, it will wake up.

Someone can help with this? Or provide a node js hosting? )

## CLI

### Install

``` javascript
npm install -g cssobj-converter
```

### Usage

``` bash
cssobj [option] cssfile
```

### Option

option | short | description
---|---|---
--output | -o | output file name(.js file)
--pretty | -p | pretty format output js object **default: true**
--css | -c | css code from command line
--format | -f | supported: css,less **default: css**
--watch | -w | watch [dir] for changes **default: false**
--recursive | -r | recursive convert all [css/less] files in [dir]; **default: false**
--keepVendor | -k | keep vendor prefix for css props

### Example

``` bash
#convert abc.css into cssobj, output to stdout
cssobj abc.css

#convert abc.css into cssobj, output to abc.js
cssobj abc.css -o abc.js

#convert abc.css into cssobj, output to abc.js, without pretty format
cssobj abc.css -o abc.js -p false

#convert less
cssobj abc.less -f less -o abc.js
cssobj abc.less -o abc.js  #same as above

#convert css in command line
cssobj -c "p{ color:red; }"

# all files in folder convert to .js
cssobj ./abc

# convert all files in folder and watch
cssobj ./abc -w

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

## Server

From the lib folder, `npm i` then run below script:

``` bash
npm run server
```

Service URL: `http://localhost:8080`

Accept `POST` json data as below:

``` bash
curl -d '{ "text" : "p {color:red;}" }' localhost:8080
```

