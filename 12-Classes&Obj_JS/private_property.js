class Product {
    #name
    #price
    discription
    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.discription = d;
    }
    display() {
        console.log(`Product ${this.#name} is ${this.discription} of ${this.#price}`);
    }

    set name(n) {
        if(typeof(n) != 'string') {
            console.log("Invalid name passed");
            return
        }
        this.#name = n;
    }

    get name() {
        return this.#name;
    }

    set price(p) {
        if(p < 0) {
            return;
        }
        this.#price = p;
    }

    get price() {
        return this.#price;
    }
}


let obj = new Product("Redmi Note 10", 30000, "Smartphone");
console.log(obj.name);
obj.name = -1;
console.log(obj.name);
obj.price = -5;
console.log(obj.price);