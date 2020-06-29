import express = require('express');

const trips = require('../models/trips.model.ts')

exports.retrieve = async function (req: express.Request, res: express.Response) {
    // Handle getting single trip info
};

exports.getAll = async function (req: express.Request, res: express.Response) {
    // Handle getting all trips for the user.
};

exports.delete = async function (req: express.Request, res: express.Response) {
    // Handle deleting trip by id
};

exports.create = async function (req: express.Request, res: express.Response) {
    // Handle creating a new trip
};