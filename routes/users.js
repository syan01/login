var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'ysqmy12365',
	database : 'login'
});

connection.connect();


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('login');
});

router.post('/', function(req, res, next){
	const uname = req.body.uname;
	const psw = req.body.psw;
	console.log('post login');
	console.log(uname);
	console.log(psw);
	var sql = "SELECT pwd FROM user WHERE uname = '" + uname + "';"
	console.log(sql);
	connection.query(sql, function (error, results, fields) {
		if (error) throw error;
		if(results.length == 0)  	{
			res.status(401).send("Cannot found this username")
		}else if(psw == results[0].pwd){
			res.redirect('/');
		}else{
			res.status(401).send("wrong password");
		}	
	});

});

module.exports = router;
