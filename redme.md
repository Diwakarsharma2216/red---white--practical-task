MERN Stack App with Chakra UI Documentation
Overview
This documentation provides a guide to understanding and using the MERN stack application with Chakra UI. The application is designed to manage categories and products, storing data in MongoDB and featuring a responsive front-end developed with React and Chakra UI.

Table of Contents
Introduction
Prerequisites
Getting Started
Backend Setup
Frontend Setup
Usage
Adding Categories
Adding Products
Viewing Categories and Products
Endpoints
Project Structure
Contributing
License
Introduction
This application is a simple MERN stack project with Chakra UI, allowing users to manage categories and products. The backend is built with Node.js and Express, using MongoDB as the database. The frontend is developed with React and styled using the Chakra UI library.

Prerequisites
Before running the application, ensure you have the following installed:

Node.js and npm
MongoDB
React
Chakra UI
Getting Started
Backend Setup
Clone the repository:

bash
Copy code
git clone <repository_url>
Change directory to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory with the following content:

env
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_chakra
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Change directory to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The application should now be accessible at http://localhost:3000.

Usage
Adding Categories
Navigate to the application homepage.

In the "Add Category" section, select a category name from the dropdown or enter a new category name.

Click the "Add Category" button.

Adding Products
Navigate to the application homepage.

In the "Add Product" section, enter the product details including title, description, price, etc.

Choose a category from the dropdown.

Upload an image for the product.

Click the "Add Product" button.

Viewing Categories and Products
Categories and products can be viewed in the "View All Categories and Products" section on the homepage.

Categories and products are displayed in separate sections.

Endpoints
POST /api/categories: Add a new category.
GET /api/categories: Retrieve all categories.
POST /api/products: Add a new product.
GET /api/products: Retrieve all products.
Project Structure
backend: Contains the Node.js server code.
frontend: Contains the React application code.
Contributing
If you would like to contribute to this project, feel free to submit a pull request.

License
This project is licensed under the MIT License.

