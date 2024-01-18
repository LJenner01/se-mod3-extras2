// test.js
const Product = require('./product');
const ProductService = require('./productService');

// Type test

// EXERCISE 1 test

const testP = new Product("Example Product", 19.99, "This is a sample description.");

console.log(testP.name); // Output: Example Product
testP.price = 29.99;
console.log(testP.price); // Output: 29.99

// Attempting to access a private field directly will result in an error
// console.log(testP.#name); // Syntax Error


// EXERCISE 2 test
const TV = require('./tv');
const Shirt = require('./shirt');

const myTV = new TV("Super HD TV", 1500, "A 75-inch 4K TV", 75);
const myShirt = new Shirt("Casual Shirt", 29.99, "A comfortable cotton shirt", 'L');

console.log(myTV.screenSize); // Output: 75
console.log(myShirt.size); // Output: L

// EXERCISE 3 test
const Book = require('./book');
const myBook = new Book("1984", "George Orwell", 328);
myBook.displayInfo(); // Output: 1984 by George Orwell, 328 pages

// EXERCISE 4 test
const products = [
    new Product("Coffee Maker", 99.99, "Brews coffee"),
    new Product("Toaster", 49.99, "Toasts bread"),
    new Product("Blender", 29.99, "Blends food")
];

// EXERCISE 5 test
products.sort(Product.Compare);

products.forEach(product => console.log(`${product.name}: $${product.price}`));
// This will print the products sorted by price in ascending order.


// EXERCISE 6 TEST
const myProduct = new Product("Laptop", 999.99, "High-end laptop", 10);
console.log(`Initial stock: ${myProduct.stockCount}`);

try {
    myProduct.addToStock(5);
    console.log(`Stock after addition: ${myProduct.stockCount}`);

    myProduct.removeFromStock(3);
    console.log(`Stock after removal: ${myProduct.stockCount}`);
} catch (e) {
    console.error(e.message);
}

// Example of handling an error
try {
    myProduct.removeFromStock(20); // Attempt to remove more than available
} catch (e) {
    console.error(e.message); // Will output: "Insufficient stock available"
}


// EXERCISE 7 TEST
const Cart = require('./cart');

const laptop = new Product("Laptop", 999.99, "High-end laptop");
const phone = new Product("Smartphone", 599.99, "Latest model smartphone");

const ex9Cart = new Cart();
ex9Cart.addItem(laptop, 1);
ex9Cart.addItem(phone, 2);

ex9Cart.displayCart('EXERCISE 7 CART');

// Update quantity
ex9Cart.updateQuantity(phone, 1);
ex9Cart.displayCart('EXERCISE 7 CART');

// Remove item
ex9Cart.removeItem(laptop);
ex9Cart.displayCart('EXERCISE 7 CART');

// Add a bunch of items to sort....
ex9Cart.addItem(new Product("Xbox", 399.99, "High-end gaming"), 1);
ex9Cart.addItem(new Product("Blender", 99.99, "Nutribullet"), 2);
ex9Cart.addItem(new Product("Headphones", 199.99, "Noise-cancelling headphones"), 1);
ex9Cart.displayCart('EXERCISE 7 CART');

// Sort the cart items
ex9Cart.sort();

console.log("\nCart after sorting:");
ex9Cart.displayCart('EXERCISE 7 CART');


// test.js
// EXERCISE Sub step 8.5 test
const ex8Cart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const shirt = new Shirt("Casual Shirt", 50, "Cotton shirt", 'L');

tv.isOnSale = true;
shirt.isOnSale = true;

ex8Cart.addItem(tv, 2);
ex8Cart.addItem(shirt, 3);

// Output should be: "Total cost: $520"
console.log(`Total cost: $${ex8Cart.calculateTotal()}`);

// Apply discount code
try {
    ex8Cart.applyDiscountCode("Hot32");
} catch (error) {
    console.error(error.message);
}

// Output should be: "Discounted Total cost: $468"
console.log(`Discounted Total cost: $${ex8Cart.calculateTotal()}`);


// EXERCISE 9 test
// Fetching products from a live, test API using node-fetch

// Use the ProductService to fetch products => this encapsulates all the logic required to fetch products in a single class
ProductService.FetchProducts()
    .then(processedData => {
        const filledCart = processProducts(processedData);
        console.log("Products added to the cart:");
        filledCart.displayCart('EXERCISE 9 CART');
    })
    .catch(error => {
        console.error(error.message);
    });



// Function to process fetched products
function processProducts(data) {
    const ex9Cart = new Cart();
    data.forEach(productInfo => {

        // Create the Product and generate a random stock count from 0 to 20
        let stockCount = Math.floor(Math.random() * 21);
        const product = new Product(productInfo.name, productInfo.price, productInfo.description,);

        // Adding a random quantity of each product, less than the randomly generated stock count
        let qty = Math.floor(Math.random() * stockCount) + 1;
        ex9Cart.addItem(product, qty);
    });
    return ex9Cart;
}


