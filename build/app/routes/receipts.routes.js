"use strict";
var receipts = require('../controllers/receipts.controller');
module.exports = function (app) {
    var baseUrl = app.rootUrl + '/receipts';
    app.route(baseUrl + '/:id')
        .get(receipts.retrieve)
        .delete(receipts.delete);
    app.route(baseUrl)
        .post(receipts.create);
};
