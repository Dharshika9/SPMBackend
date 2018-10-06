var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/studentRegistrationController');


router.post('/' , function (req , res) {
    controller.regStudent(req.body).then(function (resData) {

        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});


module.exports = router;
