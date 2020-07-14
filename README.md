## How to start the application locally:

1. 'git clone' the repository;
2. run 'npm install' to install the package dependencies;
3. If you get the error 'Error: resolve-url-loader: CSS error', go to node_modules>resolve-url-loader>index.js and change 'removeCR : false' to 'removeCR : true';
4. add .env file to the project's root folder (the same level as public and src folders), add the access tokens (for eventbrite and mapbox) into the .env file;
5. run the project in localhost.

Bingo!

## Tools used

- React
- node-sass
- react-bootstrap
- react-router-dom
- react-map-gl
- react-skeleton-loading
- moment
- font-awesome
- Axios
- Firebase

