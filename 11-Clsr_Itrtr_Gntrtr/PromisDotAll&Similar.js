function downloadData(url, time) {
    return (
        new Promise(function download(res, rej) {
            console.log("Downloading Started");
            setTimeout(() => {
                const data = "100101110";
                if(time >= 5000) {
                    console.log(`Error in downloading data ${data} from ${url}`);
                    rej(data);
                } else {
                    console.log(`Data ${data} Downloaded from ${url}`);
                    res(data);
                }
            }, time);
        })
    )
}

let a = downloadData("www.abc.com", 3000);
let b = downloadData("www.hij.com", 6000);
let c = downloadData("www.xyz.com", 2000);
Promise.all([a, b, c]).then(function(value) {console.log(value)}, function(value) {console.log("error for", value)});