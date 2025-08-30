// Define setupMobileNav function first
function setupMobileNav() {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuIcon && navLinks) {
        mobileMenuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
}

// A single, consolidated DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function () {
    // Functions that should run on every page
    updateCartDisplay();
    setupMobileNav(); // Now this function is guaranteed to exist

    createWhatsAppButton();

    // Functions that should only run on pages with a product grid
    if (document.getElementById('productGrid')) {
        loadProducts();
        if (typeof populateCategoryFilter === 'function') {
            populateCategoryFilter();
        }
        applyFilters();
    }

    // Conditional event listeners for filters
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('input', applyFilters);
    }

    const ratingFilter = document.getElementById('ratingFilter');
    if (ratingFilter) {
        ratingFilter.addEventListener('input', applyFilters);
    }
});

// The rest of your functions (loadProducts, applyFilters, etc.) should come after this block.

// Product data
const products = [
    {
        id: 1,
        name: "shadowfang demascus dagger",
        price: 99.99,
        description: "Hand-forged with rich Damascus steel, the Shadowfang features a sharp curved blade and a dark wooden grip. Ideal for collectors and hunters, it blends elegance with hauwguwgieueiwgiwwgwuevwdijwjdowhdiwdwLinkedIn Premium offers various subscription plans depending on your professional needs. The Premium Business plan in the UK typically costs around £44.99 per month if billed monthly. However, if you choose annual billing, the cost comes to approximately £576 per year, which breaks down to about £48 per month. Many users confuse this with the Sales Navigator Core plan, which costs £69.99 per month. This higher-tier plan is designed for professionals focused on advanced lead generation, sales prospecting, and customer relationship management     precision.",
        images: ["image4.jpg", "image1.jpg", "image3.jpg"],
        category: "tactical"
    },
    {
        id: 2,
        name: "crimson talon curved dagger",
        price: 59.99,
        description: "Hand-forged with rich Damascus steel, the Shadowfang features a sharp curved blade and a dark wooden grip. Ideal for collectors and hunters, it blends elegance with hauwguwgieueiwgiwwgwuevwdijwjdowhdiwdwLinkedIn Premium offers various subscription plans depending on your professional needs. The Premium Business plan in the UK typically costs around £44.99 per month if billed monthly. However, if you choose annual billing, the cost comes to approximately £576 per year, which breaks down to about £48 per month. Many users confuse this with the Sales Navigator Core plan, which costs £69.99 per month. This higher-tier plan is designed for professionals focused on advanced lead generation, sales prospecting, and customer relationship management     precision.",
        image: "image26.jpg",
        category: "ceremonial"
    },
    {
        id: 3,
        name: "scorpion stringer trible dagger",
        price: 389.99,
        description: "Hand-forged with rich Damascus steel, the Shadowfang features a sharp curved blade and a dark wooden grip. Ideal for collectors and hunters, it blends elegance with hauwguwgieueiwgiwwgwuevwdijwjdowhdiwdwLinkedIn Premium offers various subscription plans depending on your professional needs. The Premium Business plan in the UK typically costs around £44.99 per month if billed monthly. However, if you choose annual billing, the cost comes to approximately £576 per year, which breaks down to about £48 per month. Many users confuse this with the Sales Navigator Core plan, which costs £69.99 per month. This higher-tier plan is designed for professionals focused on advanced lead generation, sales prospecting, and customer relationship management     precision.",
        image: "image21.jpg",
        category: "historical"
    },
    {
        id: 4,
        name: "serpents-fang dagger",
        price: 349.99,
        description: "Hand-forged with rich Damascus steel, the Shadowfang features a sharp curved blade and a dark wooden grip. Ideal for collectors and hunters, it blends elegance with hauwguwgieueiwgiwwgwuevwdijwjdowhdiwdwLinkedIn Premium offers various subscription plans depending on your professional needs. The Premium Business plan in the UK typically costs around £44.99 per month if billed monthly. However, if you choose annual billing, the cost comes to approximately £576 per year, which breaks down to about £48 per month. Many users confuse this with the Sales Navigator Core plan, which costs £69.99 per month. This higher-tier plan is designed for professionals focused on advanced lead generation, sales prospecting, and customer relationship management     precision.",
        image: "image13.jpg",
        category: "elegant"
    },
    {
        id: 5,
        name: "elite tactical dagger",
        price: 279.99,
        description: "Combining South Asian design with tactical structure, the Talwar Elite is as powerful as it is graceful. Lightweight, razor-sharp, and battle-ready.",
        image: "image14.jpg",
        category: "tactical"
    },
    {
        id: 6,
        name: "drogon's breath forge dagger",
        price: 599.99,
        description: "Premium collector's piece with gold-plated accents and hand-carved phoenix motif.",
        image: "image15.jpg",
        category: "premium"
    },
    {
        id: 7,
        name: "midnight crescent dagger",
        price: 349.99,
        description: "Flame-forged and hand-etched, the Dragon’s Breath dagger mimics ancient eastern fire-forging techniques. A rare addition to any serious collection.",
        image: "image16.jpg",
        category: "elegant"
    },
    {
        id: 8,
        name: "Hunter's Claw damascus dagger",
        price: 279.99,
        description: "With a sweeping curve and dark steel tones, this dagger reflects moonlit elegance. Built for silent strength and high performance.",
        image: "image17.jpg",
        category: "tactical"
    },
    {
        id: 9,
        name: "Desert Eagle Guarded Dagger",
        price: 599.99,
        description: "Compact and ferocious, this piece is a hunter’s companion in the wild. Crafted for durability and stealth.",
        image: "image18.jpg",
        category: "premium"
    },
    {
        id: 10,
        name: "velari forge dagger",
        price: 99.99,
        description: "Premium collector's piece with gold-plated accents and hand-carved phoenix motif.",
        image: "image19.jpg",
        category: "premium"
    },
    {
        id: 11,
        name: "dagger of the phoenix",
        price: 399.99,
        description: "Premium collector's piece with gold-plated accents and hand-carved phoenix motif.",
        image: "image5.jpg",
        category: "premium"
    },
    {
        id: 12,
        name: "Dragon's Fang",
        price: 549.99,
        description: "Premium collector's piece with gold-plated accents and hand-carved phoenix motif.",
        image: "image2.jpg",
        category: "premium"
    }
];
// Add this at the top of your script.js
function openImageModal(productId) {
    window.location.href = `imagemodal.html?id=${productId}`;
}

