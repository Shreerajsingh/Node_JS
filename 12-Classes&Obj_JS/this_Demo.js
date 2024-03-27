/*
let obj = {
    a : 10,
    b : 20,
    Operation : "Addition",
    display : function() { console.log(this) }
}

obj.display();
*/

let obj = {
    arr : [
        add = {
            a : 10,
            b : 20,
            Operation : "Addition",
            calculate : function() {
                let res = this.a+this.b;
                let fun = function() {
                    console.log(this);
                }
                fun();
            }
        },
        sub =  {
            a : 1,
            b : 2,
            Operation : "Substraction",
            calculate : function() {
                let res = this.a-this.b;
                let fun = () => {
                    console.log(this);
                }
                fun();
            }
        },
        mul = {
            a : 5,
            b : 10,
            Operation : "Multiplication",
            calculate : () => {
                let res = this.a*this.b;
                let fun = () => {
                    console.log(this);
                }
                fun();
            }
        }

    ]
}

obj.arr[0].calculate();
obj.arr[1].calculate();
obj.arr[2].calculate();