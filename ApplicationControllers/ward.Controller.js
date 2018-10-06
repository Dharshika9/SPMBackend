var mongoose    = require('../DBSchema/DBConfig');
var wardSchema 	= mongoose.model('wardDetails');
var wardController = function() {

    this.add = function(wardInstance) {
        return new Promise((resolve, reject) => {
            var ward = new wardSchema({
                wardNo: wardInstance.wardNo,
                wardType:wardInstance.wardType,
                noOfBeds :wardInstance.noOfBeds,
                availableBeds: wardInstance.availableBeds,
                location:wardInstance.location,
                visitingTimes:wardInstance. visitingTimes,
                incharge:wardInstance.incharge,
                phone:wardInstance.phone,
                note:wardInstance.note


            })
            ward.save().then(() => {
                resolve({'status': 200, 'message':'Added new ward successfully!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            wardSchema.find().exec().then(data => {
                resolve({'status': 200, 'message':'Get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getSingle = function(id) {
        return new Promise((resolve, reject) => {
            wardSchema.find({_id: id}).exec().then(data => {
                resolve({'status': 200, 'message':'Get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.update = function(id, updateData) {
        return new Promise((resolve, reject) => {
            wardSchema.update({_id: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'Update user'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.delete = function(id) {
        return new Promise((resolve, reject) => {
            wardSchema.remove({_id: id}).then(() => {
                resolve({'status': 200, 'message':'Delete user'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getSpecificWard=function(id) {
        return new Promise((resolve, reject) => {
            wardSchema.find({wardNo: id}).exec().then(data => {
                resolve({'status': 200, 'message':'Get single data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }
    this.deleteSpecificWard = function(id) {
        return new Promise((resolve, reject) => {
            wardSchema.remove({wardNo: id}).then(() => {
                resolve({'status': 200, 'message':'Delete ward'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.updateSpecificWard = function(id, updateData) {
        return new Promise((resolve, reject) => {
            wardSchema.update({wardNo: id}, updateData).then(() => {
                resolve({'status': 200, 'message':'Update ward'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

}

module.exports = new wardController();