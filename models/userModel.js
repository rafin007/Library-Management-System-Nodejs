var db = require.main.require('./models/config');

var validateUser = (email, password, callback) =>{
    var sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.executeQuery(sql, [email, password], function(result){
    callback(result[0]);
  });
};

var createUser = (name, phone, email, password, address, gender, callback) => {
      var sql = "INSERT INTO users VALUES(null, ?, ?, ?, ?, ?, ?, ?)";
      db.executeQuery(sql, [name, phone, email, 0, password, address, gender], function(result){
      callback(result);
  });
};

module.exports = {
    validateUser,
    createUser
};
