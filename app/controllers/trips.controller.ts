import {Request, Response} from 'express'
const tripsModel = require('../models/trips.model');

exports.retrieve = async function (req: Request, res: Response) {

};

exports.getAll = async function (req: Request, res: Response) {
    const message: any = { "message":  "hi jasmine" };
    res.statusMessage = 'OK';
    res.status(200)
        .json(message);};

exports.delete = async function (req: Request, res: Response) {
    // Handle deleting trip by id
};

exports.create = async function (req: Request, res: Response) {
    // Handle creating a new trip
};