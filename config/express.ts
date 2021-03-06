const express = require('express');
const bodyParser = require('body-parser');

const allowCrossOriginRequests = function (req: any, res: any, next: () => void) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    next();
};

module.exports = function () {
    const app = express();
    app.use(bodyParser.json());
    app.use(allowCrossOriginRequests);
    app.use((req: any, res: any, next: () => void) => {
        console.log(`##### ${req.method} ${req.path} #####`);
        next();
    });
    app.rootUrl = '/api/v1';

    // Routes
    require('../app/routes/users.routes')(app);
    require('../app/routes/trips.routes')(app);
    require('../app/routes/receipts.routes')(app);

    return app;
};