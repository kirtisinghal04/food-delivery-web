// Sample restaurant data
 const images = document.querySelectorAll('.circle-carousel img');
    let current = 0;

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000); // change image every 3 seconds
const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        cuisine: "Italian, Pizza",
        rating: 4.5,
        deliveryTime: "25-35 min",
        deliveryFee: "$2.99",
        image: "/images/pizza1.jpg",
        category: "pizza",
        menu: [
            { id: 1, name: "Margherita Pizza", description: "Fresh tomatoes, mozzarella, basil", price: 12.99 },
            { id: 2, name: "Pepperoni Pizza", description: "Pepperoni, mozzarella, tomato sauce", price: 14.99 },
            { id: 3, name: "Veggie Supreme", description: "Bell peppers, onions, mushrooms, olives", price: 13.99 },
            { id: 4, name: "Meat Lovers", description: "Pepperoni, sausage, ham, bacon", price: 16.99 }
        ]
    },
    {
        id: 2,
        name: "Burger Barn",
        cuisine: "American, Burgers",
        rating: 4.3,
        deliveryTime: "20-30 min",
        deliveryFee: "$1.99",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "fast-food",
        menu: [
            { id: 5, name: "Classic Cheeseburger", description: "Beef patty, cheese, lettuce, tomato", price: 8.99 },
            { id: 6, name: "Bacon Deluxe", description: "Double beef, bacon, cheese, special sauce", price: 11.99 },
            { id: 7, name: "Chicken Burger", description: "Grilled chicken, avocado, lettuce", price: 9.99 },
            { id: 8, name: "Veggie Burger", description: "Plant-based patty, fresh veggies", price: 10.99 }
        ]
    },
    {
        id: 3,
        name: "Dragon Wok",
        cuisine: "Chinese, Asian",
        rating: 4.6,
        deliveryTime: "30-40 min",
        deliveryFee: "$3.49",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "chinese",
        menu: [
            { id: 9, name: "Sweet & Sour Chicken", description: "Crispy chicken with sweet & sour sauce", price: 13.99 },
            { id: 10, name: "Beef Lo Mein", description: "Stir-fried noodles with tender beef", price: 12.99 },
            { id: 11, name: "Kung Pao Chicken", description: "Spicy chicken with peanuts and vegetables", price: 14.99 },
            { id: 12, name: "Vegetable Fried Rice", description: "Wok-fried rice with mixed vegetables", price: 10.99 }
        ]
    },
    {
        id: 4,
        name: "Spice Route",
        cuisine: "Indian, Curry",
        rating: 4.4,
        deliveryTime: "35-45 min",
        deliveryFee: "$2.49",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "indian",
        menu: [
            { id: 13, name: "Butter Chicken", description: "Creamy tomato curry with tender chicken", price: 15.99 },
            { id: 14, name: "Biryani", description: "Fragrant basmati rice with spices and meat", price: 14.99 },
            { id: 15, name: "Palak Paneer", description: "Spinach curry with cottage cheese", price: 12.99 },
            { id: 16, name: "Naan Bread", description: "Fresh baked Indian flatbread", price: 3.99 }
        ]
    },
    {
        id: 5,
        name: "Taco Fiesta",
        cuisine: "Mexican, Fast Food",
        rating: 4.2,
        deliveryTime: "15-25 min",
        deliveryFee: "$1.49",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "fast-food",
        menu: [
            { id: 17, name: "Beef Tacos", description: "Seasoned ground beef with fresh toppings", price: 8.99 },
            { id: 18, name: "Chicken Quesadilla", description: "Grilled chicken and cheese in flour tortilla", price: 9.99 },
            { id: 19, name: "Veggie Burrito", description: "Rice, beans, cheese, and fresh vegetables", price: 7.99 },
            { id: 20, name: "Guacamole & Chips", description: "Fresh avocado dip with tortilla chips", price: 5.99 }
        ]
    },
    {
        id: 6,
        name: "Slice Heaven",
        cuisine: "Italian, Pizza",
        rating: 4.7,
        deliveryTime: "20-30 min",
        deliveryFee: "$2.99",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        category: "pizza",
        menu: [
            { id: 21, name: "Four Cheese Pizza", description: "Mozzarella, parmesan, gorgonzola, ricotta", price: 15.99 },
            { id: 22, name: "BBQ Chicken Pizza", description: "BBQ sauce, chicken, red onions, cilantro", price: 16.99 },
            { id: 23, name: "Hawaiian Pizza", description: "Ham, pineapple, mozzarella", price: 14.99 },
            { id: 24, name: "Garlic Bread", description: "Fresh baked bread with garlic butter", price: 4.99 }
        ]
    },
    {
    id: 7,
    name: "Combo Feast",
    cuisine: "Indian, Continental, Fast Food",
    rating: 4.5,
    deliveryTime: "25-40 min",
    deliveryFee: "$3.99",
    image: "/images/combo2.jpg",
    category: "combos",
    menu: [
        {
            id: 41,
            name: "Classic Indian Thali",
            description: "Paneer curry, dal, rice, roti, salad, sweet",
            price: 11.99
        },
        {
            id: 42,
            name: "Burger & Fries Combo",
            description: "Veg or chicken burger, fries, and soft drink",
            price: 9.49
        },
        {
            id: 43,
            name: "Pasta & Garlic Bread Box",
            description: "Creamy Alfredo or Arrabbiata pasta with garlic bread",
            price: 10.99
        },
        {
            id: 44,
            name: "Wrap + Juice Combo",
            description: "Paneer or chicken wrap with fresh fruit juice",
            price: 8.99
        }
    ]
},
{id: 8,
    name: "Burger with coke",
    cuisine: "Indian, Continental, Fast Food",
    rating: 4.5,
    deliveryTime: "25-40 min",
    deliveryFee: "$3.99",
    image: "/images/combo3.jpg",
    category: "combos",
    menu: [
        {
            id: 41,
            name: "Classic Indian Thali",
            description: "Paneer curry, dal, rice, roti, salad, sweet",
            price: 11.99
        },
        {
            id: 42,
            name: "Burger & Fries Combo",
            description: "Veg or chicken burger, fries, and soft drink",
            price: 9.49
        },
        {
            id: 43,
            name: "Pasta & Garlic Bread Box",
            description: "Creamy Alfredo or Arrabbiata pasta with garlic bread",
            price: 10.99
        },
        {
            id: 44,
            name: "Wrap + Juice Combo",
            description: "Paneer or chicken wrap with fresh fruit juice",
            price: 8.99
        }
    ]
}

];

