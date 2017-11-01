var mongoose = require('mongoose');

let user = 'mikro';
let password = 'salasana1';
let host = 'ds123695.mlab.com:23695';
let database = 'microservice2';

mongoose.connect(`mongodb://${user}:${password}@${host}/${database}`, {useMongoClient: true});

// Schemas
var Location = new mongoose.Schema({
    _id: { type: String, unique: true },
    puhelinid: { type: String, required: true },
    beaconid: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  });

var PhoneLocation = mongoose.model('PhoneLocation', Location, 'PhoneLocation');
exports.PhoneLocation = PhoneLocation;