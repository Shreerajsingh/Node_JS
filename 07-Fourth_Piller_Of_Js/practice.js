//                                  {LEC : 1 Callback}

//  Callbacks are functions passed as arguments to other functions, to be executed later upon completion of some operation.
//  Example: Using setTimeout function in JavaScript to execute a callback after a specified delay.

console.log("Start");
setTimeout(() => {
    console.log("Inside callback");
}, 1000);
console.log("End");


console.log("---------------------------------------------------------------------------------");

//                                {LEC : 3 Callback Hell}

//  Understanding Callback Hell: Callback hell refers to the nesting of multiple asynchronous callbacks, leading to complex and hard-to-read code.
//  Example: Nested AJAX requests
getUser(userId, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log(comments);
        });
    });
});


console.log("---------------------------------------------------------------------------------");

//                              {LEC : 4  Inversion Of Controle}

