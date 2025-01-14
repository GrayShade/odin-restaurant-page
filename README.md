# odin-restaurant-page

## Description

This is a simple restaurant frontend. It is part of [The Odin Project](https://www.theodinproject.com/). At the time of writing, link for this particular project is [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

## Working & Structure

This project comprises of standard front end technologies HTML, CSS & JS. webpack as well as NPM for various NPM packages are required for it to work properly. It consists of a `src` directory containing project source code. `package.json` file contain list of required NPM modules & their versions. This file can also be used to download & install packages elsewhere where this project is cloned. `webpack.config.js` contains webpack related configurations. This project uses ES6 modules for multiple js files. `template.html` contains basic html template & is our main html file. Entry point file is `index.js` & other js files are its dependencies. Flow of program is controlled by `index.js`.

Required function from module of each tab is exported via ES6 modules but in code, `home.js` uses object constructor / prototype, `menu.js` uses static methods & class syntax. Static methods are required because `contact.js` uses pre ES6 module pattern(factory function inside IIFE). These approaches are not for any particular reason.

 CSS styles are loaded via webpack & need specific modules first to be installed via npm & then configured via webpack. For debugging of webpack project on live server, webpack dev server package is installed via NPM. it can be started via terminal(cmd in my case) using:

    npx webpack serve

For bundling project, use:

    npx webpack

Dev dependencies will not be included in final project & can be specified in webpack config file. In same file, dev & production modes can be set. After any change to `webpack.config.js`, it needs to be restarted before any changes to take effect if its running already.

## Thoughts

ES6 modules were already used in library project & saw how they made the project easier by breaking it into modules. Though this project was a first introduction to the webpack & npm modules properly. webpack was quite an interesting new thing & after this project, node packages & related configurations, bundler & related configurations no more feel intimidating.

## Importing Project

For importing this project, don't copy `node_modules` . This is why `package.json` file is so useful. It keep tracks of required packages & their versions. You just need source code, `webpack.config.js` & `package.json` file pre configured. `webpack.config.js` is required to not manually do all configs. Though change it according to your needs like switching between dev & production modes. To install all dependencies specified in `package.json`, use following in project root where `package.json` is present:

    npm install

## Future Ideas

- Adding an order option on each card which can be incremented / decremented & a cart icon on header to show total orders by a number.
- Adding js validation to form on contact tab.
