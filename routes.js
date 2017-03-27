var home = require('./handlers/home.js')
module.exports = [
{
    method: 'GET',
    path: '/',
    handler: home

    }
  ]
