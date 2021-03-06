const receipts = require('../controllers/receipts.controller');

module.exports = function(app: any) {
    const baseUrl = app.rootUrl + '/receipts';

    app.route(baseUrl + '/:id')
        .get(receipts.retrieve)
        .delete(receipts.delete);

    app.route(baseUrl)
        .post(receipts.create);
};
