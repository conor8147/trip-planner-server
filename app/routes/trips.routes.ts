const trips = require('../controllers/trips.controller.ts');

module.exports = function(app) {
    const baseUrl = app.rootUrl + '/trips';

    app.route(baseUrl + '/:id')
        .get(trips.retrieve)
        .delete(trips.delete);

    app.route(baseUrl)
        .post(trips.create)
        .get(trips.getAll);

};
