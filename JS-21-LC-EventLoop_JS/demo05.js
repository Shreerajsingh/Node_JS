const fs = require('fs')    // Require File Symptom

fs.readFile("D:/WebDevX/Delta/Course/LC21-EventLoop_JS/readme.md", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

process.nextTick(() => console.log("Next Tick 1"))

Promise.resolve().then(() => console.log("Promise 1"))

setTimeout(() => console.log("Timer 1"));

setImmediate(() => console.log("Immediate Callback"));

for(let i = 0; i < 1000000000; i++) {}