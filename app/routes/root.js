// --------------------------------------------------------
var router = require('express').Router();
var Record = require('../model/record');

//====테스팅 용도 =============================
router.get('/', function (req, res, next) {
    res.render('index');
    // Record.find()
    //     .then((data) => {
    //         res.send(data);
    //     })
});

// --------------------------------------------------------
module.exports = router;
