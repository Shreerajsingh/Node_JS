const fs = require('fs')    // Require File Symptom

fs.readFile("D:/WebDevX/Delta/Course/LC21-EventLoop_JS/readme.md", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

