var express     = require('express');
var router      = express.Router();
var controller	= require('../ApplicationControllers/MedicineController');



router.get('/',function (req,res) {
    controller.getAllMedicine().then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })
});

router.get('/:id',function (req,res) {
    controller.getOneMedicine(req.params.id).then(function (resData) {
        res.status(resData.status).send(resData.message)
    }).catch(function (err) {
        res.status(err.status).send(err.message)
    })

});


router.get('/get_specific_Medicine/:id', (req, res) => {        //to get all the Medicine that belongs to specific id
    controller.getSpecificMedicine(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})



module.exports=router