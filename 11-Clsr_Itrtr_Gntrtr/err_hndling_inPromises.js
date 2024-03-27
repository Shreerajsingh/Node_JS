/*
function downloadData(url) {
    return new Promise(function exec(res, rej) {
        console.log("downloading data from", url);
        const data = "NewData";
        setTimeout(function() {
            rej(data);          // Rejecting Promise to handle error
        }, 5000);
    })
}
function saveData(data) {
    return new Promise(function exec(res, rej) {
        console.log("Now saving the data", data);
        const newFile = "file_x";
        setTimeout(function() {
            res(newFile);
        }, 3000);
    })
}
function uploadFile(newurl, file) {
    return new Promise(function exec(res, rej) {
        console.log("Now uploading the file... on",newurl);
        setTimeout(function() {
            res(file);
        }, 7000);
    })
}

downloadData("www.xyz.com").then(
    function resolveHandler(data) {
        console.log("now we are going to process data", data);
        return saveData(data);
    },
    function downloadRejection(data) {
        console.log("Download rejected", data);
        throw data;
    }
).then (
    function resolveHandler(file) {
        console.log("now we are going to upload saved data to", file);
        return uploadFile("www.abc.com",file);
    },
    function writeRejection(value) {
        console.log("Write rejected", value);
        throw value;
    }
).then (
    function resolveHandler(value) {
        console.log("Successfully uploaded file", value);
    },
    function uploadRejection(data) {
        console.log("Upload rejected", data);
    }
)
*/

// Firstly run the above code then see a difference b/w output of above and below's code,
// and yes try removing the rejection handler in above code.

function downloadData(url) {
    return new Promise(function exec(res, rej) {
        console.log("downloading data from", url);
        const data = "NewData";
        setTimeout(function() {
            rej(data);          // Rejecting Promise to handle error
        }, 5000);
    })
}
function saveData(data) {
    return new Promise(function exec(res, rej) {
        console.log("Now saving the data", data);
        const newFile = "file_x";
        setTimeout(function() {
            res(newFile);
        }, 3000);
    })
}
function uploadFile(newurl, file) {
    return new Promise(function exec(res, rej) {
        console.log("Now uploading the file... on",newurl);
        setTimeout(function() {
            res(file);
        }, 7000);
    })
}

downloadData("www.xyz.com").then(
    function resolveHandler(data) {
        console.log("now we are going to process data", data);
        return saveData(data);
    },
).then (
    function resolveHandler(file) {
        console.log("now we are going to upload saved data to", file);
        return uploadFile("www.abc.com",file);
    },
).then (
    function resolveHandler(value) {
        console.log("Successfully uploaded file", value);
    },
).catch(function f(err) {
    console.log("Error occured",err);
}).finally(function() {
    console.log("Executing Finally");
})