var mongoose    = require('../DBSchema/DBConfig');
var MedicineSchema 	= mongoose.model('Medicine');


const MedicineController = function() {
    this.getAllMedicine = function () {
        return new Promise(function (resolve, reject) {
            MedicineSchema.find().exec().then(function (data) {
                resolve({'status': 200, 'message': 'All Tests :', 'data': data})
            }).catch(function (err) {
                reject({'status': 404, 'message': 'data not found' + err})
            })
        })
    }

    this.getOneTest = function (id) {
        return new Promise(function (resolve, reject) {
            MedicineSchema.find({_id: id}).exec().then(function (data) {
                resolve({'status': 200, 'message': 'Test', 'data': data})
            }).catch(function (err) {
                reject({'status': 404, 'meassage': 'Test not fount' + err})
            })
        })
    }


    this.getSpecificMedicine = function (id) {
        return new Promise((resolve, reject) => {
            wardSchema.find({patientId: id}).exec().then(data => {
                resolve({'status': 200, 'message': 'Get data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message': 'err:-' + err});
            })
        })
    }

}
module.exports=new MedicineController();