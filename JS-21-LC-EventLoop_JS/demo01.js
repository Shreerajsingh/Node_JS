a = 10;
setTimeout(() => {console.log("Printing from setTimeout 1")},0);
Promise.resolve().then(() => {console.log("Printing from Promise")});
process.nextTick(() => {console.log("Printing from nextTick 1")});
process.nextTick(() => {console.log("Printing from nextTick 2")});
process.nextTick(() => {console.log("Printing from nextTick 3")});
setTimeout(() => {console.log("Printing from setTimeout 2")},0);
console.log(a);
