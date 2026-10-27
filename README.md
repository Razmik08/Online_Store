# Online Store API

A REST API built with **Node.js** and **Express.js** that retrieves product data from the [Fake Store API](https://fakestoreapi.com/).

## Features

- Retrieve all products.
- Retrieve product items.
- Retrieve product categories.
- Render About and Contacts pages using EJS.
- Configure the server port using environment variables.

## Technologies

- Node.js
- Express.js
- EJS
- dotenv
- Fake Store API
- Nodemon

## Project Structure

```text
Online_Store/
├── index.js
├── package.json
├── .env
├── .gitignore
├── pages/
│   ├── about.ejs
│   └── contacts.ejs
└── router/
    ├── app.js
    └── products.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Razmik08/Online_Store.git
   cd Online_Store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:

   ```env
   PORT=5000
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The server will run at `http://localhost:5000`.

## Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Retrieve all products |
| GET | `/about` | Display the About page |
| GET | `/contacts` | Display the Contacts page |
| GET | `/products` | Retrieve product data |
| GET | `/products/items` | Retrieve product items |
| GET | `/products/categories` | Retrieve product categories |

## External API

Product data is provided by [Fake Store API](https://fakestoreapi.com/).

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port used by the Express server | `5000` |

## License

This project was created for educational purposes.
