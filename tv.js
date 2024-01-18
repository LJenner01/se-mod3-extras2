const Product = require('./product');

class TV extends Product {
    #screenSize;
    static #salePrice = 200; // Static sale price for all TV instances

    constructor(name, price, description, screenSize) {
        super(name, price, description);
        this.#screenSize = screenSize;
    }

    get screenSize() {
        return this.#screenSize;
    }

    set screenSize(newScreenSize) {
        if (newScreenSize <= 0) {
            throw new Error("Screen size must be a positive number");
        }
        this.#screenSize = newScreenSize;
    }

    static getSalePrice() {
        return TV.#salePrice;
    }
}

module.exports = TV;
