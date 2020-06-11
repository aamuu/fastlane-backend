const express = require('express');
const {authJwt} = require("../middleware");
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Best Practice');
});

router.post('/', authJwt.verifyToken, function (req, res) {
    console.log(req.body);
});

router.get('/:id', function (req, res) {
    res.send('Get individual best practice');
});

router.put('/:id', authJwt.verifyToken, function (req, res) {
    console.log(req.body);
});

router.delete('/:id', authJwt.verifyToken, function (req, res) {
    res.send('delete individual best practice');
});

router.get('/download/:id', function (req, res) {
    res.send('download individual best practice resource');
});

module.exports = router;
