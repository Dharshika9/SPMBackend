const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({


    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    university:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    telephone:{
        type: Number,
        require:true
    },


})

module.exports = studentSchema;
