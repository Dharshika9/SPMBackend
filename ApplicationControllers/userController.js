'use strict'

const mongoose = require('../DBSchema/DBConfig');
const userSchema = mongoose.model('User');
const bcrypt = require('bcryptjs');

const Controller = function () {
    
    this.addUser = function (data) {
        return new Promise((resolve , reject) =>{
            bcrypt.genSalt( 10 , function(err, salt) {
                bcrypt.hash( data.password , salt, function(err, hash) {
                    let newUser = new userSchema({
                        name : data.name,
                        userName: data.userName,
                        email: data.email,
                        password: hash
                    });
                    newUser.save().then(() =>{
                        resolve({status: 200 , message: 'User Added !'});
                    }).catch(err =>{
                        reject({status: 500 , message: 'Failed to Add User !'});
                    });
                });
            });
        })

    }

    this.getuserByuserName = function (data) {
        return new Promise((resolve , reject) =>{
            userSchema.findOne({userName: data}).exec().then(data =>{

                resolve({status: 200 , data: data})
            }).catch(err =>{
                reject({status: 400 , data:'Invalid User'})
            })
        })
    }

    this.comparePassword = function (canpassword , hash ) {
        return new Promise((resolve ,reject) =>{
            bcrypt.compare(canpassword , hash).then(data =>{
                resolve({status:200 ,isMatch: data});
            }).catch(err =>{
                reject({status: 400 , data: 'Invalid Password'})
            })

        })
    }

}

module.exports = new Controller();