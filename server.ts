
require('dotenv').config();
const db = require('./config/db');
const ourExpress = require('./config/express');

const app = ourExpress();
const port = process.env.PORT || 4941;

async function testDbConnection() {
    try {
        await db.createPool();
        await db.getPool().connect();
    } catch (err) {
        console.error(`Unable to connect to database. ${err.message}`);
        process.exit(1);
    }
}

testDbConnection()
    .then(() => {
        app.listen(port, function () {
            console.log(`Listening on port: ${port}`);
        });
    });