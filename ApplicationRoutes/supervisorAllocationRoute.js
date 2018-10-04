var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/supervisorAllocationController');


router.post('/' , function (req , res) {
    let studentname = req.body.studentname;
    let supervisorname = req.body.supervisorname;
    let allocatedDate = req.body.allocatedDate;
    let allocatedSection = req.body.allocatedSection;
    let  allocatedRole = req.body. allocatedRole;



    req.checkBody('studentname' , 'studentname required').notEmpty();
    req.checkBody('supervisorname' , 'supervisorname required').notEmpty();



    var errors = req.validationErrors();

    if(errors){
        res.status(400).send({error:errors});
    }else {
        controller.add({
            studentname: studentname,
            supervisorname: supervisorname,
            allocatedDate: allocatedDate,
            allocatedSection: allocatedSection,
            allocatedRole: allocatedRole,

        }).then(data => {
            res.status(data.status).send(data.message);
        }).catch(err => {
            res.status(err.status).send(err.message);
        });
    }
});



router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

module.exports = router;