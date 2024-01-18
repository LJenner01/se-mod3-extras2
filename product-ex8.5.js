class Product {
    // ... existing private fields ...

    #isOnSale = false;

    // ... existing constructor, getters, and setters ...

    get isOnSale() {
        return this.#isOnSale;
    }

    set isOnSale(value) {
        this.#isOnSale = Boolean(value);
    }

    // This method will be overridden in child classes
    static getSalePrice() {
        throw new Error("getSalePrice method needs to be implemented in child classes");
    }
}

module.exports = Product;
