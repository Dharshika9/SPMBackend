var mongoose    = require('../DBSchema/DBConfig');
var StudentSchema 	= mongoose.model('StudentSchema');
var studentRegistrationController = function() {

    this.add = function(supervisorAllocationInstance) {
        return new Promise((resolve, reject) => {
            var registration = new StudentSchema({
                studentFirstName: supervisorAllocationInstance.studentFirstName,
                studentLastName:supervisorAllocationInstance.studentLastName,
                Address:supervisorAllocationInstance.Address,
                year: supervisorAllocationInstance.year,
                semester:supervisorAllocationInstance.semester,
                university:supervisorAllocationInstance.university,
                telephone:supervisorAllocationInstance.telephone,
                email:supervisorAllocationInstance.email,


            })
            registration.save().then(() => {
                resolve({'status': 200, 'message':' Student Registration  successful!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }





}

module.exports = new studentRegistrationController();