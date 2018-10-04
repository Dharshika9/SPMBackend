var mongoose    = require('../DBSchema/DBConfig');
var FormI1Schema 	= mongoose.model('FormI1Schema');
var FormI1Controller = function() {

    this.add = function(supervisorAllocationInstance) {
        return new Promise((resolve, reject) => {
            var formi1 = new FormI1Schema({
                student_name: supervisorAllocationInstance.student_name,
                year_: supervisorAllocationInstance.year_,
                semester_:supervisorAllocationInstance.semester_,


            })
            formi1.save().then(() => {
                resolve({'status': 200, 'message':' Student FormI-1 Uploaded  successfully!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

}

module.exports = new FormI1Controller();