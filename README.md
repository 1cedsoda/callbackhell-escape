# escape-the-cbh
The easyest way to escape the callback-hell. I promise you.

# Installation
[![NPM](https://nodei.co/npm/escape-the-cbh.png?mini=true)](https://nodei.co/npm/escape-the-cbh/)

# Usage

```javascript
const Blocker = require("escape-the-cbh")

// set up a new blocker
let b = new Blocker()

// call a asynchronous function
setTimeout(function() {
    console.log("callback after 1 second")
    // release the blocker at the end of the callback
    b.release()
}, 1000);

//normal codeflow continues
console.log("not synchronized")

// blocking until release() is called
b.wait()
console.log("synchronized")
```

The Blocker can be (re)activated afterwards:
```javascript
b.block()
```
So you can use one blocker to execute multiple asynchronous functions in a single synchronous codeflow.
