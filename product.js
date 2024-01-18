// Product.js
class Product {
    #name;
    #price;
    #description;
    #stockCount;  // Private field for stock count

    constructor(name, price, description, stockCount = 0) {
        this.#name = name;
        this.#price = price;
        this.#description = description;
        this.#stockCount = stockCount;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (!newName) {
            throw new Error("Name cannot be empty");
        }
        this.#name = newName;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (newPrice < 0) {
            throw new Error("Price must be a positive number");
        }
        this.#price = newPrice;
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    get stockCount() {
        return this.#stockCount;
    }

    static Compare(productA, productB) {
        if (productA.price > productB.price) {
            //console.log(`${productA.name} is more expensive than ${productB.name}`);
            return 1;
        } else if (productA.price < productB.price) {
            //console.log(`${productA.name} is less expensive than ${productB.name}`);
            return -1;
        } else {
            //console.log(`${productA.name} and ${productB.name} have the same price`);
            return 0;
        }
    }


    addToStock(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        this.#stockCount += amount;
    }

    removeFromStock(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        if (this.#stockCount < amount) {
            throw new Error("Insufficient stock available");
        }
        this.#stockCount -= amount;
    }

    // This method will be overridden in child classes
    static getSalePrice() {
        throw new Error("getSalePrice method needs to be implemented in child classes");
    }

    applyDiscount(discountPercentage) {
        if (discountPercentage < 0 || discountPercentage > 100) {
            throw new Error("Invalid discount percentage");
        }
        // Need to consider if the Product is already on sale or not
        const basePrice = this.isOnSale ? this.constructor.getSalePrice() : this.price;
        return basePrice * (1 - discountPercentage / 100);
    }
}

module.exports = Product;
