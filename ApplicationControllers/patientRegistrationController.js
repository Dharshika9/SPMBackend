var mongoose    = require('../DBSchema/DBConfig');
var patientRegistrationSchema 	= mongoose.model('patientRegistration');

var patientRegistrationController = function () {
    this.addPatient=function (patient) {
        return new Promise(function (resolve,reject) {
            var patientone=new patientRegistrationSchema({
                patientId:patient.patientId,
                patientName:patient.patientName,
                patientDOB:patient.patientDOB,
                patientAge:patient.patientAge,
                patientGender:patient.patientGender,
                patientNIC:patient.patientNIC,
                patientStatus:patient.patientStatus,
                patientContactNo:patient.patientContactNo,
                patientAddress:patient.patientAddress
            })

            patientone.save().then(function () {
                resolve({status:200,message:'patient is registered successfully'})
            }).catch(function (err) {
                reject({status:500,message:'patient cannot be added'})
            })
        })
    }

    this.removePatient=function (id) {
        return new Promise(function (resolve,reject) {
            patientRegistrationSchema.remove({_id:id}).then(function () {
                resolve({'status':200,'message':'patient record is removed'})
            }).catch(function (err) {
                reject({'status':500,'message':'patient cannot be removed '+err})
            })
        })

    }

    this.updatePatient = function (id,updateData) {
        return new Promise(function (resolve,reject) {
            patientRegistrationSchema.update({_id:id},updateData).then(function () {
                resolve({'status':200,'message':'patient is updated'})
            }).catch(function (err) {
                reject({'status':500,'message':'patient cannot be updated '+err})
            })
        })

    }

    this.getAllPatients = function () {
        return new Promise(function (resolve,reject) {
            patientRegistrationSchema.find().exec().then(function (data) {
                resolve({'status':200,'message':'All Patients :', 'data': data})
            }).catch(function (err) {
                reject({'status':404,'message':'data not found'+err})
            })
        })
    }

    this.getOnePatient=function (id) {
        return new Promise(function (resolve,reject) {
            console.log('i 1 called');
            patientRegistrationSchema.findOne({patientId:id}).exec().then(function (data) {
                resolve({status:200, data:data})
            }).catch(function (err) {
                reject({status:404,meassage :'patient not fount'})
            })
        })
    }

}

module.exports=new patientRegistrationController();