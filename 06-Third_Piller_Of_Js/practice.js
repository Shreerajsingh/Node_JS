//                          {LEC : 1}

// HOF -> Higher Order Function takes another as an arg or return a function as args.

function fun(n, fn) {
    /*
    *   n  => number
    *   fn => function
    */
   console.log(n);
   fn();
}

fun(10, function expr() {
    console.log("I am function expression passed in function fun.");
});

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 2}

/*
    Arrays are also custom objs in JS
    Index of element is the key and the element itself is the value
    ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}
*/
/*
  * Map function
    Map is a hof available with arrays
    It takes a function as an args -> f
    It returns an array in which every value is actually populated by calling
        function f with orignal element as argument.
*/

let arr = [1, 2, 3, 4, 5];

function square(el) {
    return el*el;
}

const result = arr.map(square); // square is a funct passed as a args

console.log(result);

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 3}

arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // Unsorted

arr.sort();  // It sorts the given array in Lexicographical Order

console.log(arr); // see

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 5}

/*
    If we are passing function with 2 args in map
    then first arg will be accessing the actual val
    and second arg will be accessing index of that val
*/

function print(el, idx) {
    return `Element at index ${idx} is ${el}`;
}

let res = arr.map(print); 

console.log(res);

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 6}

function manualMap(nums, fn) {
    res = [];
    for(i = 0; i < nums.length; i++) {
        res.push(fn(nums[i], i));
    }
    return res;
}

let values = manualMap(arr, print);

console.log(values);

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 7}

arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3]; // Unsorted

// Sort arr in inc ordr

arr.sort(function(a, b) {
    // Sort is HOF, it takes comparator function as argument
    return a - b;
    // If a - b < 0 (a-b is negative) means a is less than b, hence a is placed befor b
    // and vice versa for b is a - b > 0
});

console.log(arr);

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 8}

/*
* Filter function

* Filter is also a higher order function

* Filter also loops over the array element

* there is one special thing about filter, i.e. the argument function f which we have to pass inside

* filter should always return a boolean, otherwise output will be converted to a boolean

* Filter loops over every element, passes that element in the argument function and then if the output of the this function call is true, then it stores the original element in a new array otherwise

* doesn't add this add element to the array
*/

arr = [1, 2, 3, 4, 5];

function eveOdd(n) {
    return n%2 == 0;
}

val = arr.filter(eveOdd);

console.log(val);

console.log("---------------------------------------------------------------------------------");

//                          {LEC : 9}

/*
* reduce is a higher order function available for arrays

* reduce also takes a function f as an argument,

* what reduce does is, it one by one goes to every element of the array,

* say the current element is arr[i]

* reduce will pass this element to the function f, and accumulate the result of further function calls

* with this particular result
*/

arr = [1,2,3,4,5,6];

function sum(prevResult, currValue) {

return prevResult + currValue;

}

res = arr.reduce(sum);

console.log(res);

// USE CASE of REDUCE

//  Cart→ [iphone {price: 1000000, name: "Iphone"}, case {price: 500, name: "backcove"}, tempered glass {price: 300, name: tempered glass}]

function addPrices(prevResult, currValue) {
    console.log("#", prevResult, currValue);
    let newPrice = prevResult.price + currValue.price;
    return {price : newPrice};
}


let cart = [{price: 1000000, name: "Iphone"}, {price: 500, name: "backcover"}, {price: 300, name: "tempered glass"}];

const totalPrice = cart.reduce(addPrices);

console.log(totalPrice.price);