document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('products');

    async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
            `;

            productContainer.appendChild(productCard);
        });
    }

    // Fetch and display products when the page loads
    fetchProducts();
});
