const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laborityTestSchema = new Schema({
    testId: {
        type: Number,
        require: true
    },
    patientId: {
        type: Number,
        require: true
    },
    testType: {
        type: String,
        required: true
    },
    PatientStatus: {
        type: String,
        require: true
    },
    description: {
        type: Number,
        require: true


    }

})


module.exports=laborityTestSchema;