var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
router.use(bodyparser.json());

var db = require('../db');
var PhoneLocation = db.PhoneLocation;

router.get('/:id', (req, res) => {
    console.info('get location...');
    let id = req.params.id;
    PhoneLocation.find({_id: id}, (err,docs) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        } else{
            console.info(docs);
            res.send(docs);
        }
    });
});

router.get('/', (req, res) => {
    console.info('get location...');
    let filter = req.query;
    PhoneLocation.find(filter, (err,docs) => {
        if(err){
            console.error(err);
            res.status(500).send(err);
        } else{
            console.info(docs);
            res.send(docs);
        }
    });
});

router.post('/', (req, res) => {
    console.info('updating location...');
    let body = req.body;
    PhoneLocation.update({_id:body.puhelinid},body,{upsert: true}, (err,output) => {
        if(err) {
            console.error(err);
            res.status(500).send(err);
        } else{
            console.info(body);
            res.send({msg:'location updated'});
        }
    });
});

module.exports = router;