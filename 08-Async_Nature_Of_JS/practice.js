/*
console.log("Hi we are starting");

for(let i = 0; i < 10000000000; i++) {
	//some task
}

console.log("End");
// Run this code and u will find a delay in printing "End".
*/
/* ////////////////////////////////////////////////////////////

console.log("Hi");
setTimeout(function () { console.log("Time over"); }, 5000); // 5 sec
console.log("By");

////////////////////////////////////////////////////////////*/


/*
function timeConsumingByLoop() {
  console.log("Loop start");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("Loop ends");
}

function timeConsumingByRunTimeFeature0() {
  console.log("Started timer 0");
  setTimeout(function exec0() {
    console.log("Completed the timer0");
    for (let i = 0; i < 1000000; i++) {
      // some task
    }
  }, 5000); // 5 sec timer
}
function timeConsumingByRunTimeFeature1() {
  console.log("Started timer 1");
  setTimeout(function exec1() {
    console.log("Completed the timer1");
  }, 0); // 0 sec timer
}
function timeConsumingByRunTimeFeature2() {
  console.log("Started timer 2");
  setTimeout(function exec2() {
    console.log("Completed the timer2");
  }, 200); // 2ms timer
}
console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();

console.log("Bye");
*/

/////////////////////////////////////////////////////////\

console.log(1);
setTimeout(function exec() {
    console.log("Time Over");
}, 0);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
function fun() {
    console.log(12345);
}
fun();
for(var i = 0; i < 500; i++) {
    // Task
}
console.log(i);