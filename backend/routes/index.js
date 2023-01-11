const routes = require('express').Router();
const express = require('express');

const usermanage =require('./usermanage');

routes.use('/usermanage',usermanage);

routes.use(express.json());

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'PLM PACKING BOM Api Connected!' });
});

module.exports = routes;