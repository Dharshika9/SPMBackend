'use strict'


const mongoose = require('../DBSchema/DBConfig');
const notesSchema = mongoose.model('patientNotes');


const Controller = function () {

    this.getNotes = function (id) {
        return new Promise((resolve, reject) => {
            notesSchema.find({patientId: id}).exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 404, message:'Failed to search notes'});
            })
        })
    }


}

module.exports = new Controller();



