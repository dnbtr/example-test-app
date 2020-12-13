import { Request, Response } from "express";

const routes: Express.Application = require('express').Router();
const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController);

module.exports = routes;
