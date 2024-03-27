/*
function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess; // we are not calling the function, we are just returning
}

let res = process(); // this line calls the function, which return another function

console.log(res());
console.log(res());
console.log(res());
*/

// --------------------------------------------------------------------------------------------------------- //

/*
function DO(task) {
  // local to DO is task
  setTimeout(function exec() {
    console.log(task);
  }, 2000);
}

DO();
console.log("END");
*/

// --------------------------------------------------------------------------------------------------------- //

/*
function process() {
  let i = 0;
  let j = [1, 2, 3];
  let k = 10; // it doesn't remember k in Scopes as its not used
  function innerProcess() {
    i += 1;
    console.log(j);
    return i;
  }
  return innerProcess;
}

x = process();
*/