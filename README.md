# Kavtek Project Outline

This project contains 2 card components, first card will get the total sales from the API endpoint provided. A line chart is implemented where the time will be on the X axis and the sales on the Y axis.

For the second card, an API endpoint containing a list of users is provided and the list is displayed in a table format. A Search bar is also implemented that allows searching by name, city and date registered. 

### Component Tree Structure 

    .
    ├── Components
    |    |__ LineChart
    |        |__ Sales.css
    |        |__ Sales.js
    |    |__ProfileCard
    |        |__ Profile.css
    |        |__ Profile.js
    |    |__UserTable
    |        |__ DataTable.js
    |        |__ UsersChart.css
    |        |__ UsersChart.js
    |    |__Sidebar.css
    |    |__Sidebar.js
    |
    |__App.js
    |__App.css
    └── Readme.md


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

