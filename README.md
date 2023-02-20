# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





# E-COMMERCE SITE
_(yet to be named)_

--------------------------------------------------------------------------------------------------------------------------------------------------------
### To Get Up and Running
- pull down code
- install packages (npm i, yarn)
- run with `npm start` or `yarn start`


Try it out live yourself here => https://e-commerce-nine-bice.vercel.app/


## Things I did 

- Used [Material UI (MUI)](https://mui.com/) as my style library because I am familiar with it so saved on time there versus building out custom components or looking into other design libraries and learning their specificities. It also is pretty accessible so that saves tons of time vs if I were to implement custom components and have to make them completely accessible.
- Used the `sx` prop MUI provides for times sake instead of creating separate style files.
- I made it so you can only add an item to the cart once for the sake of time, but would've utilized the quantity field and allowed the user to choose a quantity of the item they would've liked to add to the cart.

## Things I left out because of time

- Tests
- Sass modules (my preferred way of styling)
  - instead used the `sx` prop
- 'Prettier' keyboard navigation
  - left most of the default keyboard navigation MUI provides for time.
- I would've liked to do more with the categories and make tags for them.
- Did not utilize all the fields in the data that were given. Chose to only display the most important ones from my perspective.
- States:
  - Would have made 'better' (more informative and better designed) states for loading, error and empty.
- Would have made the shopping cart more complex and informative to the user.
- Add animations to the card flipping to the description side and other animations.







