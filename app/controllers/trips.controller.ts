import {Request, Response} from 'express'
const tripsModel = require('../models/trips.model');

exports.retrieve = async function (req: Request, res: Response) {
    // Handle getting single trip info
};

exports.getAll = async function (req: Request, res: Response) {
    // Handle getting all trips for the user.
};

exports.delete = async function (req: Request, res: Response) {
    // Handle deleting trip by id
};

exports.create = async function (req: Request, res: Response) {
    // Handle creating a new trip
};