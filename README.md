# Resume

- This is a super simple web project represents my resume.
- Regardless of its simplicity, it includes very fundamental and vital tech used in front end, such as
    - React.js
    - Atomic design pattern
    - Styled component
    - Responsive design
    

# Atomic design pattern

- To make an efficient and reusable website, I applied the Atomic design pattern.
- First, I created very basic component as atoms, such as `Large Text` and `Small Text`.
- Then, created modules that are combination of atoms
- Finally, created higher level pages by assembling those modules and atoms
![resume-atomic-design](./src/img/resume-atomic-design.jpg)




# Embedded styled component

- To realize atomic design, I also used styled component instead of using plane CSS and SASS
- Each atomic is combination of react component and styed component
- Example code: when you want to create medium title (heading), it is realized by one component which is a combination of "styed component" and "react function"


```javascript
const H2 = styled.h2`
        margin-top:-0.5rem;
        margin-bottom: 1.5rem;
        font-size: 2rem;
        font-weight: 700;
        font-family: Oswald, sans-serif;
        line-height:128%;
        color: ${styledVariables["secondary-color"]};
`;

function MediumTitle(props){
    return(
        <H2>{props.children}</H2>
    );
}
```

# Style guide
- To realize atomic design, I first created style guide
- By creating style guide is deeply connected to component(atoms)
- I created 3 types of mock-up and ask my neighbors and colleagues that which is best

![design-guide](./src/img/design-guide.svg)
![mock-ups](./src/img/mock-up.png)

# Responsive
### Break points
- To make it readable in multiple device, this website has responsive design
 *animation
- To realize this, I set four break-points common used in 2020, and created a function so that I can easily call and use it
- How I set break points
```javascript
const breakpoints = {
        sm: 575.98,
        md: 767.98,
        lg: 991.98,
        xlg:1199.98
}

export const mq = (width) => {
    return(
        style => `@media (max-width: ${breakpoints[width]}px) { ${style} }`
    );
}
```

- Usage example: by wrapping `${mq({parameter})` //code  `};`, you can easily use and manage breakpoints.
```javascript
const Grid = styled.div`
    // other codes
    ${mq("lg")`
        display: block;
        margin-bottom:4rem;
    `};
`;
```
- Usually these days, we use mobile first as break points, but this time I adopted "desktop first" because the resume is supposed to seen as letter size

### calc
- To make responsive design and decent appearance, `calc` was well used for adjusting size.
    - code 1
    - code 2

<!-- # Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
