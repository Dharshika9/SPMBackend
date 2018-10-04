const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({


    studentFirstName:{
        type:String,
        required:true
    },
    studentLastName:{
        type: String,
        require:true
    },
    Address:{
        type: String,
        require:true
    },
    year:{
        type:Number,
        require:true
    },
    semester:{
        type:Number,
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
