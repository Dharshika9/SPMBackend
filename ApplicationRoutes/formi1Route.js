var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/formi1Controller');

router.post('/' , function (req , res) {
    let student_name = req.body.student_name;
    let year_ = req.body.year_;
    let semester_ = req.body.semester_;

    req.checkBody('student_name' , 'studentname required').notEmpty();
    req.checkBody('year_' , 'supervisorname required').notEmpty();


    var errors = req.validationErrors();

    if(errors){
        res.status(400).send({error:errors});
    }else {
        controller.add({
            student_name: student_name,
            year_: year_,
            semester_: semester_,


        }).then(data => {
            res.status(data.status).send(data.message);
        }).catch(err => {
            res.status(err.status).send(err.message);
        });
    }
});



module.exports = router;