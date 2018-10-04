const mongoose = require('mongoose');
const wardSchema = require('./wardSchema');

const patientAdmissionSchema = require('./patientWardAdmissionSchema');
const patientRegSchema = require('./patientRegistrationSchema');
const userSchema = require('./userSchema');
const laborityTestSchema = require('./laborityTestSchema');
const MedicineSchema = require('./MedicineSchema');

const patientnotesSchema = require('./patientSpecialnotesSchema');


mongoose.connect('mongodb://127.0.0.1:27017/Inward', err =>{
    if(err) {
        console.error(err);
        process.exit(-2);
    }
    console.log('Connected to mongoDB on PORT 27017');
});

mongoose.model('wardDetails',wardSchema);
mongoose.model('patientNotes' , patientnotesSchema);
mongoose.model('patientWardAdmission',patientAdmissionSchema);
mongoose.model('patientRegistration',patientRegSchema);
mongoose.model('laborityTest' , laborityTestSchema);
mongoose.model('User' , userSchema);
mongoose.model('Medicine' , MedicineSchema);



module.exports = mongoose;