const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { CustomerGet, CustomerInsert, CustomerUpdate, CustomerDelete } = require( '../Controllers/Customer_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Bill, Exist_Code_Product } = require('../helpers/DB_Validate')
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