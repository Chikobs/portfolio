# ShopEase - E-Commerce System - PROJECT 11

**Color Theme:** Blue & White (#0d6efd & #ffffff)
**Tech Stack:** HTML5, CSS3, Bootstrap 5.3, JavaScript (Vanilla), LocalStorage
**Responsive:** Yes - Mobile, Tablet, Desktop (Tested on Chrome DevTools)

## Project Modules Covered (As per Day 1-16)
1.  **Customer Registration** - register.html (saves to localStorage ec_users)
2.  **Customer Login / Authentication** - login.html
3.  **Products Management** - 8 demo products with images in script.js
4.  **Categories** - Electronics, Fashion, Groceries, Accessories (filter system)
5.  **Shopping Cart** - Add, Remove, Increase/Decrease Qty - persistent across all pages
6.  **Checkout** - cart.html -> checkout() -> creates Order
7.  **Order History** - orders.html (reads ec_orders)
8.  **Product Images** - Unsplash CDN images + product cards
9.  **Admin Dashboard** - admin.html (Products count, Orders count, Customers count, Low Stock Alert)

## Files Structure & Connection
All files are interconnected via shared localStorage keys:
- ec_cart
- ec_users
- ec_currentUser
- ec_orders

E-Commerce-Project11/
├── index.html       - Home + Hero + Featured + Categories (Screenshot design)
├── shop.html        - DIFFERENT FORMAT - Sidebar filter layout
├── cart.html        - Full cart page + order summary
├── register.html    - Customer Registration module
├── login.html       - Customer Login module
├── orders.html      - Order History module
├── admin.html       - Admin Dashboard module
├── logout.html      - Logout + auto redirect
├── style.css        - Blue & White Theme (one CSS for all)
├── script.js        - Main logic (one JS for all)
└── README.md

## How Pages Are Connected
- Navbar on every page links to Home, Shop, Cart, Orders, Admin, Login/Register
- Cart badge (#cartCount) updates on ALL pages from same localStorage
- Adding product in index.html -> appears in shop.html & cart.html
- Checkout in cart.html -> Order appears in orders.html and admin.html
- Login in login.html -> user stays logged in across pages
- Low Stock Alert logic in admin.html (<10 stock = alert)

## How To Run
1. Download folder
2. Double-click index.html (No server needed)
3. Test flow: Register -> Login -> Shop -> Add to Cart (2 items) -> Cart -> Checkout -> Check Orders -> Check Admin Dashboard

## Responsive Design
- Used Bootstrap 5 grid: col-6 col-md-3 for products (2 per row on phone, 4 on desktop)
- Hero stacks on mobile
- Shop layout: sidebar on desktop, top on mobile (flex-direction: column)
- Offcanvas cart width 88% on mobile

## Future Upgrade (PHP/MySQL Version)
- Replace localStorage with PHP sessions & MySQL
- Use Object-Oriented PHP for Product, User, Order classes
- File upload for product images
- Real payment gateway

Author: [Your Name] - Project 11 Submission
Date: 2024