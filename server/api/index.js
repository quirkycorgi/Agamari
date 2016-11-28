'use strict';

const api = module.exports = require('express').Router();

api.use('/users', require('./userRoutes'));
api.use('/rooms', require('./roomRoutes'));
api.use('/scores', require('./scoreRoutes'));
api.use('/bugs', require('./bugRoutes'));
api.get('/whoami', (req, res) => res.send(req.cookie.user));
