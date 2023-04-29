const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { EmployeeGet, EmployeeInsert, EmployeeUpdate, EmployeeDelete } = require( '../Controllers/Employee_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Payroll } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,4),
    validate_data
], EmployeeGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,4),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
    check( 'Birth_Date', 'Birth date required' ).not().isEmpty(),
    check( 'Birth_Date', 'Birth date required' ).isDate(),
    check( 'Entry_Date', 'Entry date required' ).not().isEmpty(),
    check( 'Entry_Date', 'Entry date required' ).isDate(),
    check( 'Birthplace', 'Birthplace required' ).not().isEmpty(),
    check( 'Birthplace', 'Birthplace required' ).isLength({max: 250}),
    check( 'Street', 'Street required' ).not().isEmpty(),
    check( 'Street', 'Street is max 150 characters' ).isLength({max: 150}),
    check( 'Number', 'Number of house required' ).not().isEmpty(),
    check( 'Number', 'Number of house is max 50 characters' ).isLength({max: 50}),
    check( 'Distric', 'Distric required' ).not().isEmpty(),
    check( 'Distric', 'Distric is max 150 characters' ).isLength({max: 150}),
    check( 'City', 'City required' ).not().isEmpty(),
    check( 'City', 'City is max 150 characters' ).isLength({max: 150}),
    check( 'State', 'State required' ).not().isEmpty(),
    check( 'State', 'State is max 150 characters' ).isLength({max: 150}),
    check( 'Zip_code', 'Zip code required' ).not().isEmpty(),
    check( 'Zip_code', 'Zip code required' ).isNumeric(),
    check( 'Country', 'Country required' ).not().isEmpty(),
    check( 'Country', 'Country is max 150 characters' ).isLength({max: 150}),
    check( 'Phone_Number', 'Phone number required' ).not().isEmpty(),
    check( 'Phone_Number', 'Phone number required' ).isMobilePhone(),
    validate_data
], EmployeeInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,4),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(),
    check( 'Payroll_Number', 'Payroll number required' ).isNumeric(),
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
    check( 'Birth_Date', 'Birth date required' ).not().isEmpty(),
    check( 'Birth_Date', 'Birth date required' ).isDate(),
    check( 'Entry_Date', 'Entry date required' ).not().isEmpty(),
    check( 'Entry_Date', 'Entry date required' ).isDate(),
    check( 'Birthplace', 'Birthplace required' ).not().isEmpty(),
    check( 'Birthplace', 'Birthplace required' ).isLength({max: 250}),
    check( 'Street', 'Street required' ).not().isEmpty(),
    check( 'Street', 'Street is max 150 characters' ).isLength({max: 150}),
    check( 'Number', 'Number of house required' ).not().isEmpty(),
    check( 'Number', 'Number of house is max 50 characters' ).isLength({max: 50}),
    check( 'Distric', 'Distric required' ).not().isEmpty(),
    check( 'Distric', 'Distric is max 150 characters' ).isLength({max: 150}),
    check( 'City', 'City required' ).not().isEmpty(),
    check( 'City', 'City is max 150 characters' ).isLength({max: 150}),
    check( 'State', 'State required' ).not().isEmpty(),
    check( 'State', 'State is max 150 characters' ).isLength({max: 150}),
    check( 'Zip_code', 'Zip code required' ).not().isEmpty(),
    check( 'Zip_code', 'Zip code required' ).isNumeric(),
    check( 'Country', 'Country required' ).not().isEmpty(),
    check( 'Country', 'Country is max 150 characters' ).isLength({max: 150}),
    check( 'Phone_Number', 'Phone number required' ).not().isEmpty(),
    check( 'Phone_Number', 'Phone number required' ).isMobilePhone(),
    validate_data
], EmployeeUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,4),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Payroll ),
    validate_data
], EmployeeDelete )

module.exports = router