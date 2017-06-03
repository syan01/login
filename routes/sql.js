var mysql = require('mysql');

var pool  = mysql.createPool({
	connectionLimit : 10,
	host            : 'localhost',
	user            : 'root',
	password        : 'ysqmy12365',
	database        : 'login'

});

function getPsw(uname, done){
	var sql = "SELECT pwd FROM user WHERE uname = '" + uname + "';"
	pool.query(sql, function (error, results, fields){
		if (error){
			console.log('query error');
			return done(error, null);
		}else if(results[0]){
			return done(null, results[0].pwd);
		}
		return done(null, null);
	});
}

function putUsers(id, uname, psw, done){
	var sql = "INSERT INTO user VALUES (111,'" + uname + "','" + psw + "');"
	console.log(sql);
	pool.query(sql, done);
    }


module.exports.password = getPsw;
module.exports.add = putUsers;

