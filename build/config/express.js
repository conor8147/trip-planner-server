"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var allowCrossOriginRequests = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    next();
};
module.exports = function () {
    var app = express();
    app.use(bodyParser.json());
    app.use(allowCrossOriginRequests);
    app.use(function (req, res, next) {
        console.log("##### " + req.method + " " + req.path + " #####");
        next();
    });
    app.rootUrl = '/api/v1';
    // Routes
    require('../app/routes/users.routes')(app);
    require('../app/routes/trips.routes')(app);
    require('../app/routes/receipts.routes')(app);
    return app;
};
