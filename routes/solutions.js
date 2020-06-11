const express = require('express');
const { authJwt } = require("../middleware");
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Solutions');
});

router.post('/',authJwt.verifyToken, function (req, res) {
    console.log(req.body);
});

router.get('/:id', function (req, res) {
    res.send('Get individual solution');
});

router.put('/:id',authJwt.verifyToken, function (req, res) {
    res.send('update individual solution');
});

router.delete('/:id',authJwt.verifyToken, function (req, res) {
    res.send('delete individual solution');
});

router.get('/download/:id', function (req, res) {
    res.send('download individual solutions resource');
});

module.exports = router;










