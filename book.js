const Product = require('./Product');

class Book extends Product {
    static #salePrice = 200; // Static sale price for all TV instances

    constructor(title, price, description, author, pages) {
        super(title, price, description);  // Call the parent class constructor
        this.author = author;
        this.pages = pages;
    }

    static getSalePrice() {
        return Book.#salePrice;
    }

    displayInfo() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
    }
}

module.exports = Book;
