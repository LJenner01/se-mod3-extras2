// Fetching data from the API
class ProductService {
    static FetchProducts() {
        return fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => data.map(product => ({
                // Array.map() calls this function on every element in the array and returns a new array with the results
                // We create a new object, with these 3 properties:
                name: product.title,
                price: product.price,
                description: product.description
            })))
            .catch(error => {
                throw new Error(`Failed to fetch products: ${error.message}`);
            });
    }
    static Ex10FetchProducts() {
        return fetch('https://fakestoreapi.com/products333')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => data.map(product => ({
                name: product.title,
                price: product.price,
                description: product.description
            })))
            .catch(error => {
                console.error(`Failed to fetch products: ${error.message}`);
                return []; // Return an empty array in case of error
            });
    }
}
module.exports = ProductService;
