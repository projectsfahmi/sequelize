const dbsample = require('./dbsample');
const dbsamplesequelize = require('./dbsampleseq');
const dbapiseq = require('./dbapiseq');
const database = {};

database.dbsample = dbsample;
database.dbsamplesequelize = dbsamplesequelize;
database.dbapiseq = dbapiseq;

module.exports = database;