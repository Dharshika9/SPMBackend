const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FormI1Schema = new Schema({


    student_name:{
        type:String,
        required:true
    },

    year_:{
        type:Number,
        require:true
    },
    semester_:{
        type:Number,
        require:true
    },
    form: 
    {
        //data: Buffer, 
        //contentType: String
        type:String,
        required:true
    },


})




module.exports = FormI1Schema;
