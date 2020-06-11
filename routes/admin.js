const express = require('express');
const router = express.Router();
const {verifySignUp} = require("../middleware");
const controller = require("../controllers/auth.controller");

//Register a user
router.post('/register', [verifySignUp.checkDuplicateEmail], controller.signup);

//Authenticate a user
router.post('/login', controller.signin);

module.exports = router;
