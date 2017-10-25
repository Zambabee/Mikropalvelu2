'use strict';

module.exports = function (PhoneLocation) {
    PhoneLocation.smartupdate = function (puhelinid,beaconid,x,y,cb) {
        console.log(puhelinid);
        console.log(beaconid);
        console.log(x);
        console.log(y);
        let something = PhoneLocation.dataSource;

        let response = 'joujoujuju';
        cb(null, response);
    };
    PhoneLocation.remoteMethod(
        'smartupdate', {
            http: {
                path: '/status',
                verb: 'post'
            },
            accepts: [
                { arg: 'puhelinid', type: 'string', required: true },
                { arg: 'beaconid', type: 'string', required: true },
                { arg: 'x', type: 'number', required: true },
                { arg: 'y', type: 'number', required: true }
            ],
            returns: {
                arg: 'status',
                type: 'string'
            }
        }
    );

};