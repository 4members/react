var hapi = require('hapi')
var routes = require('./routes.js')
var server = new hapi.Server();
server.connection({
  port : 8080
})

server.register([require('inert'), require('vision')], (err) => {
  if(err){
    throw err;
  }
})

server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });
server.route(routes);
server.start();
