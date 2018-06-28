var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');

router.get('/', (req, res)=>{
    res.render('login.hbs');
});

router.post('/', (req, res)=>{
    var username = req.body.username;
    var password = req.body.password;

    userModel.validateUser(username, password, (valid)=>{
        console.log(valid);
        if(valid){
            // res.render('home.hbs', {
            //     user: username
            // });
            res.redirect('/home');
        }
        else{
            res.send('Invalid');
        }
    });
});

module.exports = router;
