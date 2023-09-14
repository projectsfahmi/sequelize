const mspasien = require('./Cpasien');
const msemployee = require('./Cemployee');
const axios = require('./axios');
const auth = require('./Auth');

const controller = {};


controller.mspasien = mspasien;
controller.msemployee = msemployee;
controller.axios = axios;
controller.auth = auth;

module.exports = controller;