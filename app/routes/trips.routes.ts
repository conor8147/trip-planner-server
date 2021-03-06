const trips = require('../controllers/trips.controller');

module.exports = function(app: any) {
    const baseUrl = app.rootUrl + '/trips';

    app.route(baseUrl + '/:id')
        .get(trips.retrieve)
        .delete(trips.delete);

    app.route(baseUrl)
        .post(trips.create)
        .get(trips.getAll);

};
