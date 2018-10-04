const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicineSchema = new Schema({
    PatientID: {
        type: Number,
        require: true
    },
    Date: {
        type: String,
        require: true
    },
    Doctor: {
        type: String,
        required: true
    },
    MedicineDescr: {
        type: String,
        require: true
    }
})


module.exports=MedicineSchema;