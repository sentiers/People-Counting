// --------------------------------------------------------
var router = require('express').Router();
var Record = require('../model/record');

//====테스팅 용도 =============================
router.get('/', function (req, res, next) {
    Record.find().limit(1).sort({ "time": -1 })
        .then((data) => {
            res.render('index', data[0]);
            console.log(data[0]);
        })
});

// --------------------------------------------------------
module.exports = router;
