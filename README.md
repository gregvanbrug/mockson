# MockSON

    NOTE: This is highly experimental(!)

A mock server for simulating a REST service with static JSON files.

## Configuration

The only file you should need to update is the config.js file.

    var config = {
      'host': 'localhost',
      'port': 3000,
      'app': 'tmp',                        // Directory to host the application
      'assets': 'assets',                  // Directory that contains your css, fonts, images, js, templates
      'services': [ 'beers', 'whiskies' ], // An array of services that your app will use
      'bootstrap': 'test/bootstrap',       // Dirctory containing bootstrap data
      'data': 'tmp/data'                   // Directory to copy bootstrap data to
    };

## Creating a service

Create a directory that matches your service name within your bootstrap directory. For each service, create a index.json file. Then for individual records, create individual files for each record.

### Example Service

    /beers
     - index.json
     - 1.json
     - 2.json
     - 3.json

## Example Request

When the server starts, all bootstrapped data is copied to a data directory inside of your application directory.

    $http.get('/data/beers');

## Test Application

### Running the Application

    cd test && bower install && cd ../
    npm install
    grunt
    node src/server.js

Open your browser to http://localhost:3000

### Editing the Application

    grunt watch

Editing any of the files in ./test will rebuild the application to ./tmp.

## Roadmap
* Add mongoDB for CRUD operations

## Releases
* 0.0.1
  Initial Release
