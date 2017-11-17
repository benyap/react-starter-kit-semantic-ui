# React and Semantic UI Starter Kit

This repository contains boilerplate code to help kickstart a frontend project with [React](https://reactjs.org), using the [React Semantic UI](https://react.semantic-ui.com/) integration. The aim of this project is to for developers to be able to clone this repository and make a start on development without having to set up all the boilerplate code that is the same every time. Clone the repository, run the build script and you're ready to create a beautiful React application! Also comes pre-installed with [React Router](https://reacttraining.com/react-router/) for all your Single Page Application routing needs. 

## Features

### React

React is a JavaScript Frontend framework developed by Facebook Open Source, and it is what this project is built upon. Find out more at the [official website](https://reactjs.org). 

### React Semantic UI

React Semantic UI is a port of the [Semanic UI](https://semantic-ui.com/) library for React. It provides a wide variety of beautifully designed UI components ready to use, with extremely customisable options for theming. Find out more at the [official website](https://react.semantic-ui.com/).

### React Router

React Router is a vital part of the React ecosystem that provides routing for Singe Page Applications. It enables you to build a full blown application with static and dynamic routes right within React, which allows the whole site to be served as a statically. Find out more at the [official website](https://reacttraining.com/react-router/). 

## What's provided

When you run this project for the first time, you are presented with a basic Single Page Application built with React. It contains:

* A landing page showing a kitchen sink containing commonly used Semantic UI components
* A few links to other basic pages to show the React Router functionality

That's it! The rest is up to you to implement. 

### Source structure

The Semantic UI styling assets are kept in the `semantic` folder. The built and minified assets are output to the `semantic/dist` folder, where they can be imported to the application using the `src/styles/semantic.scss` file. The files inside `semantic/src/site` can be used to customise the look and feel of the site. The other files in the `semantic` directory should not need to be modified.

The files inside `src` can be customised in any way to build your application. The files `webpack.config.js` and `package.json` contain the scripts that build the project. 

```
    .
    ├── config/                      # Environemnt variables for the dev and prod build
    │
    ├── semantic/                    # Semantic UI assets
    │   ├── dist/                    # Compiled and minified css (do not commit)
    │   ├── src/
    │   │   ├── site/...             # Site theme customisation files (modify these)
    │   │   ├── themes/...           # Default Semantic UI themes (try not to modify)
    │   │   └── ...
    │   ├── tasks/...                # Gulp tasks for building assets (do not modify)
    │   └── gulpfile.js              # Gulp tasks for building assets (do not modify)
    │
    ├── src/                         # Application source
    │   ├── assets/                  # Static assets
    │   │   ├── index.html           # Index page template
    │   │   └── ...
    │   ├── components/              # Custom components
    │   │   ├── App.js               # Root application component
    │   │   └── ...
    │   ├── styles/                  # Custom component stylesheets
    │   │   ├── semantic.scss        # Imports styling for React Semantic UI components
    │   │   └── ...
    │   ├── index.js
    │   └── ...
    │
    ├── package.json
    ├── webpack.config.js
    └── ...
```

## How to use this project

### Installation

1. Clone the repository onto your local machine.
2. Ensure you have `npm` installed. 
3. In the root directory of the project, run `npm install` to install all required dependencies. 
   *NOTE: As of November 2017, you cannot use `yarn` to install the packages as the Semantic UI React install script does not seem to work properly with `yarn`.*

### Running the project locally

1. If you have never built the project before, run the command `npm run build:semantic` to build the Semantic UI assets for the first time. 
2. Run `npm run local` to build and serve the project on `http://localhost:8080`. 

This will use `webpack-dev-server` to serve the assets, and watch source files for any changes. Note that you do not need to run `npm run build:semantic` again once you've built the Semantic UI assets once as `npm run local` will watch the source for any changes and rebuild the assets. 

### Building for production

**IMPORTANT:** this build currently includes ALL Semantic UI components in the package, as it is not yet optimized with treeshaking correctly. Hopefully this will be fixed in the future!

1. Run the command `npm run build`.
2. This should output the build files into the folder `dist`. You may upload these files to a server for static web hosting. 

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