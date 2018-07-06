var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');
var validationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator-2');

router.get('/profile', (req, res)=> {
    var admin = userModel.getUser(req.session.admin, (result)=> {
        if(!result){
            res.send("invalid!");
        }
        else {
            console.log(result);
            res.render('admin/profile', {res: result});
        }
    });
});

router.get('/profile/edit', (req, res)=> {
    var admin = userModel.getUser(req.session.admin, (result)=> {
        if(!result){
            res.send("invalid");
        }
        else {
            console.log(result);
            res.render('admin/profile-edit', {res: result, errs: []});
        }
    });
});

router.post('/profile/edit', (req, res)=> {
    var rules = validationRules.users.update;
    var validator = new asyncValidator(rules);
    var data = {
      user_id: req.body.user_id,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender
    };

    validator.validate(data, (errors, fields)=> {
        if(!errors){
            userModel.updateUser(data, (result)=> {
                if(!result){
                    res.send('invalid');
                }
                else {
                    res.redirect('/admin/profile');
                }
            });
        }
        else {
            console.log(fields);
            res.render('admin/profile-edit', {errs: errors, res: []});
        }
    });
});

router.get('/changepass', (req, res)=> {
    var admin = userModel.getUser(req.session.admin, (result)=> {
        if(!result){
            res.send("invalid!");
        }
        else {
            console.log(result);
            res.render('admin/change-password', {res: result, errs: [], success: []});
        }
    });
});

router.post('/changepass', (req, res)=> {
    var rules = validationRules.users.changePassword;
    var validator = new asyncValidator(rules);
    var data = {
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
      confirmPassword: req.body.confirmPassword
    };

    if(req.body.password == req.body.oldPassword){
        validator.validate(data, (errors, fields)=> {
            if(!errors){
                if(req.body.newPassword == req.body.confirmPassword){
                    userModel.updatePassword(req.body.newPassword, req.body.user_id, (result)=> {
                        if(!result){
                            res.send('invalid');
                        }
                        else {
                            res.render('admin/change-password', {errs:[], res: [], success: [{message: "Password changed successfully"}]});
                        }
                    });
                }
                else {
                    res.render('admin/change-password', {errs:[{message: "Your new passwords don't match!"}], res: [], success: []});
                }
            }
            else {
                console.log(fields);
                res.render('admin/change-password', {errs: errors, res: [], success: []});
            }
        });
    }
    else {
        res.render('admin/change-password', {errs: [{message: "Your old passsword does not match!"}], res: [], success: []});
    }

});


module.exports = router;