// Add this to the TOP of your script.js file, before any other PayPal code

// Dynamic PayPal SDK Loader
function loadPayPalSDK() {
    return new Promise((resolve, reject) => {
        // Check if PayPal is already loaded
        if (typeof paypal !== 'undefined') {
            console.log('✅ PayPal SDK already loaded');
            resolve();
            return;
        }

        // Check if script is already being loaded
        if (document.querySelector('script[src*="paypal.com/sdk"]')) {
            console.log('🔄 PayPal SDK script already exists, waiting...');
            // Wait for it to load
            let attempts = 0;
            const checkInterval = setInterval(() => {
                attempts++;
                if (typeof paypal !== 'undefined') {
                    console.log('✅ PayPal SDK loaded after waiting');
                    clearInterval(checkInterval);
                    resolve();
                } else if (attempts > 50) { // 10 seconds timeout
                    console.error('❌ PayPal SDK failed to load after waiting');
                    clearInterval(checkInterval);
                    reject(new Error('PayPal SDK timeout'));
                }
            }, 200);
            return;
        }

        // Create and load the script
        console.log('🔄 Loading PayPal SDK dynamically...');
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD&disable-funding=credit,card';
        script.async = true;

        script.onload = () => {
            console.log('✅ PayPal SDK loaded successfully');
            resolve();
        };

        script.onerror = (error) => {
            console.error('❌ Failed to load PayPal SDK:', error);
            reject(error);
        };

        document.head.appendChild(script);
    });
}

// Initialize PayPal when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Load PayPal SDK
    loadPayPalSDK().catch(error => {
        console.error('PayPal SDK loading failed:', error);
    });
});



// Add this to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('productGrid')) {
        displayFilteredProducts();
    }
    updateCartCount();
});
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Shopping Cart
let cart = [];
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Functions that should run on every page
    updateCartDisplay();
    setupMobileNav();

    // Functions that should only run on pages with a product grid
    if (document.getElementById('productGrid')) {
        loadProducts();
        if (typeof populateCategoryFilter === 'function') {
            populateCategoryFilter();
        }
        applyFilters();
    }

    // Event listeners for filters should also be conditional
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('input', applyFilters);
    }

    const ratingFilter = document.getElementById('ratingFilter');
    if (ratingFilter) {
        ratingFilter.addEventListener('input', applyFilters);
    }
});

// Load products into the grid

// In public/script.js

function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) {
        return; // This is normal for pages without a product grid.
    }
    console.log("Debug: 'loadProducts' has started. If you see this, the function is running.");
    productGrid.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';


        productCard.innerHTML = `
        <div class="product-image" onclick="openImageModal(${product.id})" style="cursor:pointer;">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3 class="product-name" onclick="openImageModal(${product.id})" style="cursor:pointer;">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <p class="product-description">${product.description}</p>
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id});">Add to Cart</button>
    `;
        productGrid.appendChild(productCard);
    });
    console.log("Debug: 'loadProducts' has finished. All product cards are on the page.");
}

// This function navigates to the product page.
function openImageModal(productId) {
    window.location.href = `imagemodal.html?id=${productId}`;
}

// Make sure your addToCart function stops the click event from propagating
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        toggleCart(); // <-- This opens the cart modal
    }
}


// Update cart display (add badge update)
function updateCartDisplay() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
        cartCountEl.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Only update cartItems and cartTotal if they exist
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = 'Total: $0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <div>
                        <strong>${item.name}</strong><br>
                        <small>$${item.price} × ${item.quantity}</small>
                    </div>
                    <div>
                        <button onclick="changeQuantity(${index}, -1)" style="background: #ff4444; color: white; border: none; border-radius: 3px; padding: 0.3rem 0.5rem; margin: 0 0.2rem; cursor: pointer;">-</button>
                        <span style="margin: 0 0.5rem;">${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)" style="background: #4CAF50; color: white; border: none; border-radius: 3px; padding: 0.3rem 0.5rem; margin: 0 0.2rem; cursor: pointer;">+</button>
                        <button onclick="removeFromCart(${index})" style="background: #ff4444; color: white; border: none; border-radius: 3px; padding: 0.3rem 0.5rem; margin-left: 1rem; cursor: pointer;">Remove</button>
                    </div>
                `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Change item quantity
function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${item.name} removed from cart`);
}


// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        cartModal.style.position = 'fixed';
        cartModal.style.top = '0';
        cartModal.style.right = '0';
        cartModal.style.left = 'auto'; // Ensure left is unset
        cartModal.style.height = '100vh';
        cartModal.style.width = '400px';
        cartModal.style.maxWidth = '95vw';
        cartModal.style.background = '#222';
        cartModal.style.boxShadow = '-8px 0 32px #000a';
        cartModal.style.zIndex = '12001';
        cartModal.style.transition = 'right 0.3s cubic-bezier(.4,2,.6,1)';
        cartModal.style.borderTopLeftRadius = '18px';
        cartModal.style.borderBottomLeftRadius = '18px';
        cartModal.style.overflowY = 'auto';
    }
}

// Bulk Order Modal Functions
function openBulkOrderModal(productName = '') { // Accept an optional product name
    document.getElementById('bulkOrderModal').style.display = 'flex';

    // Pre-fill product name if provided
    const productsTextarea = document.getElementById('bulkProducts');
    if (productsTextarea && productName) {
        productsTextarea.value = productName;
    }

    // Set minimum quantity to 5
    const quantityInput = document.getElementById('bulkQuantity');
    if (quantityInput) {
        quantityInput.value = 5; // Set default value
        quantityInput.min = 5;   // Enforce minimum in the input field
    }

    setTimeout(() => {
        document.getElementById('bulkContactName').focus();
    }, 100);
}



