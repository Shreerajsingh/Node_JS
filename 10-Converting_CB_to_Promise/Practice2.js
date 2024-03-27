function downloadData(url) {
    return new Promise(function exec(res, rej) {
        console.log("downloading data from", url);
        const data = "NewData";
        setTimeout(function() {
            res(data);
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
    }
).then (
    function resolveHandler(file) {
        console.log("now we are going to upload saved data to", file);
        return uploadFile("www.abc.com",file);
    }
).then (
    function resolveHandler(value) {
        console.log("Successfully uploaded file", value);
    }
)