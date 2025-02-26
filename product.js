document.getElementById('addToCart').addEventListener('click', async function() {
    const button = this;
    const errorMessage = document.getElementById('error-message');

    button.disabled = true;
    button.textContent = 'Adding to cart...';

    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch('https://httpstat.us/500');

        if (!response.ok) {
            throw new Error('Failed to add to cart');
        }
    } catch (error) {
        errorMessage.textContent = 'Error: Could not add to cart. Please try again later.';
        errorMessage.style.display = 'block';
    } finally {
        button.disabled = false;
        button.textContent = 'Add to Cart';
    }
});
