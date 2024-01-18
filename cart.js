const Product = require('./product');

class Cart {
    #discountCodes; // Private field for discount codes

    constructor() {
        this.items = []; // Each item will be an object { product: Product, quantity: number }
        this.#discountCodes = [
            { code: "Hot32", isApplied: false, discountPercentage: 10 },
            // ... add more discount codes as needed ...
        ];
    }

    addItem(product, quantity) {
        if (!(product instanceof Product)) {
            throw new Error("Only Product instances can be added to the cart");
        }
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }

        const existingItem = this.items.find(item => item.product === product);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(product) {
        this.items = this.items.filter(item => item.product !== product);
    }

    updateQuantity(product, quantity) {
        if (quantity <= 0) {
            this.removeItem(product);
        } else {
            const item = this.items.find(item => item.product === product);
            if (item) {
                item.quantity = quantity;
            }
        }
    }

    displayCart(cartName) {
        console.log(`\n**** ${cartName} CONTENTS ****`);

        this.items.forEach(item => {
            console.log(`${item.product.name} - $${item.product.price} x ${item.quantity}`);
        });
        console.log(`Total Cost: $${this.calculateTotal()}`);
    }

    sort() {
        this.items.sort((itemA, itemB) => Product.Compare(itemA.product, itemB.product));
    }

    calculateTotal() {
        let total = 0;
        for (const item of this.items) {
            let price = item.product.isOnSale ? item.product.constructor.getSalePrice() : item.product.price;
            const appliedDiscounts = this.#discountCodes.filter(dc => dc.isApplied);
            appliedDiscounts.forEach(dc => {
                price = item.product.applyDiscount(dc.discountPercentage);
            });
            total += price * item.quantity;
        }
        return total;
    }

    applyDiscountCode(code) {
        const discountCode = this.#discountCodes.find(dc => dc.code === code);
        if (discountCode) {
            discountCode.isApplied = true;
        } else {
            throw new Error("Invalid discount code");
        }
    }
}

module.exports = Cart;
