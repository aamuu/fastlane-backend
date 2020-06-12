const express = require('express');
const Solution = require('../controllers/solution.controller');
const {authJwt} = require("../middleware");
const router = express.Router();

router.get('/', Solution.findAll);

router.post('/', authJwt.verifyToken, Solution.create);

router.get('/:id', Solution.findOne);

router.put('/:id', authJwt.verifyToken, Solution.update);

router.delete('/:id', authJwt.verifyToken, Solution.delete);

router.get('/download/:id', function (req, res) {
    res.send('download individual solutions resource');
});

module.exports = router;










