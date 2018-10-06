var mongoose    = require('../DBSchema/DBConfig');
var StudentSchema 	= mongoose.model('StudentSchema');
var studentRegistrationController = function() {

    this.regStudent = function(supervisorAllocationInstance) {
        return new Promise((resolve, reject) => {
            var registration = new StudentSchema({
                firstName: supervisorAllocationInstance.firstName,
                lastName:supervisorAllocationInstance.lastName,
                address:supervisorAllocationInstance.address,
                university:supervisorAllocationInstance.university,
                email:supervisorAllocationInstance.email,
                telephone:supervisorAllocationInstance.telephone
            });
            registration.save().then(() => {
                resolve({'status': 200, 'message':' Student Registration  successful!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }





}

module.exports = new studentRegistrationController();
