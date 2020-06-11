const express = require('express');
const { authJwt } = require("../middleware");
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Components');
});

router.post('/',authJwt.verifyToken, function (req, res) {
  console.log(req.body);
});

router.get('/:id', function (req, res) {
  res.send('Get individual component');
});

router.put('/:id',authJwt.verifyToken, function (req, res) {
  res.send('update individual component');
});

router.delete('/:id',authJwt.verifyToken, function (req, res) {
  res.send('delete individual component');
});

router.get('/download/:id', function (req, res) {
  res.send('download individual component resource');
});

module.exports = router;
