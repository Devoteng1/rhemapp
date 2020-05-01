const express = require('express');
const router = express.Router();

const { signup, accountActivation, signin } = require('../controller/auth.controller');

// import validators
const { userSignValidator, userSignInValidator} = require('../validators/auth');
const { runValidation } = require('../validators/index');

//signup route
router.post('/signup', userSignValidator, runValidation, signup);

//account-activation route
router.post('/account-activation', accountActivation);

//signIn route
router.post('/signin', userSignInValidator, runValidation, signin);


module.exports = router;