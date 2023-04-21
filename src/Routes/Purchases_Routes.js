const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { PurchasesGet, PurchasesInsert, PurchasesUpdate, PurchasesDelete } = require( '../Controllers/Purchases_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Purchase, Exist_Raw_Material, Exist_Supplier } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,3),
    validate_data
], PurchasesGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,3),
    check( 'Quantity', 'Quantity required' ).not().isEmpty(),
    check( 'Quantity', 'Quantity required' ).isNumeric(),
    check( 'Total_Cost', 'Total cost required' ).not().isEmpty(),
    check( 'Total_Cost', 'Total cost required' ).isFloat(),
    check( 'Id_Supplier', 'Id supplier number required' ).not().isEmpty(),
    check( 'Id_Supplier', 'Id supplier number required' ).isNumeric(),
    check( 'Id_Supplier').custom( Exist_Supplier ),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).not().isEmpty(),
    check( 'Id_Raw_Material', 'Id raw material number required' ).isNumeric(),
    check( 'Id_Raw_Material').custom( Exist_Raw_Material ),
    validate_data
], PurchasesInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,3),
    check( 'Id_Buy', 'Id buy required' ).not().isEmpty(),
    check( 'Id_Buy', 'Id buy required' ).isNumeric(),
    check( 'Id_Supplier').custom( Exist_Purchase ),
    check( 'Quantity', 'Quantity required' ).not().isEmpty(),
    check( 'Quantity', 'Quantity required' ).isNumeric(),
    check( 'Total_Cost', 'Total cost required' ).not().isEmpty(),
    check( 'Total_Cost', 'Total cost required' ).isFloat(),
    check( 'Id_Supplier', 'Id supplier number required' ).not().isEmpty(),
    check( 'Id_Supplier', 'Id supplier number required' ).isNumeric(),
    check( 'Id_Supplier').custom( Exist_Supplier ),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).not().isEmpty(),
    check( 'Id_Raw_Material', 'Id raw material number required' ).isNumeric(),
    check( 'Id_Raw_Material').custom( Exist_Raw_Material ),
    validate_data
], PurchasesUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,3),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Purchase ),
    validate_data
], PurchasesDelete )