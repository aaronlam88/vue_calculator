# vue_calculator

## How this project is created?

```shell
npm install -g @vue/cli
vue create vue_calculator
```

- `public/index.html` is the entry point for browser, then we will load `main.js`
- `main.js` will create vue component `App` and mount it in `<div id="app">` in `index.html`
- `App.js` will then create and mount `Calculator.vue`
- `Calculator.vue` is where the logic and UI for the calculator
- In `package.json` you will find `scripts` that define `npm run` command below

## Project setup

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run serve
```

For development, you can run this to access the UI at <http://localhost:8080>

With hot-reloads, you won't have to re-run this and see changes on UI

### Compiles and minifies for production

```shell
npm run build
```

For production, you should run this to create a build. Your build can be found in `dist` directory. You should have a backend server to serve this directory to clients.

You can think of this as compile & package your code so it can be run on client's browser

### Lints and fixes files

```shel
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Normally you don't need to change default config. However, if you want to change entrypoint or file names, Vue allow you to change the default config as well.
