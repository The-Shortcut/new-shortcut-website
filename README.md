## How to start the application locally:

- Clone the repository
- Install the package dependencies
- If you get the error 'Error: resolve-url-loader: CSS error', go to `src>index.scss` and select end of line sequence to LF instead of CRLF. This error is produced only on Windows.
- Add `.env` file to the project's root folder (the same level as public and src folders)
- Add the access tokens (for eventbrite and mapbox) into the `.env` file
- Run the project in localhost

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
