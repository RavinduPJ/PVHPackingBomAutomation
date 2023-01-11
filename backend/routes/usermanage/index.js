const routes = require('express').Router();

const checkuser = require('./checkad');

const allusers = require('./allusers');

const userdetail = require('./userdetail');

routes.post('/checkuser', checkuser);

routes.get('/allusers', allusers);

routes.get('/userdetail/:uid', userdetail);

module.exports = routes;