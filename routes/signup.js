var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var crypto = require('.././model/crypto.js');
var userInfo = require('.././model/userInfo.js');

router.use(bodyparser.json());

router.post('', function (req, res){

var hashedPass = crypto.saltHashPassword(req.body.password).passwordHash;

    var user = new userInfo({
        username: req.body.username,
        password: '' + hashedPass,
        name: req.body.name,
        age: req.body.age,
        admin: req.body.admin
    });


    
      user.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true, id: user._id });
  });

    // userInfo.create(user, function(err, userInfos){
    //     if(err) throw err;

    //     console.log('added');
    //     res.writeHead(200, {'Content-Type' : 'text/plain'});
    //     var id = userInfos._id;
    //     res.end('_id' + id);
    // })
});

module.exports = router;