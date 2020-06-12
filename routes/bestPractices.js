const express = require('express');
const BestPractice = require('../controllers/bestPractice.controller');
const {authJwt} = require("../middleware");
const router = express.Router();

router.get('/', BestPractice.findAll);

router.post('/', authJwt.verifyToken, BestPractice.create);

router.get('/:id', BestPractice.findOne);

router.put('/:id', authJwt.verifyToken, BestPractice.update);

router.delete('/:id', authJwt.verifyToken, BestPractice.delete);

router.get('/download/:id', function (req, res) {
    res.send('download individual best practice resource');
});

module.exports = router;