// Authentication system
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('foodexpress_users')) || [];
        this.init();
    }

    init() {
        const savedUser = localStorage.getItem('foodexpress_current_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.updateUI();
        }
        this.bindEvents();
    }

    bindEvents() {
        const loginBtn = document.getElementById('loginBtn');
        const authModal = document.getElementById('authModal');
        const closeAuth = document.getElementById('closeAuth');
        const authSwitchLink = document.getElementById('authSwitchLink');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const logoutBtn = document.getElementById('logoutBtn');

        loginBtn?.addEventListener('click', () => this.showAuthModal('login'));
        closeAuth?.addEventListener('click', () => this.hideAuthModal());
        authSwitchLink?.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleAuthMode();
        });
        loginForm?.addEventListener('submit', (e) => this.handleLogin(e));
        signupForm?.addEventListener('submit', (e) => this.handleSignup(e));
        logoutBtn?.addEventListener('click', () => this.logout());

        // Close modal on outside click
        authModal?.addEventListener('click', (e) => {
            if (e.target === authModal) this.hideAuthModal();
        });
    }

    showAuthModal(mode = 'login') {
        const authModal = document.getElementById('authModal');
        authModal.classList.add('active');
        this.setAuthMode(mode);
    }

    hideAuthModal() {
        const authModal = document.getElementById('authModal');
        authModal.classList.remove('active');
    }

    setAuthMode(mode) {
        const authTitle = document.getElementById('authTitle');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const authSwitchText = document.getElementById('authSwitchText');
        const authSwitchLink = document.getElementById('authSwitchLink');

        if (mode === 'login') {
            authTitle.textContent = 'Welcome Back';
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            authSwitchText.innerHTML = `Don't have an account? <a href="#" id="authSwitchLink">Sign up</a>`;
        } else {
            authTitle.textContent = 'Create Account';
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            authSwitchText.innerHTML = `Already have an account? <a href="#" id="authSwitchLink">Sign in</a>`;
        }

        // Re-bind the switch link
        setTimeout(() => {
            const newSwitchLink = document.getElementById('authSwitchLink');
            if (newSwitchLink) {
                newSwitchLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleAuthMode();
                });
            }
        }, 100);
    }

    toggleAuthMode() {
        const loginForm = document.getElementById('loginForm');
        const isLoginMode = loginForm.style.display !== 'none';
        this.setAuthMode(isLoginMode ? 'signup' : 'login');
    }

    handleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const remember = formData.get('remember');

        const user = this.users.find(u => u.email === email && u.password === password);

        if (user) {
            this.currentUser = { ...user };
            delete this.currentUser.password; // Don't store password in current user

            if (remember) {
                localStorage.setItem('foodexpress_current_user', JSON.stringify(this.currentUser));
            }

            this.updateUI();
            this.hideAuthModal();
            showNotification(`Welcome back, ${user.fullName}!`);
        } else {
            showNotification('Invalid email or password!', 'error');
        }
    }
    

    handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        if (password !== confirmPassword) {
            showNotification('Passwords do not match!', 'error');
            return;
        }

        if (this.users.find(u => u.email === email)) {
            showNotification('Email already exists!', 'error');
            return;
        }

        const newUser = {
            id: Date.now(),
            fullName,
            email,
            phone,
            password,
            joinDate: new Date().toISOString(),
            orders: []
        };

        this.users.push(newUser);
        localStorage.setItem('foodexpress_users', JSON.stringify(this.users));

        this.currentUser = { ...newUser };
        delete this.currentUser.password;
        localStorage.setItem('foodexpress_current_user', JSON.stringify(this.currentUser));

        this.updateUI();
        this.hideAuthModal();
        showNotification(`Welcome to FoodExpress, ${fullName}!`);
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('foodexpress_current_user');
        this.updateUI();
        showNotification('Logged out successfully!');
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const userMenu = document.getElementById('userMenu');
        const userName = document.getElementById('userName');

        if (this.currentUser) {
            loginBtn.style.display = 'none';
            userMenu.style.display = 'flex';
            userName.textContent = this.currentUser.fullName;

            // Add click handler for user menu to show dropdown
            const userDropdown = userMenu.querySelector('.user-dropdown');
            userMenu.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.style.opacity = userDropdown.style.opacity === '1' ? '0' : '1';
                userDropdown.style.visibility = userDropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
                userDropdown.style.transform = userDropdown.style.transform === 'translateY(0px)' ? 'translateY(-10px)' : 'translateY(0px)';
            });

            // Hide dropdown when clicking outside
            document.addEventListener('click', () => {
                userDropdown.style.opacity = '0';
                userDropdown.style.visibility = 'hidden';
                userDropdown.style.transform = 'translateY(-10px)';
            });

            const profileBtn = document.getElementById('profileBtn');
            const ordersBtn = document.getElementById('ordersBtn');

            if (profileBtn && ordersBtn) {
                // Remove existing event listeners to prevent duplicates
                const newProfileBtn = profileBtn.cloneNode(true);
                const newOrdersBtn = ordersBtn.cloneNode(true);
                profileBtn.parentNode.replaceChild(newProfileBtn, profileBtn);
                ordersBtn.parentNode.replaceChild(newOrdersBtn, ordersBtn);

                newProfileBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showProfile();
                });
                newOrdersBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.showOrders();
                });
            }
        } else {
            loginBtn.style.display = 'block';
            userMenu.style.display = 'none';
        }
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    showProfile() {
        this.displayProfileModal();
    }

    showOrders() {
        this.displayOrdersModal();
    }

    displayProfileModal() {
        const existingModal = document.getElementById('profileModal');
        if (existingModal) {
            existingModal.remove();
        }

        const profileModal = document.createElement('div');
        profileModal.id = 'profileModal';
        profileModal.className = 'auth-modal active';
        profileModal.innerHTML = `
            <div class="auth-content" style="max-width: 500px;">
                <div class="auth-header">
                    <h2>My Profile</h2>
                    <button class="close-auth" onclick="document.getElementById('profileModal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="profile-content" style="padding: 2rem;">
                    <div class="profile-avatar" style="text-align: center; margin-bottom: 2rem;">
                        <div style="width: 80px; height: 80px; background: var(--primary-color); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin-bottom: 1rem;">
                            <i class="fas fa-user"></i>
                        </div>
                        <h3 style="margin: 0; color: var(--text-color);">${this.currentUser.fullName}</h3>
                    </div>
                    <div class="profile-info">
                        <div class="info-item" style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
                            <span style="color: var(--text-light);">Email:</span>
                            <span style="color: var(--text-color); font-weight: 500;">${this.currentUser.email}</span>
                        </div>
                        <div class="info-item" style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
                            <span style="color: var(--text-light);">Phone:</span>
                            <span style="color: var(--text-color); font-weight: 500;">${this.currentUser.phone || 'Not provided'}</span>
                        </div>
                        <div class="info-item" style="display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
                            <span style="color: var(--text-light);">Member Since:</span>
                            <span style="color: var(--text-color); font-weight: 500;">${new Date(this.currentUser.joinDate).toLocaleDateString()}</span>
                        </div>
                        <div class="info-item" style="display: flex; justify-content: space-between; padding: 1rem 0;">
                            <span style="color: var(--text-light);">Total Orders:</span>
                            <span style="color: var(--primary-color); font-weight: 600;">${this.currentUser.orders ? this.currentUser.orders.length : 0}</span>
                        </div>
                    </div>
                    <div style="margin-top: 2rem; text-align: center;">
                        <button onclick="document.getElementById('profileModal').remove()" style="
                            background: var(--primary-color);
                            color: white;
                            border: none;
                            padding: 0.75rem 2rem;
                            border-radius: 25px;
                            cursor: pointer;
                            font-weight: 500;
                        ">Close</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(profileModal);

        // Close on outside click
        profileModal.addEventListener('click', (e) => {
            if (e.target === profileModal) {
                profileModal.remove();
            }
        });
    }

    displayOrdersModal() {
        const existingModal = document.getElementById('ordersModal');
        if (existingModal) {
            existingModal.remove();
        }

        // Get user's orders from localStorage
        const users = JSON.parse(localStorage.getItem('foodexpress_users')) || [];
        const user = users.find(u => u.id === this.currentUser.id);
        const orders = user?.orders || [];

        const ordersModal = document.createElement('div');
        ordersModal.id = 'ordersModal';
        ordersModal.className = 'auth-modal active';
        ordersModal.innerHTML = `
            <div class="auth-content" style="max-width: 700px; max-height: 90vh;">
                <div class="auth-header">
                    <h2>My Orders</h2>
                    <button class="close-auth" onclick="document.getElementById('ordersModal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="orders-content" style="padding: 2rem; overflow-y: auto; max-height: 70vh;">
                    ${orders.length === 0 ? `
                        <div style="text-align: center; padding: 3rem; color: var(--text-light);">
                            <i class="fas fa-receipt" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                            <h3>No orders yet</h3>
                            <p>Start ordering from your favorite restaurants!</p>
                        </div>
                    ` : orders.map(order => `
                        <div class="order-card" style="
                            background: var(--bg-secondary);
                            border-radius: 15px;
                            padding: 1.5rem;
                            margin-bottom: 1.5rem;
                            border: 1px solid var(--border-color);
                        ">
                            <div class="order-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <div>
                                    <h4 style="margin: 0; color: var(--text-color);">Order #${order.id}</h4>
                                    <p style="margin: 0.5rem 0 0 0; color: var(--text-light); font-size: 0.9rem;">
                                        ${new Date(order.date).toLocaleDateString()} at ${new Date(order.date).toLocaleTimeString()}
                                    </p>
                                </div>
                                <div class="order-status" style="
                                    background: var(--success-color);
                                    color: white;
                                    padding: 0.5rem 1rem;
                                    border-radius: 20px;
                                    font-size: 0.8rem;
                                    font-weight: 500;
                                    text-transform: uppercase;
                                ">${order.status}</div>
                            </div>
                            <div class="order-items" style="margin-bottom: 1rem;">
                                ${order.items.map(item => `
                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
                                        <div>
                                            <span style="font-weight: 500; color: var(--text-color);">${item.name}</span>
                                            <span style="color: var(--text-light); margin-left: 0.5rem;">x${item.quantity}</span>
                                            <div style="font-size: 0.8rem; color: var(--text-light);">${item.restaurantName}</div>
                                        </div>
                                        <span style="color: var(--primary-color); font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="order-total" style="text-align: right; font-size: 1.1rem; font-weight: bold; color: var(--text-color);">
                                Total: $${order.total.toFixed(2)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        document.body.appendChild(ordersModal);

        // Close on outside click
        ordersModal.addEventListener('click', (e) => {
            if (e.target === ordersModal) {
                ordersModal.remove();
            }
        });
    }
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  emailjs.sendForm("service_vc56nbh", "template_gloebwr", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Please try again later.");
      console.log(error);
    });
});
// Initialize auth system
const authSystem = new AuthSystem();

