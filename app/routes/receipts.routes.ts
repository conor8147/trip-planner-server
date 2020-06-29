const receipts = require('../controllers/receipts.controller.ts');

module.exports = function(app) {
    const baseUrl = app.rootUrl + '/receipts';

    app.route(baseUrl + '/:id')
        .get(receipts.retrieve)
        .delete(receipts.delete);

    app.route(baseUrl)
        .post(receipts.create);
};
