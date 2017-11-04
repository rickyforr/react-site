var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.route('/').get(function (req, res) {
    User.find(function (err, results){
        console.log('hello');
        if(err){
            console.log('my error !!!!', err);
        }
        else {
            res.json(results);
        }
    });
});


router.post('/', function (req, res) {
    const newUser = { username: req.body.username };
    console.log(newUser);
    User.create(newUser)
        .then((response) => {
            res.send('yes');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;