// Enhanced Cart functionality
let cart = JSON.parse(localStorage.getItem('foodexpress_cart')) || [];
let currentRestaurant = null;
let searchTimeout = null;

// DOM elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const restaurantModal = document.getElementById('restaurantModal');
const closeRestaurant = document.getElementById('closeRestaurant');
const searchInput = document.getElementById('searchInput');

// Initialize theme
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Theme toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Render restaurants
function renderRestaurants(restaurantsToShow = restaurants) {
    const restaurantsGrid = document.getElementById('restaurantsGrid');
    restaurantsGrid.innerHTML = '';

    restaurantsToShow.forEach(restaurant => {
        const restaurantCard = document.createElement('div');
        restaurantCard.className = 'restaurant-card';
        restaurantCard.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}" 
                     onerror="this.src='https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Food+Image'"
                     loading="lazy">
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <div>
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                    </div>
                    <span class="restaurant-rating">
                        <i class="fas fa-star"></i> ${restaurant.rating}
                    </span>
                </div>
                <div class="restaurant-details">
                    <div class="delivery-time">
                        <i class="fas fa-clock"></i>
                        <span>${restaurant.deliveryTime}</span>
                    </div>
                    <span class="delivery-fee">${restaurant.deliveryFee} delivery</span>
                </div>
            </div>
        `;

        restaurantCard.addEventListener('click', () => openRestaurantModal(restaurant));
        restaurantsGrid.appendChild(restaurantCard);
    });
}

// Filter restaurants
function filterRestaurants(category) {
    const filtered = category === 'all' ? restaurants : restaurants.filter(r => r.category === category);
    renderRestaurants(filtered);
}

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        filterRestaurants(tab.dataset.filter);
    });
});

// Category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            const targetTab = document.querySelector(`[data-filter="${category}"]`);
            if (targetTab) {
                targetTab.classList.add('active');
                filterRestaurants(category);
            }
        }, 500);
    });
});

// Enhanced search functionality with suggestions
function createSearchSuggestions() {
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';
    suggestionsContainer.id = 'searchSuggestions';
    document.querySelector('.search-bar').appendChild(suggestionsContainer);
    return suggestionsContainer;
}

const searchSuggestions = createSearchSuggestions();

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    clearTimeout(searchTimeout);

    if (searchTerm.length === 0) {
        searchSuggestions.style.display = 'none';
        renderRestaurants(restaurants);
        return;
    }

    searchTimeout = setTimeout(() => {
        const filtered = restaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.cuisine.toLowerCase().includes(searchTerm)
        );

        renderRestaurants(filtered);
        showSearchSuggestions(searchTerm, filtered);
    }, 300);
});

function showSearchSuggestions(searchTerm, results) {
    if (!searchSuggestions) return;
    
    searchSuggestions.innerHTML = '';

    if (results.length === 0) {
        searchSuggestions.innerHTML = '<div class="search-suggestion">No restaurants found</div>';
        searchSuggestions.style.display = 'block';
        return;
    }

    const topResults = results.slice(0, 5);
    topResults.forEach(restaurant => {
        const suggestion = document.createElement('div');
        suggestion.className = 'search-suggestion';
        suggestion.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" onerror="this.style.display='none'">
            <div>
                <div style="font-weight: 600;">${restaurant.name}</div>
                <div style="font-size: 0.9rem; color: var(--text-light);">${restaurant.cuisine}</div>
            </div>
        `;
        suggestion.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = restaurant.name;
            }
            searchSuggestions.style.display = 'none';
            openRestaurantModal(restaurant);
        });
        searchSuggestions.appendChild(suggestion);
    });

    searchSuggestions.style.display = 'block';
}

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar')) {
        searchSuggestions.style.display = 'none';
    }
});

