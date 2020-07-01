const {Pool} = require('pg');

let pool: typeof Pool = null;

exports.createPool = async function () {
    pool = new Pool({
        connectionString: process.env.DB_CONNECTION,
        ssl: {
            rejectUnauthorized: false
        }
    });
};

exports.getPool = function () {
    return pool;
};
