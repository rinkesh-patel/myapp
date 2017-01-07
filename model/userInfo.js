// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
//var assert = require('assert');
var Schema = mongoose.Schema;

var user = new Schema(
    {
        username: 
        { 
            type: String,
            required: true,
            unique: true
        },
        password: 
        { 
            type: String,
            require: true
        },
        name: 
        { 
            type: String
        },
        age: 
        { 
            type: Number
        },
        admin: 
        { 
            type: Boolean,
            default: true 
        }
    },
        {
        timestamps: true
        
    });


// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('userInfo', user);