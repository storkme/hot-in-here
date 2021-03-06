# angular-typescript-webpack-starter

* Angular 2
* Webpack 2
* Typescript 2
* Sass preprocessor
* Unit testing with Karma and Jasmine
* Linting with codelyzer

Lots of this setup was 'borrowed' from the [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter) project
on GitHub.

## Get started

1. Clone this repo:
    
    ```git clone --depth 1 git@git.eckoh.com:alex-storkey/angular-typescript-webpack-starter.git```
    
    Note that `--depth 1` removes all but one .git commit history

2. Install dependencies using npm or yarn:

    ```npm install``` or ```yarn install```

3. Run the `serve-watch:jit` script to kick off the dev server.
``
    ```npm run serve-watch:jit```
  
4. Open up [http://localhost:9000/webpack-dev-server/](http://localhost:9000/webpack-dev-server/) in the browser.

### Optional codelyzer (linting tool) configuration

If you want codelyzer to enforce custom prefixes for directives and components 
(as recommended in the style guide: [STYLE 02-08](https://angular.io/docs/ts/latest/guide/style-guide.html#02-08), 
[STYLE 02-07](https://angular.io/docs/ts/latest/guide/style-guide.html#02-07)), uncomment the following two lines
in `tslint.json` - remember to replace "my" with something meaningful for your project, like an acronym or abbreviation.
 
```
// "component-selector": [true, "element", "my", "kebab-case"],
// "directive-selector": [true, "attribute", "my", "camelCase"],
```

## files n' folders

* `src/` source files (html, js, etc)
* `build/` intermediate source files (generated by the ng compiler) live here.
* `dist/` compiled source files (e.g. what you will deploy) live here

## Scripts

In order of how likely you are to need them....!

* `serve-watch:jit` - serve the plain JIT version of the site.
* `test-watch` - watch for file changes & re-run unit tests through Karma
* `build` - build the app with AoT compilation
* `lint` - run tslint
* `cleanup` - delete dist & build folders
* `serve:dist` - run a mini web server locally on port 9001 and serve the contents of the dist/ folder. Useful for testing your built code.
* `explorer` - run `source-map-explorer` (great for figuring out why your main.bundle.js is like 11MB)
* `test` - run tests with Karma.
* `build:jit` - build the app in the conventional way (using JIT compilation). You might want to do this if the regular, AoT build is failing.
* `serve-watch:aot` - serve an AoT compiled version of the site *(can be a little buggy - probably best to use `serve:jit` instead)*

## TODO

* End to end testing with protractor?