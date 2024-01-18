const Product = require('./Product');

class TV extends Product {
    static #salePrice = 1200; // Static sale price for all TV instances

    // ... existing constructor and methods ...

    static getSalePrice() {
        return TV.#salePrice;
    }
}

module.exports = TV;


let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation code here
    if (/* operation is successful */) {
        resolve(value); // Resolve the promise with a value
    } else {
        reject(error); // Reject the promise with an error
    }
});

myPromise.then((value) => {
    // Handle the resolved value
}).catch((error) => {
    // Handle any error
});