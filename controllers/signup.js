var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');
var rules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator');

router.get('/', (req, res)=>{
    res.render('signup.ejs');
});

router.post('/', (req, res)=>{

    var data = {
      name: req.body.name;
      email: req.body.email;
      phone: req.body.phone;
      address: req.body.address;
      password: req.body.password;
      gender: req.body.gender;
    };

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;
    var address = req.body.address;

    userModel.createUser(email, password, function(result){
        if(result.length == 0){
          res.send('Invalid');
        }
        else{
          console.log(result);
          console.log(result.is_admin);
          if(result.is_admin == 1)
            res.redirect('/admin/home');
          else
            res.redirect('/customer/home');
        }
    });
});

module.exports = router;
