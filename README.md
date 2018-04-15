npm init - creating package.json file

npm install webpack babel-core babel loader babel-preset-es2015 babel-preset-react react react-dom --save

Installing locally is what is best recommend for most projects. This makes it easier to upgrade projects individually when breaking changes are introduced. Typically webpack is run via one or more npm scripts which will look for a webpack installation in the local node_modules directory.

Webpack allows to easily modularize our code and bundle it into a single Javascript file. It is supported by numerous plugins, and chances are that there’s a plugin for almost any build task.