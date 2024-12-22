# Crabstore - Elegant Auctions

Welcome to **Crabstore**, an ecom website built with React, TypeScript, and styled-components. This project was designed as part of a learning exercise in modern frontend frameworks and practices, providing users with a seamless shopping and auction experience.

[Live Demo](https://crabstore.netlify.app)

---

## **Table of Contents**

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## **About the Project**

Crabstore is a ecom site that allows users to:

- View a list of products on the homepage.
- Search for products using a lookahead search bar.
- View individual product details with reviews.
- Add items to the shopping cart.
- Complete a checkout process and see a success page.
- Contact the site via a contact form with validation.

This project demonstrates the use of modern React practices, including React Router for navigation, custom hooks for data fetching, and context for state management.

---

## **Features**

- **Homepage**:
  - Displays a list of products fetched from a REST API.
  - Lookahead search bar for quick product searches.
- **Product Page**:
  - Dynamic product details fetched based on URL parameters.
  - Customer reviews and discount calculations.
- **Shopping Cart**:
  - Displays the number of items in the cart.
  - Allows adding and removing products.
- **Checkout**:
  - Simple checkout page with a success confirmation.
- **Contact Page**:
  - Contact form with validation for required fields.
- **Responsive Design**:
  - Mobile-first design for a great user experience on all devices.

---

## **Technologies Used**

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) (18.3.1)
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
- ![React Router](https://img.shields.io/badge/-React_Router-CA4245?logo=react-router&logoColor=white&style=for-the-badge) (7.0.2)
- ![Styled-components](https://img.shields.io/badge/-Styled--components-DB7093?logo=styled-components&logoColor=white&style=for-the-badge) (6.1.13)
- ![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge) (deployment)

---

## **Setup and Installation**

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/crabstore.git
   cd crabstore
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## **Available Scripts**

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app configuration (use with caution).

---

## **Project Structure**

```
src/
  ├── components/        # Reusable UI components
  ├── context/           # Context for global state management
  ├── hooks/             # Custom React hooks
  ├── pages/             # Page-level components (Home, Product, etc.)
  ├── theme/             # Global and theme styles
  ├── App.tsx            # Main application component
  └── index.tsx          # Entry point
```

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- This project was bootstrapped with [Create React App](https://create-react-app.dev/).
- Special thanks to [Netlify](https://www.netlify.com/) for hosting.

---
