var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/studentRegistrationController');

router.post('/' , function (req , res) {
    let  studentFirstName = req.body.studentFirstName;
    let  studentLastName = req.body.studentLastName;
    let  Address = req.body.Address;
    let  year = req.body.year;
    let  semester = req.body. semester;
    let  university = req.body. university;
    let  telephone = req.body. telephone;
    let  email = req.body. email;

    req.checkBody('studentname' , 'studentname required').notEmpty();
    req.checkBody('supervisorname' , 'supervisorname required').notEmpty();



    var errors = req.validationErrors();

    if(errors){
        res.status(400).send({error:errors});
    }else {
        controller.add({
            studentFirstName: studentFirstName,
            studentLastName: studentLastName,
            Address: Address,
            year: year,
            semester: semester,
            university: university,
            telephone: telephone,
            email: email,


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