function removeFromCart(index) {
    if (!cart[index]) return;
    const item = cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${item[0].name} removed from cart.`);
}

// --- ADD THIS NEW FUNCTION ---
/**
 * Adds a product to the cart with a quantity of 5.
 * This is for the "Bulk Order" button.
 */
function addBulkToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quantityToAdd = 5;
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        const newTotalQuantity = existingItem.quantity + quantityToAdd;
        existingItem.quantity = newTotalQuantity;
        existingItem.isBulk = true; // Ensure it's marked as a bulk item
        existingItem.price = calculateDiscountedPrice(product, newTotalQuantity);
    } else {
        const discountedPrice = calculateDiscountedPrice(product, quantityToAdd);
        cart.push({
            ...product,
            quantity: quantityToAdd,
            price: discountedPrice, // Use the discounted price
            basePrice: product.price, // Store original price for reference
            isBulk: true
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`Bulk order for ${product.name} (5 units) added to cart!`, 'success');
    toggleCart();
}

function changeQuantity(index, delta) {
    if (!cart[index]) return;

    const item = cart[index];
    const originalProduct = products.find(p => p.id === item.id);
    if (!originalProduct) return;

    item.quantity += delta;

    // If it's a bulk item, recalculate the price
    if (item.isBulk) {
        // If quantity drops below 5, revert to regular pricing and status
        if (item.quantity < 5) {
            item.price = originalProduct.price;
            item.isBulk = false;
        } else {
            item.price = calculateDiscountedPrice(originalProduct, item.quantity);
        }
    }

    if (item.quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
        cartCountEl.style.display = cartCount > 0 ? 'flex' : 'none';
    }

    const floatingCartCountEl = document.getElementById('floatingCartCount');
    if (floatingCartCountEl) {
        floatingCartCountEl.textContent = cartCount;
    }

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.innerHTML = '';
        return;
    }

    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        let priceDisplay = `<small>$${item.price.toFixed(2)} × ${item.quantity}</small>`;
        if (item.isBulk) {
            priceDisplay = `
                <small style="color: #28a745; font-weight: bold;">Bulk Price: $${item.price.toFixed(2)}</small><br>
                <small style="text-decoration: line-through; opacity: 0.7;">Base: $${item.basePrice.toFixed(2)}</small>
            `;
        }

        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                ${priceDisplay}
            </div>
            <div>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${index}, 1)">+</button>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
}

// Order summary and confirmation modal
function showOrderSummary(orderDetails) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal open';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        display: flex; align-items: center; justify-content: center;
        background: rgba(24,24,24,0.85); z-index: 9999;
    `;
    modal.innerHTML = `
        <div class="quick-view-content" style="max-width:500px;background:#222;border-radius:18px;box-shadow:0 8px 32px #000;padding:2.5rem 2rem 2rem 2rem;position:relative;color:#fff;">
            <button class="quick-view-close" onclick="document.body.removeChild(this.parentNode.parentNode)" aria-label="Close summary" style="position:absolute;top:18px;right:18px;font-size:2.2rem;background:none;border:none;color:#fff;cursor:pointer;z-index:2;">&times;</button>
            <h2 class="quick-view-title" style="margin-bottom:1.2rem;">Order Confirmation</h2>
            <div style="margin-bottom:1.2rem;">Thank you for your purchase, <b>${orderDetails.customerName || 'Customer'}</b>!</div>
            <div style="margin-bottom:1rem;">Order Summary:</div>
            <ul style="margin-bottom:1.2rem;list-style:none;padding:0;">
                ${orderDetails.items.map(item => `<li style='margin-bottom:0.5rem;'>${item.name} × ${item.quantity} <span style='float:right;'>$${(item.price * item.quantity).toFixed(2)}</span></li>`).join('')}
            </ul>
            <div style="font-weight:bold;margin-bottom:1.2rem;">Total: $${orderDetails.total.toFixed(2)}</div>
            <div style="margin-bottom:1.2rem;">A confirmation email will be sent to <b>${orderDetails.email || 'your email'}</b>.</div>
            <button class="quick-view-add" onclick="document.body.removeChild(this.parentNode.parentNode)" style="margin-top:1.2rem;width:100%;display:block;padding:0.8rem 0;font-size:1.1rem;background:linear-gradient(45deg,#C68346,#a86b32);color:#fff;border:none;border-radius:8px;cursor:pointer;">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Checkout function (update to show summary and fake payment)
// Fixed checkout function with better debugging - Replace the existing checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartItems = document.getElementById('cartItems');

    if (!cartItems) {
        console.error('cartItems element not found');
        return;
    }

    // Create order form
    const orderForm = `
        <div class="order-form">
            <h3 style="color: #C68346; margin-bottom: 1.5rem;">Complete Your Order</h3>
            <div class="form-group">
                <label for="customerName">Full Name *</label>
                <input type="text" id="customerName" required placeholder="Enter your full name">
            </div>
            <div class="form-group">
                <label for="customerEmail">Email *</label>
                <input type="email" id="customerEmail" required placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="customerPhone">Phone Number *</label>
                <input type="tel" id="customerPhone" required placeholder="Enter your phone number">
            </div>
            <div class="form-group">
                <label for="customerAddress">Delivery Address *</label>
                <textarea id="customerAddress" required rows="3" placeholder="Enter your complete delivery address"></textarea>
            </div>
            <div style="color: #C68346; font-size: 1.2rem; margin-bottom: 1rem; font-weight: bold;">
                Total Amount: $${total.toFixed(2)}
            </div>
            
            <!-- Cash on Delivery Button -->
            <button class="submit-order" style="width: 100%; margin-bottom: 1rem; padding: 12px; background: linear-gradient(45deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 1.1rem; cursor: pointer;" onclick="submitOrder()">
                Place Order (Cash on Delivery)
            </button>
            
            <!-- PayPal Section -->
            <div style="margin: 1.5rem 0; text-align: center; border-top: 1px solid #444; padding-top: 1rem;">
                <div style="color: #C68346; margin-bottom: 1rem; font-weight: bold; font-size: 1.1rem;">OR Pay with PayPal</div>
                <div id="paypal-button-container" style="max-width: 350px; margin: 0 auto; min-height: 50px;">
                    <div style="text-align: center; padding: 10px; color: #C68346;">Loading PayPal...</div>
                </div>
                <div id="paypal-status" style="margin-top: 10px; font-size: 0.9rem; color: #666;"></div>
            </div>
        </div>
    `;

    cartItems.innerHTML = orderForm;

    // Initialize PayPal with SDK loading check
    initializePayPalWithSDK(total);
}

// New function that ensures PayPal SDK is loaded before initializing
async function initializePayPalWithSDK(total) {
    console.log('🔄 Initializing PayPal with SDK check...');

    const statusDiv = document.getElementById('paypal-status');
    const containerDiv = document.getElementById('paypal-button-container');

    if (statusDiv) {
        statusDiv.textContent = 'Loading PayPal SDK...';
    }

    try {
        // Try to load PayPal SDK if not already loaded
        if (typeof loadPayPalSDK === 'function') {
            await loadPayPalSDK();
        } else {
            // If dynamic loader not available, wait for existing script
            await waitForPayPalSDK();
        }

        if (statusDiv) {
            statusDiv.textContent = 'Initializing PayPal button...';
        }

        // Now initialize PayPal button
        initializePayPalButton(total);

        if (statusDiv) {
            statusDiv.textContent = '';
        }

    } catch (error) {
        console.error('❌ PayPal initialization failed:', error);

        if (containerDiv) {
            containerDiv.innerHTML = `
                <div style="color: #ff4444; text-align: center; padding: 1rem; border: 1px solid #ff4444; border-radius: 5px;">
                    PayPal is temporarily unavailable
                    <br><small>Please use Cash on Delivery</small>
                    <br><button onclick="retryPayPal(${total})" style="margin-top: 10px; padding: 5px 10px; background: #C68346; color: white; border: none; border-radius: 3px; cursor: pointer;">Retry PayPal</button>
                </div>`;
        }

        if (statusDiv) {
            statusDiv.textContent = 'PayPal unavailable - use Cash on Delivery';
            statusDiv.style.color = '#ff4444';
        }
    }
}

// Function to wait for PayPal SDK to load (fallback)
function waitForPayPalSDK(timeout = 10000) {
    return new Promise((resolve, reject) => {
        if (typeof paypal !== 'undefined') {
            resolve();
            return;
        }

        const startTime = Date.now();
        const checkInterval = setInterval(() => {
            if (typeof paypal !== 'undefined') {
                console.log('✅ PayPal SDK detected after waiting');
                clearInterval(checkInterval);
                resolve();
            } else if (Date.now() - startTime > timeout) {
                console.error('❌ PayPal SDK timeout after', timeout, 'ms');
                clearInterval(checkInterval);
                reject(new Error('PayPal SDK timeout'));
            }
        }, 100);
    });
}

// Retry function for PayPal
function retryPayPal(total) {
    console.log('🔄 Retrying PayPal initialization...');
    const containerDiv = document.getElementById('paypal-button-container');
    if (containerDiv) {
        containerDiv.innerHTML = '<div style="text-align: center; padding: 10px; color: #C68346;">Retrying PayPal...</div>';
    }

    setTimeout(() => {
        initializePayPalWithSDK(total);
    }, 1000);
}

// Separate function to initialize PayPal button

function initializePayPalButton(total) {
    console.log('=== PayPal Button Initialization ===');
    console.log('Total amount:', total);

    const paypalContainer = document.getElementById('paypal-button-container');

    if (!paypalContainer) {
        console.error('❌ PayPal container not found');
        return;
    }

    if (typeof paypal === 'undefined') {
        console.error('❌ PayPal SDK still not loaded');
        throw new Error('PayPal SDK not available');
    }

    console.log('✅ PayPal SDK confirmed loaded');

    // Clear container
    paypalContainer.innerHTML = '';

    try {
        paypal.Buttons({
            style: {
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal',
                height: 45
            },

            createOrder: function (data, actions) {
                console.log('🔄 Creating PayPal order...');

                const customerName = document.getElementById('customerName')?.value?.trim();
                const customerEmail = document.getElementById('customerEmail')?.value?.trim();

                // Instead of throwing an error, return a rejected promise
                if (!customerName || !customerEmail) {
                    alert('Please fill in your name and email before using PayPal.');
                    // Return a rejected promise instead of throwing
                    return Promise.reject(new Error('Missing customer information'));
                }

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(customerEmail)) {
                    alert('Please enter a valid email address.');
                    return Promise.reject(new Error('Invalid email format'));
                }

                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total.toFixed(2),
                            currency_code: 'USD'
                        },
                        description: `VelariForge Order - ${cart.length} item(s)`,
                        custom_id: `VELARI_${Date.now()}`
                    }]
                });
            },

            onApprove: function (data, actions) {
                console.log('✅ PayPal payment approved');

                return actions.order.capture().then(function (details) {
                    console.log('✅ Payment captured:', details);

                    const orderDetails = {
                        customerName: document.getElementById('customerName')?.value?.trim(),
                        email: document.getElementById('customerEmail')?.value?.trim(),
                        phone: document.getElementById('customerPhone')?.value?.trim() || 'Not provided',
                        address: document.getElementById('customerAddress')?.value?.trim() || 'From PayPal',
                        paypalTransactionId: details.id,
                        items: cart.map(item => ({
                            product: item.name,
                            quantity: item.quantity,
                            price: item.price
                        })),
                        total: total,
                        paymentMethod: 'PayPal'
                    };

                    showNotification('Payment completed successfully!', 'success');
                    showOrderSummary(orderDetails);

                    // Clear cart
                    cart = [];
                    localStorage.removeItem('cart');
                    updateCartDisplay();
                    toggleCart();
                });
            },

            onError: function (err) {
                console.error('❌ PayPal error:', err);
                showNotification('Payment failed. Please try again.', 'error');
            },

            onCancel: function () {
                console.log('ℹ️ PayPal payment cancelled');
                showNotification('Payment cancelled', 'info');
            }

        }).render('#paypal-button-container').then(function () {
            console.log('✅ PayPal button rendered successfully');
        }).catch(function (err) {
            console.error('❌ PayPal render error:', err);
            throw err;
        });

    } catch (error) {
        console.error('❌ PayPal button creation error:', error);
        throw error;
    }
}

// Fixed backend function - Replace the existing sendOrderToBackend function
async function sendOrderToBackend(orderDetails) {
    try {
        console.log('📤 Sending order to backend:', orderDetails);

        const response = await fetch('/api/paypal-orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Order saved to backend successfully:', result);
        } else {
            const errorText = await response.text();
            console.warn('⚠️ Failed to save order to backend:', response.status, errorText);
        }
    } catch (error) {
        console.warn('⚠️ Backend communication error:', error.message);
        // Don't show error to user since PayPal payment already succeeded
    }
}

// Add CSS for better PayPal button styling
const paypalStyles = `
<style>
.order-form .form-group {
    margin-bottom: 1rem;
}

.order-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: #C68346;
    font-weight: bold;
}

