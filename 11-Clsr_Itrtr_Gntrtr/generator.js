/*
function* generator() {
    console.log("start");
    yield(1);
    yield(2);
    console.log("Mid");
    yield(3);
    yield(4);
    console.log("end");
}

let x = generator();

console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
*/


/*
function* generator() {
    console.log("start");
    let x = 10;
    yield 10;
    console.log("1st yield completed");
    y = x + (yield 30);
    console.log("value of y after 2nd yield is ",y);
    yield 80;
}

let x = generator();

console.log(x.next());
console.log(x.next());
console.log(x.next(11));
// console.log(x.next());
*/

function downloadData(url) {
    return new Promise(function exec(res, rej) {
        console.log("downloading data from", url);
        const data = "NewData";
        setTimeout(function() {
            console.log("Downloading Completed");
            res(data);
        }, 5000);
    })
}
function saveData(data) {
    return new Promise(function exec(res, rej) {
        console.log("Now saving the data", data);
        setTimeout(function() {
            console.log("Completed writing the data in file");
            const newFile = "file.txt";
            res(newFile);
        }, 3000);
    })
}
function uploadFile(newurl, file) {
    return new Promise(function exec(res, rej) {
        console.log(`Now uploading the file ${file} on`,newurl);
        setTimeout(function() {
            console.log("Successfully Uploaded the file!");
            let response = "Success";
            res(response);
        }, 7000);
    })
}

function* step() {
    let downloaddata = yield downloadData("www.xyz.com");
    console.log("Data downloaded in", downloaddata);
    let writtenfile = yield saveData(downloaddata);
    console.log("File written in",writtenfile);
    let uploadResponse = yield uploadFile("www.drive.google.com", writtenfile);
    console.log("Upload Response is",uploadResponse);
    return uploadResponse
}

function doAfterReciving(value) {
    let x = iter.next(value);
    if(x.done) return;
    x.value.then(doAfterReciving);
}

let iter = step();

const future = iter.next();     // { value: downloadData(...), done: false }

// future.value.then(doAfterReciving);
//          or
future.value.then(function resolveHandler(value) {
   doAfterReciving(value);
});