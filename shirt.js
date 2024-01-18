const Product = require('./product');

class Shirt extends Product {
    #size;
    static #salePrice = 40; // Static sale price for all Shirt instances

    constructor(name, price, description, size) {
        super(name, price, description);
        this.#size = size;
    }

    get size() {
        return this.#size;
    }

    static getSalePrice() {
        return Shirt.#salePrice;
    }

    set size(newSize) {
        const validSizes = ['S', 'M', 'L', 'XL'];
        if (!validSizes.includes(newSize)) {
            throw new Error("Invalid size. Valid sizes are S, M, L, XL.");
        }
        this.#size = newSize;
    }
}

module.exports = Shirt;
