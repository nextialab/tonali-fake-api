var express = require('express');
var router = express.Router();

var email = 'admin@test.com';
var password = 'password';
var userid = 'b93a68e2-69ba-11e6-8b77-86f30ca893d3';
var token = '9401c3a4-69ba-11e6-8b77-86f30ca893d3';
var expires = 2592000;

router.post('/', function (req, res, next) {
	if (req.body.email && req.body.password) {
		if (req.body.email === email && req.body.password === password) {
			res.json({
				userid: userid,
				token: token,
				role: 'admin',
				expires: expires
			});
		} else {
			res.status(404).send('User not found');
		}
	} else {
		res.status(400).send('Bad request');
	}
});

module.exports = router;