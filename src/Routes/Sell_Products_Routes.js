const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { SellGet, SellPost, SellDelete } = require( '../Controllers/Sell_Products_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Bill, Exist_Code_Product } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,2),
    validate_data
], SellGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,2),
    check( 'Bill', 'Bill customer number is required' ).not().isEmpty(),
    check( 'Bill' ).custom( Exist_Bill ),
    check( 'Code_Product', 'Code product required' ).not().isEmpty(),
    check( 'Code_Product' ).custom( Exist_Code_Product ),
    check( 'Total_Amount', 'Total amount required' ).not().isEmpty(),
    check( 'Total_Amount', 'Total amount required' ).isFloat(),
    check( 'Lot', 'Lot required' ).not().isEmpty(),
    check( 'Lot', 'Lot required' ).isLength({ min: 15, max: 15 }),
    check( 'Quantity', 'Quantity of products required' ).not().isEmpty(),
    check( 'Quantity', 'Quantity of products required' ).isNumeric(),
    check( 'Unit_Cost', 'Unit cost required' ).not().isEmpty(),
    check( 'Unit_Cost', 'Unit cost required' ).isFloat(),
    validate_data
], SellPost )

router.delete( '/delete/:id', [
    validate_token,
    accessRol(1,2),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).not().isNumeric(),
    validate_data
], SellDelete )
//--------- Routes ---------\\

module.exports = router
