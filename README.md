🎭 Fake Shop - A React E-Commerce Learning Project

A comedic fake shopping cart application built with React, demonstrating core React concepts including routing, context management, and component composition.

🧐 What is This?

Welcome to the **Fake Shop** — where nothing is real, but everything works! Add products to your cart, manage quantities, and complete your order... only to discover it will never be fulfilled. It's the perfect learning experience! 😂

🎓 Project Lesson

This project is part of **The Odin Project's React curriculum**.

👉 [Shopping Cart Lesson](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)

✨ Features

- 🛍️ Live Product Catalog — Fetches products from [FakeStore API](https://fakestoreapi.com/)
- 🛒 Shopping Cart — Add/remove items, adjust quantities, persists to localStorage
- 📊 Real-time Cart Badge — Navbar shows item count that updates instantly
- 💰 Order Receipt — Clean cart display with total calculation
- 🎪 Fake Order Modal — Click "Complete Order" for a surprise!
- ✅ PropTypes Validation — Type-safe component props

🚀 Getting Started


# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

src/
  ├── api/
  │   └── productService.js    (FakeStore API integration)
  ├── context/
  │   ├── CartContext.jsx      (Shopping cart state)
  │   ├── useCart.js           (Cart hook)
  │   ├── ProductsContext.jsx  (Products state)
  │   └── useProducts.js       (Products hook)
  ├── components/
  │   ├── ProductCard.jsx      (Individual product display)
  │   ├── CartItem.jsx         (Cart item with controls)
  │   ├── OrderModal.jsx       (Fake order confirmation)
  │   ├── Layout.jsx           (Header + routing)
  │   └── Footer.jsx
  ├── pages/
  │   ├── Home.jsx             (Landing page)
  │   ├── Shop.jsx             (Product listing)
  │   ├── Cart.jsx             (Shopping cart)
  │   └── Contact.jsx          (Contact info)
  └── styles/
      └── styles.css