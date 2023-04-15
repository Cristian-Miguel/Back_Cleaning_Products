const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { ProductGet, ProductInsert, ProductUpdate, ProductDelete } = require( '../Controllers/Product_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Code_Product, Exist_Formula } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,5),
    validate_data
], ProductGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,5),
    check( 'Id_Formula', 'Id formula required' ).not().isEmpty(),
    check( 'Id_Formula', 'Id formula required' ).isNumeric(),
    check( 'Id_Formula', 'Id formula required' ).custom( Exist_Formula ),
    check( 'Name', 'Name required' ).not().isEmpty(),
    check( 'Name', 'Name is max 250 characters' ).isLength({max: 250}),
    check( 'Unit_Cost', 'Unit cost required' ).not().isEmpty(),
    check( 'Unit_Cost', 'Unit cost required' ).isFloat(),
    check( 'Exchange_Rate', 'Exchange rate required' ).not().isEmpty(),
    check( 'Exchange_Rate', 'Exchange rate required' ).isLength({max: 5}),
    check( 'Total_Weight', 'Total weight required' ).not().isEmpty(),
    check( 'Total_Weight', 'Total weight required' ).isFloat(),
    check( 'Measurement_Unit', 'Measurement unit required' ).not().isEmpty(),
    check( 'Measurement_Unit', 'Measurement unit required' ).isLength({max: 45}),
    validate_data
], ProductInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,5),
    check( 'Code_Product', 'Code product required' ).not().isEmpty(),
    check( 'Code_Product', 'Code product required' ).isNumeric(),
    check( 'Code_Product', 'Code product required' ).custom( Exist_Code_Product ),
    check( 'Id_Formula', 'Id formula required' ).not().isEmpty(),
    check( 'Id_Formula', 'Id formula required' ).isNumeric(),
    check( 'Id_Formula', 'Id formula required' ).custom( Exist_Formula ),
    check( 'Name', 'Name required' ).not().isEmpty(),
    check( 'Name', 'Name is max 250 characters' ).isLength({max: 250}),
    check( 'Unit_Cost', 'Unit cost required' ).not().isEmpty(),
    check( 'Unit_Cost', 'Unit cost required' ).isFloat(),
    check( 'Exchange_Rate', 'Exchange rate required' ).not().isEmpty(),
    check( 'Exchange_Rate', 'Exchange rate required' ).isLength({max: 5}),
    check( 'Total_Weight', 'Total weight required' ).not().isEmpty(),
    check( 'Total_Weight', 'Total weight required' ).isFloat(),
    check( 'Measurement_Unit', 'Measurement unit required' ).not().isEmpty(),
    check( 'Measurement_Unit', 'Measurement unit required' ).isLength({max: 45}),
    validate_data
], ProductUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,5),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Code_Product ),
    validate_data
], ProductDelete )
//--------- Routes ---------\\

module.exports = router