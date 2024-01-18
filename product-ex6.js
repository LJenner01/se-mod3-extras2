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

    // ... existing getters and setters ...

    get stockCount() {
        return this.#stockCount;
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
}

module.exports = Product;
