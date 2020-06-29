require('dotenv').config();
//const db = require('./config/db');
const express = require('./config/express.ts');

const app = express();
const port = process.env.PORT || 4941;

app.listen(port, function () {
    console.log(`Listening on port: ${port}`);
});