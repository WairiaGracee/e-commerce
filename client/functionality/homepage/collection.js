document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('http://localhost:5001/products')
        .then(response => response.json())
        .then(products => {
        // Limit to first 4 products
        const limitedProducts = products.slice(0, 4);

        limitedProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'products-card';

            card.innerHTML = `
            <div class="img-card">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="prod-desc">
                <p>${product.name}</p>
                <p>Kshs ${product.price}</p>
            </div>
            `;

            productList.appendChild(card);
        });
        })
        .catch(error => {
        console.error('Failed to fetch products:', error);
    });
});
