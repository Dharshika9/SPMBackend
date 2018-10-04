const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supervisorAllocationSchema = new Schema({

    studentname:{
        type: String,
        require:true
    },

    supervisorname:{
        type:String,
        required:true
    },
    allocatedDate:{
        type:String,
        required:true
    },
    allocatedSection:{
        type:String,
        required:true
    },
    allocatedRole:{
        type:String,
        required:true
    },

})

module.exports = supervisorAllocationSchema;
