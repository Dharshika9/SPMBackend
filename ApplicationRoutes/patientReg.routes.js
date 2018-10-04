var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/patientRegistrationController');

router.post('/',function (req,res) {
    controller.addPatient(req.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});


router.delete('/:id',function (req,res) {
    controller.removePatient(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.put('/:id',function (req,res) {
    controller.updatePatient(req.params.id,req.body).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.get('/',function (req,res) {
    controller.getAllPatients().then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});


router.get('/:id',function (req,res) {
    controller.getOnePatient(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })

});

module.exports=router