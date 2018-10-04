'use strict'

var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/patientController');

router.get('/notes/:id' , (req, res) => {
    controller.getNotes(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;
