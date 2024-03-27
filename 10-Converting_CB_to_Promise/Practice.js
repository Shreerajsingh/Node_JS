function downloadData(url, cb) {
    console.log("downloading data from", url);
    const data = "NewData";
    setTimeout(function() {
        cb(data);
    }, 5000);
}
function saveData(data, cb) {
    console.log("Now saving the data", data);
    const newFile = "file_x";
    setTimeout(function() {
        cb(newFile);
    }, 3000);
}
function uploadFile(newurl, file, cb) {
    console.log("Now uploading the file... on",newurl);
    setTimeout(function() {
        cb(file);
    }, 7000);
}

downloadData("www.xyz.com", function ProcessData(data) {
    console.log("now we are going to process data");
    saveData(data, function uploadSaved(file) {
        console.log("now we are going to upload saved data");
        uploadFile("www.abc.com", file, function ProcessUpload(file) {
            console.log("Successfully uploaded file", file);
        })
    })
});

