'use strict';
var express = require('express'),
    router = express.Router();

// 首页
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/service', function (req, res, next) {
    res.render('service');
});	

router.get('/control', function (req, res, next) {
    res.render('control');
});

module.exports = router;
