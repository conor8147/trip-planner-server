import {Express} from "express";

require('dotenv').config();
//const db = require('./config/db');
const ourExpress = require('./config/express');

const app = ourExpress();
const port = process.env.PORT || 4941;

app.listen(port, function () {
    console.log(`Listening on port: ${port}`);
});