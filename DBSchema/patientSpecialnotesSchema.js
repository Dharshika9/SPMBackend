const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSpecialnotes = new Schema({
    patientId:{
        type: Number,
        require:true
    },
    note:{
        type:String,
        required:true
    },
    date:{
        type: String,
        require:true
    },
    responsible: {
        type: String,
        require: true
    }

});




module.exports = patientSpecialnotes;
