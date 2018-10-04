var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/ward.Controller');


// router.post('/', (req, res) => {
//     controller.add(req.body).then(response => {
//         res.status(response.status).send(response.message);
//     }).catch(err => {
//         res.status(err.status).send(err.message);
//     })
// });


router.post('/' , function (req , res) {
    let wardNo = req.body.wardNo;
    let wardType = req.body.wardType;
    let noOfBeds = req.body.noOfBeds;
    let availableBeds = req.body.availableBeds;
    let location = req.body.location;
    let visitingTimes = req.body.visitingTimes;
    let incharge = req.body.incharge;
    let phone = req.body.phone;
    let note = req.body.note;


    req.checkBody('wardNo' , 'wardNo required').notEmpty();
    req.checkBody('wardType' , 'wardType required').notEmpty();
    req.checkBody('noOfBeds' , 'noOfBeds cant be String').isNumeric();
    req.checkBody('availableBeds' , 'availableBeds cant be String').isNumeric();
    req.checkBody('location' , 'location required').notEmpty();
    req.checkBody('visitingTimes' , 'visitingTimes required').notEmpty();
    req.checkBody('incharge' , 'incharge required').notEmpty();
    req.checkBody('phone' , 'phone shoul be numbers').isNumeric();
    req.checkBody('note' , 'note required').notEmpty();



    var errors = req.validationErrors();

    if(errors){
        res.status(400).send({error:errors});
    }else {
        controller.add({
            wardNo: wardNo,
            wardType: wardType,
            noOfBeds: noOfBeds,
            availableBeds: availableBeds,
            location: location,
            visitingTimes: visitingTimes,
            incharge: incharge,
            phone: phone,
            note: note
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

router.get('/:id', (req, res) => {
    controller.getSingle(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:id', (req, res) => {
    controller.update(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.delete('/:id', (req, res) => {
    controller.delete(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

router.get('/get_specific_ward/:id', (req, res) => {
    controller.getSpecificWard(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

router.delete('/delete_specific_ward/:id', (req, res) => {
    controller.deleteSpecificWard(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

router.put('/update_specific_ward/:id', (req, res) => {
    controller.updateSpecificWard(req.params.id, req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;