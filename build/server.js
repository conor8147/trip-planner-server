"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
//const db = require('./config/db');
var ourExpress = require('./config/express');
var app = ourExpress();
var port = process.env.PORT || 4941;
app.listen(port, function () {
    console.log("Listening on port: " + port);
});
