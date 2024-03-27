/*
function fetchElements(arr) {
    let idx = 0;
    function next() {
        if(idx == arr.length) {
            return undefined;
        }
        return arr[idx++];
    }
    return next;
}

let res = fetchElements([1,2,3,4,5,100]);

console.log(res());
console.log(res());
console.log(res());
*/


function fetchElements(arr) {
    let idx = 0;
    function next() {
        if(idx == arr.length) {
            return {value : undefined, done : true};
        }
        return {value : arr[idx++], done : false};
    }
    return {next};
}

let iterator = fetchElements([1,2,3,4,5,100]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());