const { default: usersController } = require("../controllers/users.controller");

module.exports = function(app) {
  
    app.route(url + ':test').get(usersController.getAll);
}