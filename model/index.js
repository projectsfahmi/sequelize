const mspasien = require('./ModelPasien');
const msemployee = require('./ModelEmployee');
const msposition = require('./ModelPosition');
const model = {};

model.mspasien = mspasien;
model.msemployee = msemployee;
model.position = msposition;

module.exports = model;