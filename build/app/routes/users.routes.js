"use strict";
var users = require('../controllers/users.controller');
module.exports = function (app) {
    var baseUrl = app.rootUrl + '/users';
    app.route(baseUrl + '/login')
        .post(users.login);
    app.route(baseUrl + '/register')
        .post(users.register);
    app.route(baseUrl + '/logout')
        .post(users.logout);
};
