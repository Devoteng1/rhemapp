const { check } = require('express-validator');


exports.userSignValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Email must be valid email address'),
    check('password')
        .isLength({ min: 6 })
        //.isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
      
]

exports.userSignInValidator = [
    check('email')
        .isEmail()
        .withMessage('Email must be valid email address'),
    check('password')
        .isLength({ min: 6 })
        //.isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')

]