# QuoteMe

## Description

This is a full-stack application built with the PERN stack that generates random quotes
using an external API, as well as allowing users to create and manage their own database
of custom quotes.

## Installation

Before starting, make sure [Node.js](https://nodejs.org/en/) is installed on your computer.

1. Clone this repository using `git clone https://github.com/Velkore/quote-generator.git`
2. Navigate to the project directory: `cd quote-generator`
3. Install dependencies using `npm install`

## Usage

Start the application in development mode by running:

```
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

To build the application for production, use:

```
npm run build
```

This will generate an optimized and minified build in the `/dist` directory.

You can preview the production build by running:

```
npm run preview
```

## Dependencies

This project uses the following dependencies:

- [@popperjs/core](https://popper.js.org) - for positioning popovers and tooltips
- [axios](https://github.com/axios/axios) - for making HTTP requests
- [bootstrap](https://getbootstrap.com) - for styling the application
- [react](https://reactjs.org) - for building UI components
- [react-bootstrap](https://react-bootstrap.github.io) - for easy integration of Bootstrap in React
- [react-dom](https://reactjs.org/docs/react-dom.html) - for rendering React components in the browser

## Dev Dependencies

This project uses the following dev dependencies:

- [@types/react](https://www.npmjs.com/package/@types/react) - for providing TypeScript definitions for React
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - for providing TypeScript definitions for React DOM
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react) - for enabling React support in Vite
- [vite](https://vitejs.dev) - for building and serving the application in development and production
