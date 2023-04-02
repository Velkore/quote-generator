# Server

This is a Node.js server application. It is built with [Express](https://expressjs.com/) and uses [PostgreSQL](https://www.postgresql.org/) for database operations.

## Getting Started

To get started, first, clone the repository:

```
git clone https://github.com/Velkore/quote-generator.git
cd server
```

Then, install the dependencies:

```
npm install
```

## Usage

To start the server, run:

```
npm start
```

To start the server in development mode (with [Nodemon](https://nodemon.io/)), run:

```
npm run dev
```

## Dependencies

- [cors](https://www.npmjs.com/package/cors) - Allows cross-origin resource sharing
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from `.env` file
- [express](https://expressjs.com/) - Web framework for Node.js
- [pg](https://www.npmjs.com/package/pg) - PostgreSQL client for Node.js

## Dev Dependencies

- [nodemon](https://nodemon.io/) - Automatically restarts the server on file changes

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
