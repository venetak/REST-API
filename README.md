# REST-API
Node js RESTful API


## Requirements

1. Node js v10.15.3
2. Mongo DB
3. Robo 3T (for easier database management)


## Installation

Go to the root of the repository and run

`npm install`

## Running

Go to the root of the project and run

`npm run devserver`

This requires a global installation of [nodemon](https://www.npmjs.com/package/nodemon).
It will start a dev server and the requests to the API will be available on localhost, port 3000 (http://localhost:3000/)

## Authentication

Send a POST/login request with this body:
  ```js
  {
      username: 'admin',
      password: 'admin'
  }
  ```
  These credentials are required for all requests except `GET/products` and `GET/product/:id`

## API requests:

1. **GET** `/products`
1. **POST** `/product`
    1. Product schema:
    ```js
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 1
        },
    }
    ```
1. **GET** `/product/:id`
1. **DELETE** `/product/:id`
1. **PUT** `/product/:id`
1. **GET** `/orders`
1. **POST** `/order`
  1. Order schema
  ```js
   {
    date: {
        type: String,
        default: Date.now,
        required: true
    },
    products: [{
        type: ObjectId,
        required: true,
        ref: 'Product'
    }],
    status: {
        type: String,
        enum: STATUSES
    }
  }
  ```
1. **GET** `/order/:id`
1. **PUT** `/order/:id`
1. **POST** `/login`
1. **POST** `/logout`
