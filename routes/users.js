var express = require('express');
var router = express.Router();

var userInfo = require('.././model/userInfo.js');

/* GET users listing. */
router.get('/', function(req, res) {
  userInfo.find({}, function(err, userInfos) {
    if(err) throw err;
    res.json(userInfos);
  })
});

module.exports = router;
