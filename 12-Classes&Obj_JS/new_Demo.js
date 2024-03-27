class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("Description:", this.description);
    }
}

let obj = new Product("Redmi Note 10", 30000, "Smartphone");
obj.display();
console.log(obj);