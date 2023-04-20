const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { SupplierGet, SupplierInsert, SupplierUpdate, SupplierDelete } = require( '../Controllers/Supplier_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Payroll, Exist_Supplier } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,3),
    validate_data
], SupplierGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,3),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
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
    validate_data
], SupplierInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,3),
    check( 'Id_Supplier', 'Id supplier number required' ).not().isEmpty(),
    check( 'Id_Supplier', 'Id supplier number required' ).isNumeric(),
    check( 'Id_Supplier').custom( Exist_Supplier ),
    check( 'First_Name', 'First name required' ).not().isEmpty(),
    check( 'First_Name', 'First name is max 250 characters' ).isLength({max: 250}),
    check( 'First_Last_Name', 'First last name required' ).not().isEmpty(),
    check( 'First_Last_Name', 'First last name is max 250 characters' ).isLength({max: 250}),
    check( 'Second_Last_Name', 'Second last name required' ).not().isEmpty(),
    check( 'Second_Last_Name', 'Second last name is max 250 characters' ).isLength({max: 250}),
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
    validate_data
], SupplierUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,3),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Supplier ),
    validate_data
], SupplierDelete )