// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.addtocart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(price);
    });
});

function addToCart(price) {
    // Here you can implement your own logic to add items to the cart
    console.log(`Added item to cart. Price: ${price}`);
    // Example: You might want to update a cart total or display a message
}
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addtocart');
    let totalAmount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseInt(button.getAttribute('data-price'));
            totalAmount += price;
            document.getElementById('total-amount').textContent = totalAmount;
        });
    });
});