.order-form input,
.order-form textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #444;
    border-radius: 5px;
    background: #333;
    color: #fff;
    font-size: 1rem;
}

.order-form input:focus,
.order-form textarea:focus {
    outline: none;
    border-color: #C68346;
    box-shadow: 0 0 0 2px rgba(198, 131, 70, 0.2);
}

.submit-order {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(45deg, #4CAF50, #45a049);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s;
}

.submit-order:hover {
    transform: translateY(-2px);
}

#paypal-button-container {
    min-height: 50px;
}

#paypal-button-container iframe {
    border-radius: 8px !important;
}
</style>
`;

// Add the styles to the document
if (!document.getElementById('paypal-custom-styles')) {
    const styleElement = document.createElement('div');
    styleElement.id = 'paypal-custom-styles';
    styleElement.innerHTML = paypalStyles;
    document.head.appendChild(styleElement);
}

// Submit order function (send to backend and show order summary)
async function submitOrder() {
    const name = document.getElementById('customerName')?.value?.trim();
    const email = document.getElementById('customerEmail')?.value?.trim();
    const phone = document.getElementById('customerPhone')?.value?.trim();
    const address = document.getElementById('customerAddress')?.value?.trim();

    if (!name || !email || !phone || !address) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    const orderDetails = {
        customerName: name,
        email: email,
        phone: phone,
        address: address,
        items: cart.map(item => ({
            product: item.name,
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: 'Cash on Delivery'
    };

    try {
        // Get JWT token from localStorage
        const token = localStorage.getItem('authToken');
        if (!token) {
            showNotification('Please log in to place an order.', 'error');
            return;
        }

        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(orderDetails)
        });

        if (response.ok) {
            const result = await response.json();
            showNotification('Order placed successfully!', 'success');
            showOrderSummary(orderDetails);

            // Clear cart
            cart = [];
            localStorage.removeItem('cart');
            updateCartDisplay();
            toggleCart();
        } else {
            const errorData = await response.json();
            showNotification(errorData.message || 'Failed to place order.', 'error');
        }
    } catch (error) {
        console.error('Order submission error:', error);
        showNotification('Failed to place order. Please try again.', 'error');
    }
}


// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#4CAF50' : '#C68346'};
                color: ${type === 'success' ? 'white' : '#0f0f23'};
                padding: 1rem 2rem;
                border-radius: 10px;
                font-weight: bold;
                z-index: 3000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            `;
    notification.textContent = message;
    document.body.appendChild(notification);
    // Floating cart button visual feedback
    const floatingCartBtn = document.getElementById('floatingCartBtn');
    if (floatingCartBtn) {
        floatingCartBtn.classList.add('cart-feedback');
        setTimeout(() => {
            floatingCartBtn.classList.remove('cart-feedback');
        }, 700);
    }

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// --- Product Filtering, Ratings, and Quick View ---
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewContent = document.getElementById('quickViewContent');