// Open restaurant modal
function openRestaurantModal(restaurant) {
    currentRestaurant = restaurant;
    const restaurantInfo = document.getElementById('restaurantInfo');
    const menuItems = document.getElementById('menuItems');

    restaurantInfo.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" 
             style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;"
             onerror="this.src='https://via.placeholder.com/400x200/ff6b6b/ffffff?text=Restaurant+Image'"
             loading="lazy">
        <h2>${restaurant.name}</h2>
        <p>${restaurant.cuisine}</p>
        <div style="display: flex; gap: 2rem; margin-top: 1rem; flex-wrap: wrap;">
            <span><i class="fas fa-star"></i> ${restaurant.rating}</span>
            <span><i class="fas fa-clock"></i> ${restaurant.deliveryTime}</span>
            <span><i class="fas fa-dollar-sign"></i> ${restaurant.deliveryFee} delivery</span>
        </div>
    `;

    menuItems.innerHTML = '';
    restaurant.menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <span class="menu-item-price">$${item.price}</span>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                Add to Cart
            </button>
        `;
        menuItems.appendChild(menuItem);
    });

    restaurantModal.classList.add('active');
}

// Enhanced add to cart with animations
function addToCart(itemId) {
    const restaurant = currentRestaurant;
    const item = restaurant.menu.find(m => m.id === itemId);

    const existingItem = cart.find(c => c.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            restaurantName: restaurant.name,
            restaurantImage: restaurant.image,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('foodexpress_cart', JSON.stringify(cart));

    // Add shake animation to cart button
    cartBtn.classList.add('shake');
    setTimeout(() => cartBtn.classList.remove('shake'), 500);

    updateCartUI();
    showNotification(`${item.name} added to cart!`, 'success');
}

// Enhanced cart UI with better styling
function updateCartUI() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Add pulse animation to cart count
    if (totalItems > 0) {
        cartCount.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => cartCount.style.animation = '', 500);
    }

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
            </div>
        `;
        cartTotal.textContent = '0.00';
        checkoutBtn.disabled = true;
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style.animationDelay = `${index * 0.1}s`;
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="restaurant-name">${item.restaurantName}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">
                    <i class="fas fa-minus"></i>
                </button>
                <div class="quantity-display">${item.quantity}</div>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                    <i class="fas fa-plus"></i>
                </button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Update cart summary
    const deliveryFee = total > 25 ? 0 : 2.99;
    const tax = total * 0.08;
    const finalTotal = total + deliveryFee + tax;

    cartTotal.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Subtotal:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Delivery Fee:</span>
            <span>${deliveryFee === 0 ? 'Free' : '$' + deliveryFee.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>Tax:</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; border-top: 2px solid var(--border-color); padding-top: 0.5rem;">
            <span>Total:</span>
            <span>$${finalTotal.toFixed(2)}</span>
        </div>
    `;

    checkoutBtn.disabled = false;
}

