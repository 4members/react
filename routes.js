var home = require('./handlers/home.js')
module.exports = [
{
    method: 'GET',
    path: '/',
    handler: home

},
{
  method: 'GET',
 path: '/home.js',
 handler: function (request, reply) {
   reply.file('./scripts/home.js')
 }
},
{
  method: 'GET',
 path: '/sw.js',
 handler: function (request, reply) {
   reply.file('./sw.js')
 }
}
  ]
