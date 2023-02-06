const { Router } = require('express')
const { check } = require( 'express-validator' )
const { validate_data } = require( '../middlewares/Validate_data' )
const { Exist_Email } = require('../helpers/DB_Validate')
const router = Router()
const Auth_Controller = require( '../Controllers/Auth_Controller' )

router.post(
    '/login', 
    [
        check( 'Email', 'Email is invalid or is Empty' ).isEmail(),
        check( 'Email' ).custom( Exist_Email ),
        check('Password', 'Password required').not().isEmpty(),
        check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8 }),
        validate_data
    ],
    Auth_Controller.UserLogin
)

module.exports = router