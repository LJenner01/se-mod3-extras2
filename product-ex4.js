class Product {
    constructor(name, price, description) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    // ... existing getters and setters ...

    static Compare(productA, productB) {
        if (productA.price > productB.price) {
            return `${productA.name} is more expensive than ${productB.name}`;
        } else if (productA.price < productB.price) {
            return `${productA.name} is less expensive than ${productB.name}`;
        } else {
            return `${productA.name} and ${productB.name} have the same price`;
        }
    }
}

module.exports = Product;
