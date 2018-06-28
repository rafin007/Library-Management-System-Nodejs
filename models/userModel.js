var connection = require.main.require('./database/config');

var validateUser = (username, password, callback) =>{
    var sql = "SELECT * FROM users WHERE `username` = username AND `password` = password";
    connection.query(sql, (error, result)=>{
        if(error){
            console.log(error);
            callback(false);
        }
        else{
            if(result.length == 0){
                callback(false);
            }
            else{
                console.log(result);
                callback(true);
            }
        }
    });
};

module.exports = {
    validateUser
};