// Add categories to filter dropdown
function populateCategoryFilter() {
    if (!categoryFilter) return;
    const categories = Array.from(new Set(products.map(p => p.category)));
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categoryFilter.appendChild(opt);
    });
}

// Function to get product rating
function getProductRating(productId) {
    // For now, return a random rating between 4 and 5
    return 4 + Math.random();
}

function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += '<i class="fa fa-star"></i>';
        } else if (i - rating < 1) {
            html += '<i class="fa fa-star-half-alt"></i>';
        } else {
            html += '<i class="fa fa-star empty"></i>';
        }
    }
    return html;
}


// --- ADD THIS NEW FUNCTION ---
/**
 * Calculates a discounted price based on quantity.
 * @param {object} product - The original product object with the base price.
 * @param {number} quantity - The number of items.
 * @returns {number} The price per item.
 */
function calculateDiscountedPrice(product, quantity) {
    const basePrice = product.price;
    let discount = 0; // Default no discount

    if (quantity >= 20) {
        discount = 0.20; // 20% discount for 20 or more items
    } else if (quantity >= 10) {
        discount = 0.15; // 15% discount for 10-19 items
    } else if (quantity >= 5) {
        discount = 0.10; // 10% discount for 5-9 items
    }

    return basePrice * (1 - discount);
}

// Filtering logic
let filteredProducts = [...products];
window.applyFilters = function applyFilters() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    let cat = categoryFilter ? categoryFilter.value : 'all';
    let price = priceFilter ? priceFilter.value : 'all';
    let search = document.getElementById('searchInput')?.value || '';
    filteredProducts = products.filter(product => {
        let matchCat = cat === 'all' || product.category === cat;
        let matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });
    if (price === 'low') filteredProducts.sort((a, b) => a.price - b.price);
    if (price === 'high') filteredProducts.sort((a, b) => b.price - a.price);
    displayFilteredProducts(filteredProducts);
}

if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
if (priceFilter) priceFilter.addEventListener('change', applyFilters);
if (document.getElementById('searchInput')) document.getElementById('searchInput').addEventListener('input', applyFilters);

// Override displayFilteredProducts for ratings and quick view
function displayFilteredProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    productGrid.innerHTML = '';
    if (!filteredProducts || filteredProducts.length === 0) {
        productGrid.innerHTML = '<div style="text-align: center; grid-row: 1/-1; grid-column: 1/-1; font-size: 1.2rem; opacity: 0.7;">No products found</div>';
        return;
    }
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        // Use product.image if available, otherwise use first image from product.images
        const imgSrc = product.image ? product.image : (Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : '');
        productCard.innerHTML = `
            <div class="product-image" style="cursor:pointer;">
                <img src="${imgSrc}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${renderStars(getProductRating(product.id))} <span style="font-size:0.95rem;color:#C68346;margin-left:0.3rem;">(${getProductRating(product.id).toFixed(1)})</span></div>
                <div class="product-price">$${product.price}</div>
                <p class="product-description">${product.description}</p>
            </div>
            <button class="add-to-cart" style="margin-top:0.7rem;width:100%;display:block;" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to cart" tabindex="0">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        `;
        // Add image click event for modal
        const imageDiv = productCard.querySelector('.product-image');
        if (imageDiv) {
            imageDiv.addEventListener('click', function (e) {
                openImageModal(product.id);
                e.stopPropagation();
            });
        }
        productGrid.appendChild(productCard);
    });
}

