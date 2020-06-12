const express = require('express');
const Component = require('../controllers/component.controller');
const { authJwt } = require("../middleware");
const router = express.Router();

router.get('/', Component.findAll);

router.post('/',authJwt.verifyToken, Component.create);

router.get('/:id', Component.findOne);

router.put('/:id',authJwt.verifyToken, Component.update);

router.delete('/:id',authJwt.verifyToken, Component.delete);

router.get('/download/:id', function (req, res) {
  res.send('download individual component resource');
});

module.exports = router;
