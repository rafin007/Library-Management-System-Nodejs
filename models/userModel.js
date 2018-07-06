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

var getUser = (id, callback)=>{
	var sql = "SELECT * FROM users WHERE user_id=?";
	db.executeQuery(sql, [id], function(result){
		callback(result[0]);
	});
};

var updateUser = (user, callback)=> {
    var sql = "UPDATE users SET name = ?, email = ?, phone = ?, address = ?, gender = ? WHERE user_id = ?";
    db.executeQuery(sql, [user.name, user.email, user.phone, user.address, user.gender, user.user_id], function(result){
		callback(result);
	});
};

var updatePassword = (password, id, callback)=> {
    var sql = "UPDATE users SET password = ? WHERE user_id = ?";
    db.executeQuery(sql, [password, id], function(result){
		callback(result);
	});
};



module.exports = {
    validateUser,
    createUser,
    getUser,
    updateUser,
    updatePassword
};
