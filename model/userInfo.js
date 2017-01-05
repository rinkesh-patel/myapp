// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
//var assert = require('assert');
var Schema = mongoose.Schema;

var user = new Schema(
    {
        username: String,
        password: String,
        name: String,
        age: Number,
        admin: Boolean
    }
);


// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('userInfo', user);