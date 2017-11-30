# React Starter Kit with Semantic UI

This repository contains boilerplate code to help kickstart a frontend project with [React](https://reactjs.org), using the [React Semantic UI](https://react.semantic-ui.com/) integration. The aim of this project is for developers to be able to clone this repository and make a start on development without having to set up all the boilerplate code that is the same every time. Clone the repository, run the build script and you're ready to create a beautiful React application! Also comes pre-installed with [React Router](https://reacttraining.com/react-router/) for all your Single Page Application routing needs. 

## Features

### React

React is a JavaScript Frontend framework developed by [Facebook Open Source](https://code.facebook.com/projects/), It allows developers to use a component-based system to build a modular, reusable user interfaces. Find out more at the [official website](https://reactjs.org). 

### React Semantic UI

React Semantic UI is a port of the [Semanic UI](https://semantic-ui.com/) library for React. It provides a wide variety of beautifully designed UI components ready to use, with extremely customisable options for theming. Find out more at the [official website](https://react.semantic-ui.com/).

### React Router

React Router is a vital part of the React ecosystem that provides routing for Singe Page Applications. It enables you to build a full blown application with static and dynamic routes right within React, which allows the whole site to be served as a static HTML file, purely managed by JavaScript. Find out more at the [official website](https://reacttraining.com/react-router/). 

### SCSS Breakpoints

Some useful breakpoint mixins are provided in the `src/app/styles/_bp.scss` file. They are provided for convenience when creating responsive design and use a mobile-first approach. View the `README.md` file in the `src/app/styles` folder for more details on how to use the mixins. 

### Webpack 3

[Webpack](https://webpack.js.org/) is a code bundler that allows you to transpile, transform and bundle your code for deployment. This project comes with two pre-configured Webpack build processes - one optimised for development, and one optimised for production. The configurations support SCSS transpilation, code splitting and dynamic imports, ES6 syntax, as well as async-await and decorators.

## What's provided

When you run this project for the first time, you are presented with a basic Single Page Application built with React. It contains:

* A landing page showing a kitchen sink containing commonly used Semantic UI components
* A few links to other basic pages to show the React Router functionality
* Some basic styling boilerplate SCSS files

That's it! The rest is up to you to implement. 

### Source structure

The Semantic UI styling assets are kept in the `src/semantic-ui` folder. The built and minified assets are output to the `src/semantic/dist` folder, where they can be imported to the application using the `src/app/styles/_semantic.scss` file. The files inside `src/semantic-ui/src/site` can be used to customise the look and feel of the site. The other files in the `semantic-ui` directory should not need to be modified.

The files inside `src/app` can be customised in any way to build your application. The files `webpack.*.js` and `package.json` contain the scripts that build the project. 

```
    .
    ├── src/
    │   ├── app/
    │   │   ├── components/...       # Custom components
    │   │   ├── containers/...       # Custom component containers
    │   │   ├── styles/...           # Styles used by components
    │   │   ├── views/...            # Custom 'views' built from components
    │   │   └── App.js               # Root application component (contains routing logic)
    │   ├── assets/
    │   │   ├── index.html           # Index page template
    │   │   └── ...                  # Static assets go in here
    │   ├── semantic-ui/
    │   │   ├── dist/...             # Compiled and minified css (do not commit)
    │   │   ├── src/
    │   │   │   ├── site/...         # Site theme customisation files (modify these)
    │   │   │   ├── themes/...       # Default Semantic UI themes (try not to modify)
    │   │   │   └── ...
    │   │   ├── tasks/...            # Gulp tasks for building assets (do not modify)
    │   │   └── gulpfile.js          # Gulp tasks for building assets (do not modify)
    │   ├── index.js
    │   └── ...
    ├── package.json
    ├── webpack.common.js
    └── ...
```

## How to use this project

**Windows users:** Please use a UNIX based terminal to execute these commands.

### Installation

1. Clone the repository onto your local machine.
2. Ensure you have `npm` installed. 
3. In the root directory of the project, run `npm install` to install all required dependencies. 

*NOTE: As of November 2017, you cannot use `yarn` to install the packages as the Semantic UI React install script does not seem to work properly with `yarn`.*

### Running the project locally

1. If you have never built the project before, run the command `npm run build:semantic` to build the Semantic UI assets for the first time (this will output the files into the `src/semantic-ui/dist` directory, where they are imported into other files). 
2. Run `npm run local` to build and serve the project on `http://localhost:8080`. 

This will use `webpack-dev-server` to serve the assets, and watch source files for any changes. Note that you do not need to run `npm run build:semantic` again once you've built the Semantic UI assets once as `npm run local` will watch the source for any changes and rebuild the assets. 

#### Running the project locally (app only)

Use this method if you do not intend to modify any Semantic UI components. Changes to the source inside `src/semantic-ui` will not be compiled in this mode. 

1. As previously mentioned, if you have never built the project before, run the command `npm run build:semantic` to build the Semantic UI assets for the first time (yes, this step is still required).
2. Run `npm run local:app` to build and serve the project on `http://localhost:8080`.


### Building for production

**IMPORTANT:** this build currently includes ALL Semantic UI components in the package, as it is not yet optimized with treeshaking correctly. Hopefully this will be fixed in the future!

1. Run the command `npm run build`.
2. This should output the build files into the folder `dist`. You may upload these files to a server for static web hosting. 

#### Building for production (app only)

Use this method if the Semantic UI components have not been modified since the last build. This command will execute the build quicker as it will not recompile the Semantic UI assets. 

1. Run the command `npm run build:package`.
2. This should output the build files into the folder `dist`. You may upload these files to a server for static web hosting. 


## Notes on conventions used

### Components, containers and views

Components, containers and views are all React components, but each one serves a specific purpose and are separated into different folders. A **component** is a sometimes also known as a 'dumb component', as its only job is to render information to the user - they are only concerned with how things look, and will rarely contain state. A **container**, sometimes also known as a 'smart component', often serve as data sources. They are not concerned with how things look, so they should not need any styles. Their main purpose is to retrieve data from a source and pass the data to components to display that data. This [article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) contains a more in depth summary of the differences.

A **view** is a top-level component that is used at the top level of the React router switch (found in `src/app/App.js`). It is a stand-alone 'page' that should be displayed at a route, and can contain components and containers. A view should not be nested inside another container, component or view. 

### BEM style class names

Class names used for styling components follow the BEM style guide, outlined [here](http://getbem.com). Block names are prefixed with one of `component` or `view` (containers do need any styling). Each component or view is considered one block. Each block has their own SCSS file, located in `src/app/styles` with the file name being the same as the block name. 


### The Trailing Comma

You may notice that there are a bunch of trailing commas in the source code. For example, see the comma following `publicPath`, even though it's the last key in the object: 

```javascript
output: {
    path: __dirname + '/dist',
    filename: 'js/[name].min.js',
    publicPath: '/',
}
```

This is a newer convention - it allows you to add a new key to the object or a new item to an array without needing to modify the previous line. This is helpful as it allows a more accurate reporting of lines changed when you make commits. 

## License

This project is licensed under the MIT License.

Copyright (c) 2017 bwyap

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
