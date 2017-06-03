var express = require('express');
var router = express.Router();
var sql = require('./sql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('login');
});

router.post('/login', function(req, res, next){	
	const uname = req.body.uname;
	const psw = req.body.psw;
	console.log('post login');
	sql.password(uname, function(error, rst){
		if (!error) {
			if(rst == null){
				res.send('Cannot find this user');
				
			}else if(rst== psw){
				res.send('Alerady logged in');
			}else{
				res.send('Wrong password');
			}
		}
	});
});

router.post('/signup', function(req, res, next){
	sql.add(11111, uname, psw);
	res.send('Alerady added');
});


module.exports = router;
