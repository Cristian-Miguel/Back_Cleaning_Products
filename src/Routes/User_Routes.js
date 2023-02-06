const { Router } = require('express')
const { check } = require( 'express-validator' )
const { validate_data } = require( '../middlewares/Validate_data' )
const { Exist_Role, Exist_Payroll, Exist_Email } = require('../helpers/DB_Validate')
const router = Router()
const User_Controller = require( '../Controllers/User_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')

//--------- Routes ---------\\
router.get('/list', User_Controller.UserList)

router.post('/create', [
    validate_token,
    accessRol(1,4),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(), 
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'Email', 'Email is invalid or is Empty' ).isEmail(),
    check( 'Email' ).not().custom( Exist_Email ),   
    check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8 }),
    check( 'Role', 'Role  required' ).not().isEmpty(),
    check( 'Role' ).custom( Exist_Role ),
    validate_data
], User_Controller.UserCreate)

router.delete('/delete', User_Controller.UserDelete)
//--------- Routes ---------\\

module.exports = router