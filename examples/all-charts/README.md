## Example project using chart core packages and webpack

In this sample project, we use webpack to bundle as a bundler and the most important part is we use the core nebula.js packages and install the other peer dependencies along side with it, in order to have a bit more control in our final bundle size.

So here is the folder structure of the project:

    .
    ├── dist                         # Compiled files
    ├── src                          # Source files
    │   ├── chartConfigs             # char config objects exported from this folder
    │   │   ├── barChart.js          # bar chart configuration
    │   │   ├── lineChart.js         # line chart configuration
    │   │   ├── scatterPlot.js       # scatter plot configuration
    │   │   └── index.js             # a simple barrel file to export all configurations
    │   ├── configure.js             # registration file for core packages
    │   ├── connect.js               # main connection file for logging in to your qlik app
    │   ├── index.js                 # app initializer
    │   ├── index.html               # main html file
    │   └── styles.css               # main css file
    ├── .gitignore                   # ignore files for git
    ├── package.json                 # packages list
    ├── webpack.config.js            # webpack config file
    └── README.md

Here is some useful commands:

- **`build:dev`:** for running project in dev mode with `webpack-dev-server`
- **`build:prod`:** compile project to the `/dist` folder
- **`serve:prod`:** serve the final project with `serve` package

for starting project you need to install dependencies first and then run `build:dev` for serving the project with dev mode enabled. it will open two new tabs in your browser, `localhost:1234` and `localhost:1235`. first one will show the app for you and the second one is for bundle analyzer.
