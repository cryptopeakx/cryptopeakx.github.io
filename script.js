javascript

async function fetchWLFIPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=world-liberty-financial&vs_currencies=usd');
        const data = await response.json();
        const price = data['world-liberty-financial'].usd;
        document.getElementById('price').textContent = `$${price.toFixed(2)}`;
        document.getElementById('last-updated').textContent = new Date().toLocaleString();
    } catch (error) {
        document.getElementById('price').textContent = 'Error fetching price';
        console.error('Error:', error);
    }
}

// Fetch price on page load
fetchWLFIPrice();

// Update price every 30 seconds
setInterval(fetchWLFIPrice, 30000);

