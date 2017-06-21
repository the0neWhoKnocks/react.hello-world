# Hello World

A simple Hello World example that utilizes React, WebPack, & Babel.

![react-hello-world-preview](https://user-images.githubusercontent.com/344140/27402071-3fd05eb4-567a-11e7-9601-812e9edda999.gif)

The point of this is to demonstrate how to drop transpiled React components
onto an ES5 page, and how to then interact with them. The interaction occurs
within `public/js/page.js` where it adds the components to the DOM and sets
custom data on the second component instance.

As you can see from the preview above, when initialized without any data it 
defaults to empty inputs with default values utilized for placeholder text.
The second initialization provides data so that the inputs are populated
when rendered.

---

## Installation

```sh
npm i -dd
```

---

## Run

### For *nix Systems (or Windows with ConEmu & Cygwin)

To compile and start a webpack server
```sh
npm start
```
Navigate to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/).
Notice that the bundle isn't written to the file system, but rather served from
memory via the `publicPath` prop in `webpack.config.js`.

To just compile
```sh
npm run compile
```
You can then navigate to `public/` and open `index.html` in a browser. You'll
notice without the WebPack server the bundle is actually output to the file
system and is much smaller. 
