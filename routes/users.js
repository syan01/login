var express = require('express');
var router = express.Router();

const name = "ysq";
const code = "12345";
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
	if(uname == name && psw == code){
		res.redirect('/');
	}
	else{
		res.status(401).send("wrong password");
	}


});

module.exports = router;
