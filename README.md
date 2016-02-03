## STW Mobile Starter

### Quick Start

#### Install Node

```bash
https://nodejs.org/en/download/
```

#### Install Bower via npm (this is a part of Node)

```bash
$ npm install bower
```

#### Clone the repository

```bash
$ git clone https://github.com/matthill82/starter-webpack.git
```

#### Install the dependencies

```bash
$ npm install
$ bower install
```

#### Watch Mode (this will run the webpack dev server, see `package.json` for reference to all of the build scripts)

```bash
$ gulp watch
```

#### Run unit tests

```bash
$ npm run js-test
```

#### Running unit test, code syntax validation

```bash
$ npm run analyse
```

#### Adding Cordova Plugins

```bash
$ cordova plugins add com.ionic.keyboard org.apache.cordova.console org.apache.cordova.device
```

#### Adding Cordova Platforms

```bash
$ cordova platform add ios
```

#### Build

```bash
$ gulp && cordova build
```

#### Running in the emulator

```bash
$ cordova emulate ios
```


#### Installing another dependency

```bash
$ bower install [package] --save

Then update webpackage.config

    vendor: [
        PATHS.bower + 'ionic/js/ionic.bundle',
        Paths.bower + 'new package that you've installed
    ],
    
```



