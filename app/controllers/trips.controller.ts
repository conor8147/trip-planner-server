import {Request, Response} from 'express'

const tripsModel = require('../models/trips.model');

const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function queryDB () : Promise<string[]>{
    client.connect();
    const response = await client.query('SELECT * from trips;', (err: any, res: any) => {
        let output: string[] = [];
        if (err) {
            client.end();
            throw err;
        }
        output.push("yay1");
        for (let row of res.rows) {
            output.push("yay");
        }
        client.end();
        return output
    });

    return await response.then((output: string[]) => {
        return output;
    });
}

exports.retrieve = async function (req: Request, res: Response) {

};

exports.getAll = async function (req: Request, res: Response) {
    console.log(process.env.DATABASE_URL);
    const msg = await queryDB();
    res.status(200)
        .json({"msg": msg});
};

exports.delete = async function (req: Request, res: Response) {
    // Handle deleting trip by id
};

exports.create = async function (req: Request, res: Response) {
    // Handle creating a new trip
};