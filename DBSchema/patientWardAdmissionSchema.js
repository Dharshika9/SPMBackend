const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientWardAdmissionSchema =new Schema({
    BHTNumber:{
        type: String,
        require:true
    },
    wardNo:{
        type: String,
        require:true
    },
    patientId:{
        type: String,
        require:true
    },
    patientName:{
        type: String,
        require:true
    },
    admittedDate:{
        type: String,
        require:true
    },
    DoctorInCharge:{
        type: String,
        require:true
    },
    patientComplain:{
        type: String,
        require:true
    }

})



module.exports = patientWardAdmissionSchema;
