# Problem Statement

You are to build a simplified "YouTube Clone" web application. This application should allow users to:

View a list of predefined video thumbnails.
Click on a thumbnail to play the video.
See basic information about the video such as the title and description.

Note: You will be calling the videos API in a paginated manner.
(Read this to know more about API pagination - https://nordicapis.com/everything-you-need-to-know-about-api-pagination/)

For fetching videos use the below-mentioned API

curl --location --request GET 'https://internship-service.onrender.com/videos?page=2'

`page` starts with 0 and you should call the API with incremented values for Pagination.

# Tech Stack

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [react-player](https://www.npmjs.com/package/react-player)

# Getting Started

This is a [React.js](https://react.dev/) project bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app).

Firstly, make sure you have [Nodejs](https://nodejs.org/en) installed.

**To Install all the required node modules**

```bash
npm install
```

**To run the development server:**

```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