// Enhanced quantity update with animation
function updateQuantity(itemId, change) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('foodexpress_cart', JSON.stringify(cart));
            updateCartUI();

            if (change > 0) {
                showNotification(`${item.name} quantity increased!`, 'info');
            }
        }
    }
}

// Enhanced remove from cart with confirmation
function removeFromCart(itemId) {
    const item = cart.find(c => c.id === itemId);
    if (item) {
        cart = cart.filter(c => c.id !== itemId);
        localStorage.setItem('foodexpress_cart', JSON.stringify(cart));
        updateCartUI();
        showNotification(`${item.name} removed from cart!`, 'warning');
    }
}

// Clear entire cart
function clearCart() {
    cart = [];
    localStorage.removeItem('foodexpress_cart');
    updateCartUI();
    showNotification('Cart cleared!', 'info');
}

// Cart modal controls
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
    updateCartUI();
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Restaurant modal controls
closeRestaurant.addEventListener('click', () => {
    restaurantModal.classList.remove('active');
});

// Close modals when clicking outside
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

restaurantModal.addEventListener('click', (e) => {
    if (e.target === restaurantModal) {
        restaurantModal.classList.remove('active');
    }
});

// Checkout
document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    if (!authSystem.isLoggedIn()) {
        showNotification('Please login to place an order!', 'warning');
        cartModal.classList.remove('active');
        authSystem.showAuthModal('login');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Save order to user's history
    const user = authSystem.getCurrentUser();
    const order = {
        id: Date.now(),
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        status: 'confirmed'
    };

    // Update user data in localStorage
    const users = JSON.parse(localStorage.getItem('foodexpress_users')) || [];
    const userIndex = users.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
        if (!users[userIndex].orders) users[userIndex].orders = [];
        users[userIndex].orders.push(order);
        localStorage.setItem('foodexpress_users', JSON.stringify(users));
    }

    showNotification(`Order placed successfully! Total: $${total.toFixed(2)}`);
    cart = [];
    updateCartUI();
    cartModal.classList.remove('active');
});