// Quick View Modal (side-by-side layout)
window.openQuickView = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    quickViewContent.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-info">
                <div class="quick-view-title">${product.name}</div>
                <div class="quick-view-price">$${product.price}</div>
                <div class="quick-view-rating">${renderStars(getProductRating(product.id))} <span style="font-size:0.95rem;color:#C68346;margin-left:0.3rem;">(${getProductRating(product.id).toFixed(1)})</span></div>
                <div class="quick-view-description">${product.description}</div>
                <button class="quick-view-add" onclick="addToCart(${product.id});closeQuickView();" aria-label="Add ${product.name} to cart from quick view" tabindex="0"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
            <img src="${product.image}" alt="${product.name} - ${product.description}" class="quick-view-image" loading="lazy" width="320" height="220">
        </div>
        <button class="quick-view-close" onclick="closeQuickView()" aria-label="Close quick view" tabindex="0">&times;</button>
    `;
    quickViewModal.classList.add('open');
    // Focus the close button for accessibility
    setTimeout(() => {
        const closeBtn = quickViewContent.querySelector('.quick-view-close');
        if (closeBtn) closeBtn.focus();
    }, 100);
};
window.closeQuickView = function () {
    quickViewModal.classList.remove('open');
};
if (quickViewModal) {
    quickViewModal.addEventListener('click', function (e) {
        if (e.target === quickViewModal) closeQuickView();
    });
}

// Populate category filter and show products on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        if (typeof populateCategoryFilter === 'function') populateCategoryFilter();
        applyFilters();
        updateCartDisplay();
        setupMobileNav();
    });
} else {
    if (typeof populateCategoryFilter === 'function') populateCategoryFilter();
    applyFilters();
}

// Close cart when clicking outside
const cartModalEl = document.getElementById('cartModal');
if (cartModalEl) {
    cartModalEl.addEventListener('click', function (e) {
        if (e.target === this) {
            toggleCart();
        }
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const cartModal = document.getElementById('cartModal');
        if (cartModal && cartModal.style.display === 'block') {
            toggleCart();
        }
    }
});


// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navLinks = document.getElementById('navLinks');
    if (!mobileMenuIcon || !navLinks) return;
    mobileMenuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    // Optional: Hide menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
// Helper to get API base URL (works for local, tunnel, or production)
function getApiBaseUrl() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:5000';
    }
    return window.location.origin;
}

// Hide product description when clicking outside
document.addEventListener('click', function () {
    document.querySelectorAll('.product-card').forEach(card => card.classList.remove('show-description'));
});

function updateFloatingCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const countEl = document.getElementById('floatingCartCount');
    if (countEl) countEl.textContent = count;
}

// Update floating cart count whenever cart changes
const _origUpdateCartDisplay = updateCartDisplay;
updateCartDisplay = function () {
    _origUpdateCartDisplay.apply(this, arguments);
    updateFloatingCartCount();
};



// --- NEW DIRECT BULK ORDER SYSTEM ---
// (Please remove any other openBulkOrderModal, closeBulkOrderModal, or bulk form submit listeners)

function openDirectBulkModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('directBulkModal');
    const modalBody = document.getElementById('bulkModalBody');
    if (!modal || !modalBody) return;

    // Inject the dynamic content into the modal
    modalBody.innerHTML = `
        <div class="bulk-modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="bulk-modal-details">
            <h3>${product.name}</h3>
            <div class="quantity-selector">
                <label for="bulkModalQuantity">Quantity:</label>
                <input type="number" id="bulkModalQuantity" value="5" min="5" oninput="updateBulkModalPricing(${productId})">
            </div>
            <div class="price-display">
                <div class="original-price-container">
                    <span>Original Price:</span>
                    <span id="bulkOriginalPrice">$${product.price.toFixed(2)}</span>
                </div>
                <div class="discounted-price-container">
                    <span>Discounted Price/Item:</span>
                    <span id="bulkDiscountedPrice" class="discounted-price">$0.00</span>
                </div>
                <div class="total-price">
                    <span>Total:</span>
                    <span id="bulkTotalPrice">$0.00</span>
                </div>
            </div>
            <button class="submit-btn" onclick="addBulkFromModal(${productId})">Add Bulk Order to Cart</button>
        </div>
    `;

    modal.style.display = 'flex';
    updateBulkModalPricing(productId); // Initial price calculation
}

function updateBulkModalPricing(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('bulkModalQuantity').value) || 5;

    // Ensure quantity doesn't drop below 5
    if (quantity < 5) {
        document.getElementById('bulkModalQuantity').value = 5;
        return updateBulkModalPricing(productId); // Recalculate with corrected quantity
    }

    const discountedPrice = calculateDiscountedPrice(product, quantity);
    const totalPrice = discountedPrice * quantity;

    document.getElementById('bulkDiscountedPrice').textContent = `$${discountedPrice.toFixed(2)}`;
    document.getElementById('bulkTotalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

function addBulkFromModal(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('bulkModalQuantity').value);
    if (!product || !quantity || quantity < 5) return;

    const discountedPrice = calculateDiscountedPrice(product, quantity);
    const existingItem = cart.find(item => item.id === productId && item.isBulk);

    if (existingItem) {
        existingItem.quantity += quantity;
        // Recalculate price for the new total quantity
        existingItem.price = calculateDiscountedPrice(product, existingItem.quantity);
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            price: discountedPrice,
            basePrice: product.price,
            isBulk: true
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    closeDirectBulkModal();
    showNotification(`Bulk order for ${product.name} (${quantity} units) added!`, 'success');
    setTimeout(toggleCart, 300); // Open cart after a brief delay
}

function closeDirectBulkModal() {
    const modal = document.getElementById('directBulkModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission once the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const bulkForm = document.getElementById('bulkOrderForm');
    if (bulkForm) {
        bulkForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const contactName = document.getElementById('bulkContactName').value.trim();
            const email = document.getElementById('bulkEmail').value.trim();
            const phone = document.getElementById('bulkPhone').value.trim();
            const products = document.getElementById('bulkProducts').value.trim();
            const quantity = document.getElementById('bulkQuantity').value;

            const errorDiv = document.getElementById('bulkOrderError');
            const successDiv = document.getElementById('bulkOrderSuccess');

            // Basic validation
            if (!contactName || !email || !phone || !products || !quantity) {
                errorDiv.textContent = 'Please fill in all required fields.';
                errorDiv.style.display = 'block';
                return;
            }

            // --- Show success message (for demo purposes) ---
            // In a real app, you would send this data to your backend here.
            document.getElementById('bulkOrderForm').style.display = 'none';
            successDiv.style.display = 'block';

            // Auto close the modal after a few seconds
            setTimeout(() => {
                closeBulkOrderModal();
            }, 4000);
        });
    }
});

// ... existing code ...


// --- ADD THIS NEW FUNCTION ---
/**
 * Creates and appends a floating WhatsApp button to the page.
 */
function createWhatsAppButton() {
    // Prevent creating the button if it already exists
    if (document.getElementById('whatsapp-float-btn')) return;

    const phoneNumber = '447352483123'; // Your number without '+' or spaces
    const whatsappLink = document.createElement('a');

    whatsappLink.id = 'whatsapp-float-btn';
    whatsappLink.href = `https://wa.me/${phoneNumber}`;
    whatsappLink.target = '_blank'; // Open in a new tab
    whatsappLink.rel = 'noopener noreferrer';
    whatsappLink.title = 'Chat with us on WhatsApp';

    // SVG icon for WhatsApp
    whatsappLink.innerHTML = `
        <svg viewBox="0 0 32 32">
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.52-1.29.37-.775.37-1.448.25-1.594-.12-.143-.35-.214-.73-.214zM16 2C8.243 2 2 8.243 2 16c0 2.52.64 4.938 1.795 7.035L2 28l5.16-1.71c2.01.915 4.23.985 6.46.125C16.34 28.085 19.3 30 24 30c7.757 0 14-6.243 14-14S23.757 2 16 2zM24 28c-2.1 0-4.1-.58-5.8-1.6L4 30l2.4-7.8c-1.4-2.2-2.4-4.8-2.4-7.2 0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12z"/>
        </svg>
    `;

    document.body.appendChild(whatsappLink);
}


