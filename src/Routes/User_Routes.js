const { Router } = require('express')
const { check } = require( 'express-validator' )
const { validate_data } = require( '../middlewares/Validate_data' )
const { Exist_Role, Exist_Payroll, Exist_Email, Exist_User } = require('../helpers/DB_Validate')
const router = Router()
const User_Controller = require( '../Controllers/User_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')

//--------- Routes ---------\\
router.get('/list', [
    validate_token,
    accessRol(1,4),
    validate_data
],User_Controller.UserList)

router.post('/create', [
    validate_token,
    accessRol(1,4),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(),
    check( 'Payroll_Number', 'Payroll number required' ).isNumeric(),
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'Email', 'Email is invalid or is Empty' ).isEmail(),
    check( 'Email', 'Email is so long, max 100 characters' ).isLength({ max:100 }),
    check( 'Email' ).not().custom( Exist_Email ),   
    check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8, max: 45}),
    check( 'Role', 'Role  required' ).not().isEmpty(),
    check( 'Role', 'Role  required' ).isNumeric(),
    check( 'Role' ).custom( Exist_Role ),
    validate_data
], User_Controller.UserCreate)

router.post('/update', [
    validate_token,
    accessRol(1),
    check( 'Id_User', 'Id User required' ).not().isEmpty(),
    check( 'Id_User', 'Id User required' ).isNumeric(),
    check( 'Id_User' ).custom( Exist_User ),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(),
    check( 'Payroll_Number', 'Payroll number required' ).isNumeric(),
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'Email', 'Email is invalid or is Empty' ).isEmail(),
    check( 'Email', 'Email is so long, max 100 characters' ).isLength({ max:100 }),
    check( 'Email' ).not().custom( Exist_Email ),   
    check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8, max: 45}),
    check( 'Role', 'Role  required' ).not().isEmpty(),
    check( 'Role', 'Role  required' ).isNumeric(),
    check( 'Role' ).custom( Exist_Role ),
    validate_data
], User_Controller.UserDelete)

router.post('/delete', [
    validate_token,
    accessRol(1),
    check( 'Id', 'Id  required' ).not().isEmpty(),
    check( 'Id', 'Id  required' ).isNumeric(),
    validate_data
], User_Controller.UserDelete)
//--------- Routes ---------\\

module.exports = router