console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
    process.nextTick(() => console.log("Next tick 1")); // cb will be waiting in nextTick queue
    Promise.resolve().then(() => {console.log("Promise 1")});
    for(let i = 0; i < 1000000000; i++) {
        // Lamao xd
    }
}, 0); //cb will be waiting in timer queue

Promise.resolve().then(() => console.log("Promise 2")); //cb will be waiting in promise queue

process.nextTick(() => console.log("Next tick 2")); //cb will be waiting in nextTick queue

setTimeout(() => console.log("Timer 2"), 0); //cb will be waiting in timer queue

console.log("End");