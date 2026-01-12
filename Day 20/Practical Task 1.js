class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    discountedPrice(discountPercent) {
        return this.price - (this.price * discountPercent / 100);
    }
}
let p1 = new Product("Mobile", 20000);
console.log("Discounted Price:", p1.discountedPrice(10));