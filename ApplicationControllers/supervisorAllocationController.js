var mongoose    = require('../DBSchema/DBConfig');
var SupervisorAllocationSchema 	= mongoose.model('SupervisorAllocationSchema');
var supervisorAllocationController = function() {

    this.add = function(supervisorAllocationInstance) {
        return new Promise((resolve, reject) => {
            var allocation = new SupervisorAllocationSchema({
                supervisorname: supervisorAllocationInstance.supervisorname,
                studentname:supervisorAllocationInstance.studentname,
                allocatedDate:supervisorAllocationInstance.allocatedDate,
                allocatedSection: supervisorAllocationInstance.allocatedSection,
                allocatedRole:supervisorAllocationInstance.allocatedRole,


            })
            allocation.save().then(() => {
                resolve({'status': 200, 'message':'Added Student Supervisor Allocation successfully!'});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }

    this.getAll = function() {
        return new Promise((resolve, reject) => {
            SupervisorAllocationSchema.find().exec().then(data => {
                resolve({'status': 200, 'message':'Get all data', 'data': data});
            }).catch(err => {
                reject({'status': 404, 'message':'err:-'+err});
            })
        })
    }



}

module.exports = new supervisorAllocationController();