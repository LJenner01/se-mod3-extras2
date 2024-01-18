const Product = require('./Product');
const TV = require('./TV');
const Shirt = require('./Shirt');
const Book = require('./Book');
const Cart = require('./Cart');

// Initialize Cart and Products
const cart = new Cart();
const tv = new TV("Super HD TV", 1500, "75-inch 4K TV", 75);
const tshirt = new Shirt("Casual Shirt", 29.99, "Cotton shirt", 'L');
const book = new Book("1984", 17, "A great book", "George Orwell");

// User adds 3 TVs and 1 T-shirt to the Cart
cart.addItem(tv, 3);
cart.addItem(tshirt, 1);
console.log("Cart after adding 3 TVs and 1 T-shirt:");
cart.displayCart();

// User clicks ‘Sort’ on the Cart
cart.sort();
console.log("\nCart after sorting:");
cart.displayCart(); // Expected Result: Shirts should now be at the top

// User enters a valid discount code
try {
    cart.applyDiscountCode("Hot32"); // Assuming this code gives a 15% discount
} catch (error) {
    console.error(error.message);
}
console.log("\nCart after applying discount code:");
cart.displayCart(); // Expected Result: Cart item prices should change. Cart total should be discounted.

// User adds 4 books to their Cart (books are on sale)
book.isOnSale = true;
cart.addItem(book, 4);
console.log("\nCart after adding 4 books on sale:");
cart.displayCart();

// User removes 2 TVs from their Cart
cart.updateQuantity(tv, 1); // Updating the quantity of TVs to 1
console.log("\nCart after removing 2 TVs:");
cart.displayCart();

// User clicks ‘Sort’ on the Cart again
cart.sort();
console.log("\nCart after sorting again:");
cart.displayCart();
