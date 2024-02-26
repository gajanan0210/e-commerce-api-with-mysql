# E-commerce API with Node.js & MySQL
This project is an API set to support e-commerce operations, such as product and category listing, product details, cart management, and order processing. It uses Node.js with Express for the backend and MySQL for the database.

### Installation

Clone the repository:



    git clone https://github.com/your-username/e-commerce-api-nodejs.git

### Install dependencies:

    cd e-commerce-api-nodejs
    npm install

#### Set up environment variables:


#### Create a .env file in the root directory and add the following:


    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    JWT_SECRET=your_jwt_secret_key
    PORT=3000

### Start the server:

    npm start

#### API Endpoints

Category Listing:   /categories (GET)

Product Listing: /products/category/:categoryId (GET)

Product Details: /products/:productId (GET)

#### Cart Management:

Add to Cart: /cart/add-to-cart (POST)

Get Cart: /cart/get-cart (GET)

Update Cart Item: /cart/update-cart/:cartItemId (PUT)

Remove from Cart: /cart/remove-from-cart/:cartItemId (DELETE)

#### Order Placement:

Place Order:  /orders/place-order (POST)
Order History: /orders/order-history (GET)
Order Details: /orders/:orderId (GET)

#### User Authentication:

Register: /auth/register (POST)

Login: /auth/login (POST)

#### Error Handling

The API includes error handling middleware to provide meaningful error messages and status codes.

#### User Authentication

The API uses JSON Web Tokens (JWT) for user authentication. Users can register, login, and obtain a token to authenticate API requests.
