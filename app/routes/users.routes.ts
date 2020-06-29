const users = require('../controllers/users.controller.ts');

module.exports = function(app) {
    const baseUrl = app.rootUrl + '/users';
    app.route(baseUrl + '/login')
        .post(users.login);

    app.route(baseUrl + '/register')
        .post(users.register);

    app.route(baseUrl + '/logout')
        .post(users.logout);
};
