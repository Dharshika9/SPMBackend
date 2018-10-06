var mongoose    = require('../DBSchema/DBConfig');
var FormI1Schema 	= mongoose.model('FormI1Schema');
var FormI1Controller = function() {

    this.add = function(formI1Instance) {
        return new Promise((resolve, reject) => {
            var formI1 = new FormI1Schema({
                student_name: formI1Instance.student_name,
                year_:formI1Instance.year_,
                semester_ :formI1Instance.semester_,
                form: formI1Instance.form,
            })
            formI1.save().then(() => {
                resolve({'status': 200, 'message':'Added new form I-1!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            FormI1Schema.find().exec().then(data => {
                resolve({'status': 200, 'message':'Get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

}

module.exports = new FormI1Controller();