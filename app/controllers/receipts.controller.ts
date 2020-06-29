import express = require('express');

const receipts = require('../models/receipts.model.ts');

exports.retrieve = async function (req: express.Request, res: express.Response) {
    // Handle getting single receipt here
};

exports.delete = async function (req: express.Request, res: express.Response) {
    // handle deleting receipt by id here
};

exports.create = async function (req: express.Request, res: express.Response) {
    // handle creating a new receipt here
};