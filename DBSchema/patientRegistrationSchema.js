const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientRegistrationSchema = new Schema({
    patientId:{
        type: String,
        require:true
    },
    patientName:{
        type:String,
        required:true
    },
    patientDOB:{
        type: String,
        require:true
    },
    patientAge:{
        type: Number,
        require:true
    },
    patientGender:{
        type: String,
        require:true
    },
    patientNIC:{
        type: String,
        require:true
    },
    patientStatus:{
        type: String,
        require:true
    },
    patientContactNo:{
        type: Number,
        require:true
    },
    patientAddress:{
        type: String,
        require:true
    }

})




module.exports = patientRegistrationSchema;
