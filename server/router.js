const Authentication = require('./constrollers/authentication');

module.exports = function(app) {
  app.post('/login', Authentication.signup);
}
