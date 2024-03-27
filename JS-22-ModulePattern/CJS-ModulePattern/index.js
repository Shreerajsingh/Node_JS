/*                          // Simple export
const search = require("./searching");

let res = search.linearSearch([1,2,4,5,6,7,8,9], 6);
console.log(res);
*/

/*                          // Named export
const {linearSearch, binarySearch} = require("./searching");
let res = linearSearch([1,2,4,5,6,7,8,9], 6);
console.log(res);
res = binarySearch([1,2,4,5,6,7,8,9], 6);
console.log(res);
*/


                            // Alias export
const {linearSearch : ls, binarySearch : bs, binarySearch} = require("./searching");
let res = ls([1,2,4,5,6,7,8,9], 6);
console.log(res);
res = binarySearch([1,2,4,5,6,7,8,9], 6);
console.log(res);