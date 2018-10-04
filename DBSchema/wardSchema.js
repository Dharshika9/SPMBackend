const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardSchema = new Schema({

    wardNo: {
        type: String,
        required: true
    },
    wardType: {
        type: String,
        required: true
    },
    noOfBeds: {
        type: Number,
        required: true
    },
    availableBeds: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    visitingTimes: {
        type: String,
        required: true
    },
    incharge: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: true
    }

});

module.exports = wardSchema;