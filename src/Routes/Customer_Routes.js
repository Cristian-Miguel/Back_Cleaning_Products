const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { CustomerGet, CustomerInsert, CustomerUpdate, CustomerDelete } = require( '../Controllers/Customer_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Bill } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,2),
    validate_data
], CustomerGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,2),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
    check( 'Street', 'Street required' ).not().isEmpty(),
    check( 'Street', 'Street is max 150 characters' ).isLength({max: 150}),
    check( 'Number', 'Number of house required' ).not().isEmpty(),
    check( 'Number', 'Number of house is max 100 characters' ).isLength({max: 100}),
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
    validate_data
], CustomerInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,2),
    check( 'Bill', 'Bill number required' ).not().isEmpty(),
    check( 'Bill', 'Bill number required' ).isNumeric(),
    check( 'Bill', 'Bill number required' ).custom( Exist_Bill ),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
    check( 'Street', 'Street required' ).not().isEmpty(),
    check( 'Street', 'Street is max 250 characters' ).isLength({max: 250}),
    check( 'Number', 'Number of house required' ).not().isEmpty(),
    check( 'Number', 'Number of house is max 100 characters' ).isLength({max: 100}),
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
    validate_data
], CustomerUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,2),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Bill ),
    validate_data
], CustomerDelete )
//--------- Routes ---------\\

module.exports = router