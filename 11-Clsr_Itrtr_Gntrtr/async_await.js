/*
async function foo() {
    let x = await 1;
    return x;
}
 
const promise = foo();
 
promise.then(function(resolvedValue) {
    console.log(`Promise { <fulfilled>: ${resolvedValue}}`);
});
*/


/*
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

async function step() {
    console.log("Start step");
    let downloaddata = await downloadData("www.xyz.com");
    console.log("Data downloaded in", downloaddata);
    let writtenfile = await saveData(downloaddata);
    console.log("File written in",writtenfile);
    let uploadResponse = await uploadFile("www.drive.google.com", writtenfile);
    console.log("Upload Response is",uploadResponse);
    return uploadResponse
}


step();
console.log("Outside");
*/