// Enhanced notification system with better styling
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');

    const typeConfig = {
        success: { bg: 'var(--success-color)', icon: 'fas fa-check-circle' },
        error: { bg: 'var(--danger-color)', icon: 'fas fa-exclamation-circle' },
        warning: { bg: 'var(--warning-color)', icon: 'fas fa-exclamation-triangle' },
        info: { bg: 'var(--info-color)', icon: 'fas fa-info-circle' }
    };

    const config = typeConfig[type] || typeConfig.success;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${config.bg};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        max-width: 400px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 1rem;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
    `;

    notification.innerHTML = `
        <i class="${config.icon}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            font-size: 0.8rem;
        ">×</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }

    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: var(--card-bg);
        box-shadow: 0 8px 25px var(--shadow);
        padding: 1rem 0;
        border-radius: 0 0 15px 15px;
    }

    .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    @media (max-width: 768px) {
        .nav-menu {
            display: none;        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thank you for your message! We\'ll get back to you soon.');
    e.target.reset();
});

// Location search
document.querySelector('.find-food-btn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        showNotification(`Great! We deliver to ${location}. Check out our restaurants below.`);
        document.getElementById('restaurants').scrollIntoView({ behavior: 'smooth' });
    } else {
        showNotification('Please enter your delivery address.');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
    updateCartUI();
});