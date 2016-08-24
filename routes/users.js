var express = require('express');
var router = express.Router();

var userid = 'b93a68e2-69ba-11e6-8b77-86f30ca893d3';
var token = '9401c3a4-69ba-11e6-8b77-86f30ca893d3';

router.get('/:userid', function (req, res, next) {
	if (req.params.userid === userid && req.headers.authorization === token) {
		res.json({name: 'Admin Test', lists: 10});
	} else {
		res.status(403).send('Not authorized');
	}
});

module.exports = router;
