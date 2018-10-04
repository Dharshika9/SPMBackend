var mongoose    = require('../DBSchema/DBConfig');
var patientWardAdmissionSchema 	= mongoose.model('patientWardAdmission');

var patientWardAdmissionController= function () {
    this.addWardAdmission=function (wardAdmission) {
        return new Promise(function (resolve,reject) {

            var Admission= new patientWardAdmissionSchema({

                BHTNumber:wardAdmission.BHTNumber,
                wardNo:wardAdmission.wardNo,
                patientId:wardAdmission.patientId,
                patientName:wardAdmission.patientName,
                admittedDate:wardAdmission.admittedDate,
                DoctorInCharge:wardAdmission.DoctorInCharge,
                patientComplain:wardAdmission.patientComplain
            })
            Admission.save().then(function () {
                resolve({status:200,message:'patient is admitted'})
            }).catch(function (err) {
                reject({status:500,message:'patient admission in unsuccesful '})
            })
        })
    };

    this.removeAdmission=function (id) {
        console.log('I am called')
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.remove({patientId:id}).then(function () {
                resolve({status:200,message:'Admissin is deleted'})
            }).catch(function (err) {
                reject({status:500, message:'Admission cannot be deleted '})
            })
        })
    };

    this.updateAdmission=function (id,updateData) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.update({_id:id},updateData).then(function () {
                resolve({status:200, message:'Admission details are updated'})
            }).catch(function (err) {
                reject({ status:500 , message:'Admission updating is unsuccesfull '})
            })
        })
    };


    this.getOneAdmission =function (id) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.find({wardNo:id}).exec().then(function (data) {
                resolve({status:200, data:data })
            }).catch(function (err) {
                reject({status:404, message :'cannot find Admission '})
            })
        })
    };

    this.getAdmissioninfo =function (id) {
        return new Promise(function (resolve,reject) {
            patientWardAdmissionSchema.findOne({patientId:id}).exec().then(function (data) {
                resolve({status:200, data:data })
            }).catch(function (err) {
                reject({status:404, message :'cannot find Admission '})
            })
        })
    };
}

module.exports=new patientWardAdmissionController();