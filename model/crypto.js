var express = require('express');
var crypto = require('crypto');
var secret = require('.././config.js');

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        passwordHash:value
    };
};

// var saltHashPasswordsss = function (userpassword) {
//     var salt = secret.secret; /** Gives us salt of length 16 */
//     var passwordData = sha512(userpassword, salt);

//     return passwordData;
// }

module.exports = {
    saltHashPassword: function (userpassword) {
    var salt = secret.secret; /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);

    return passwordData;
    }
};