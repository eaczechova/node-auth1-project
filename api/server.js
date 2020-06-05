const express = require('express');
const session = require('express-session');
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const sessionConfig = {
	name: 'justname',
	secret: 'my secret',
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false,
		httpOnly: true,
	},
	resave: false,
	saveUninitialized: false,
};

const server = express();

server.use(express.json());

server.use(session(sessionConfig));
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;