function renderPayPalButton(amount) {
    if (!document.getElementById('paypal-button-container')) return;
    if (typeof paypal === 'undefined') {
        console.error('PayPal SDK not loaded when renderPayPalButton called');
        return;
    }
    paypal.Buttons({
        createOrder: (data, actions) => actions.order.create({ purchase_units: [{ amount: { value: amount.toFixed(2) } }] }),
        onApprove: (data, actions) => actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
        })
    }).render('#paypal-button-container');
}


// Add this function to your script.js for debugging
function debugPayPal() {
    console.log('=== PayPal Debug Info ===');
    console.log('PayPal SDK loaded:', typeof paypal !== 'undefined');
    console.log('PayPal container exists:', !!document.getElementById('paypal-button-container'));
    console.log('Cart items:', cart.length);
    console.log('Cart total:', cart.reduce((sum, item) => sum + (item.price * item.quantity), 0));

    if (typeof paypal !== 'undefined') {
        console.log('PayPal object:', paypal);
        console.log('PayPal.Buttons available:', typeof paypal.Buttons === 'function');
    }

    const container = document.getElementById('paypal-button-container');
    if (container) {
        console.log('Container HTML:', container.innerHTML);
        console.log('Container styles:', window.getComputedStyle(container));
    }
}

// Call this function in browser console to debug: debugPayPal()


// Add this test function to your script.js
function testPayPalSDK() {
    console.log('=== PayPal SDK Test ===');
    console.log('Current URL:', window.location.href);
    console.log('PayPal SDK loaded:', typeof paypal !== 'undefined');

    // Check for PayPal script tags
    const paypalScripts = document.querySelectorAll('script[src*="paypal"]');
    console.log('PayPal script tags found:', paypalScripts.length);
    paypalScripts.forEach((script, index) => {
        console.log(`Script ${index + 1}:`, script.src);
    });

    // Check network connectivity to PayPal
    fetch('https://www.paypal.com/sdk/js?client-id=sb', { method: 'HEAD', mode: 'no-cors' })
        .then(() => console.log('✅ PayPal servers accessible'))
        .catch(err => console.log('❌ PayPal servers not accessible:', err));

    // Check container
    const container = document.getElementById('paypal-button-container');
    console.log('PayPal container exists:', !!container);
    if (container) {
        console.log('Container HTML:', container.innerHTML);
    }

    return {
        sdkLoaded: typeof paypal !== 'undefined',
        scriptTags: paypalScripts.length,
        containerExists: !!container
    };
}

// Auto-run test after 3 seconds
setTimeout(() => {
    console.log('Auto-running PayPal test...');
    testPayPalSDK();
}, 3000);





// Add the styles to document head if not already added
if (!document.getElementById('paypal-form-styles')) {
    const styleElement = document.createElement('div');
    //styleElement.innerHTML = additionalPayPalStyles;
    document.head.appendChild(styleElement);
}

// Enhanced form validation function
function validatePayPalForm() {
    const customerName = document.getElementById('customerName')?.value?.trim();
    const customerEmail = document.getElementById('customerEmail')?.value?.trim();
    const customerPhone = document.getElementById('customerPhone')?.value?.trim();
    const customerAddress = document.getElementById('customerAddress')?.value?.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const isValid = customerName && 
                   customerEmail && 
                   emailRegex.test(customerEmail) && 
                   customerPhone && 
                   customerAddress;
    
    // Enable/disable PayPal button visually
    const paypalContainer = document.getElementById('paypal-button-container');
    if (paypalContainer) {
        if (isValid) {
            paypalContainer.classList.remove('disabled');
        } else {
            paypalContainer.classList.add('disabled');
        }
    }
    
    return isValid;
}

// Add real-time form validation
function addFormValidationListeners() {
    const formFields = ['customerName', 'customerEmail', 'customerPhone', 'customerAddress'];
    
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', validatePayPalForm);
            field.addEventListener('blur', validatePayPalForm);
        }
    });
    
    // Initial validation
    setTimeout(validatePayPalForm, 500);

}