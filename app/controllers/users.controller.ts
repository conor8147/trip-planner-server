import express = require('express');

const users = require('../models/users.model.ts');

/**
 * Checks only that a candidate email address contains the @ symbol.
 * @param email a string email address
 */
function isEmailValid(email: string) {
    return email.includes('@');
}

/**
 * Receive a user request to login. If the
 * @param req an express request. Body should contain an email address and hashed password.
 * @param res an express response with status 200 if login succeeds, 400 if failed.
 */
exports.login = async function (req: express.Request, res: express.Response) {
    // Handle login here
};

exports.logout = async function (req: express.Request, res: express.Response) {
    // Handle logout here
};

exports.register = async function (req: express.Request, res: express.Response) {
    // Handle register here
};