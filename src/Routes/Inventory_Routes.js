const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { InventoryGet, InventoryInsert, InventoryUpdate, InventoryDelete } = require( '../Controllers/Inventory_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Code_Product, Exist_Payroll, Exist_Lot } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,5),
    validate_data
], InventoryGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,5),
    check( 'Quantity_Made', 'Quantity made required' ).not().isEmpty(),
    check( 'Quantity_Made', 'Quantity made required' ).isNumeric(),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(),
    check( 'Payroll_Number', 'Payroll number required' ).isNumeric(),
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'Code_Product', 'Code product required' ).not().isEmpty(),
    check( 'Code_Product', 'Code product required' ).isNumeric(),
    check( 'Code_Product', 'Code product required' ).custom( Exist_Code_Product ),
    validate_data
], InventoryInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,5),
    check( 'Lot_Number', 'Lot number required' ).not().isEmpty(),
    check( 'Lot_Number', 'Lot number required' ).isNumeric(),
    check( 'Lot_Number').custom( Exist_Lot ),
    check( 'Quantity_Made', 'Quantity made required' ).not().isEmpty(),
    check( 'Quantity_Made', 'Quantity made required' ).isNumeric(),
    check( 'Payroll_Number', 'Payroll number required' ).not().isEmpty(),
    check( 'Payroll_Number', 'Payroll number required' ).isNumeric(),
    check( 'Payroll_Number').custom( Exist_Payroll ),
    check( 'Code_Product', 'Code product required' ).not().isEmpty(),
    check( 'Code_Product', 'Code product required' ).isNumeric(),
    check( 'Code_Product', 'Code product required' ).custom( Exist_Code_Product ),
    validate_data
], InventoryUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,5),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Lot ),
    validate_data
], InventoryDelete )