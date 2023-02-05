const { Router } = require('express')
const { check } = require( 'express-validator' )
const { validate_data } = require( '../middlewares/Validate_data' )
const { isValidRole, isValidPayroll } = require('../helpers/DB_Validate')
const router = Router()
const User_Controller = require( '../Controllers/User_Controller' )

//--------- Routes ---------\\
router.get('/list', User_Controller.UserList)

router.post('/login', [
    check( 'Email', 'Email is invalid or is Empty' ).isEmail(),
    check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8 }),
    validate_data
], User_Controller.UserLogin)

router.post('/create', [
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(), 
    check( 'Payroll_Number').custom( isValidPayroll ),
    check( 'Email', 'Email is invalid or is Empty' ).isEmail(),    
    check( 'Password', 'Password less than 8 or is Empty' ).isLength({ min: 8 }),
    check( 'Role', 'Role  required' ).not().isEmpty(), 
    // check( 'Role', 'The role is invalid' ).isIn([1,2,3,4,6]),
    check( 'Role' ).custom( isValidRole ),
    validate_data
], User_Controller.UserCreate)

router.delete('/delete', User_Controller.UserDelete)
//--------- Routes ---------\\

module.exports = router