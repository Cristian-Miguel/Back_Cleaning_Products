const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { MaterialGet, MaterialInsert, MaterialUpdate, MaterialDelete } = require( '../Controllers/Purchases_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Raw_Material } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,3),
    validate_data
], MaterialGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,3),
    check( 'Description', 'Description required' ).not().isEmpty(),
    check( 'Description', 'Description required' ).isLength({ max:45 }),
    check( 'One_Time_Cost', 'One time cost required' ).not().isEmpty(),
    check( 'One_Time_Cost', 'One time cost required' ).isFloat(),
    check( 'Measurement_Unit', 'Measurement unit required' ).not().isEmpty(),
    check( 'Measurement_Unit', 'Measurement unit required' ).isLength({ max:20 }),
    check( 'Stock' ).not().isEmail(),
    check( 'Stock' ).isNumeric(),
    validate_data
], MaterialInsert )

router.post( '/update', [
    validate_token,
    accessRol(1,3),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).not().isEmpty(),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).isNumeric(),
    check( 'Id_Raw_Material').custom( Exist_Raw_Material ),
    check( 'Description', 'Description required' ).not().isEmpty(),
    check( 'Description', 'Description required' ).isLength({ max:45 }),
    check( 'One_Time_Cost', 'One time cost required' ).not().isEmpty(),
    check( 'One_Time_Cost', 'One time cost required' ).isFloat(),
    check( 'Measurement_Unit', 'Measurement unit required' ).not().isEmpty(),
    check( 'Measurement_Unit', 'Measurement unit required' ).isLength({ max:20 }),
    check( 'Stock' ).not().isEmail(),
    check( 'Stock' ).isNumeric(),
    validate_data
], MaterialUpdate )

router.post( '/delete', [
    validate_token,
    accessRol(1,3),
    check( 'id', 'Id number required' ).not().isEmpty(),
    check( 'id', 'Id number required' ).isNumeric(),
    check( 'id', 'Id number required' ).custom( Exist_Raw_Material ),
    validate_data
], MaterialDelete )