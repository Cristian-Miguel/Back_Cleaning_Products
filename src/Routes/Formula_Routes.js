const { Router } = require( 'express' )
const { check } = require( 'express-validator' )
const router = Router()
const { FormulaGet, FormulaInsert, FormulaUpdate, FormulaDelete } = require( '../Controllers/Formula_Controller' )
const { validate_token } = require('../middlewares/Validate_JWT')
const { accessRol } = require('../middlewares/Validate_Roles')
const { Exist_Raw_Material, Exist_Formula } = require('../helpers/DB_Validate')
const { validate_data } = require( '../middlewares/Validate_data' )

//--------- Routes ---------\\
router.get( '/list', [
    validate_token,
    accessRol(1,6),
    validate_data
], FormulaGet )

router.post( '/insert', [
    validate_token,
    accessRol(1,6),
    check( 'Id_Formula', 'Id formula required' ).not().isEmpty(),
    check( 'Id_Formula', 'Id formula required' ).isNumeric(),
    check( 'Id_Formula', 'Id formula required' ).custom( Exist_Formula ),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).not().isEmpty(),
    check( 'Id_Raw_Material', 'Id_Raw_Material number required' ).isNumeric(),
    check( 'Id_Raw_Material').custom( Exist_Raw_Material ),
    check( 'Total_Cost', 'Total cost required' ).not().isEmpty(),
    check( 'Total_Cost', 'Total cost required' ).isFloat(),
    check( 'Quantity_Made', 'Quantity made required' ).not().isEmpty(),
    check( 'Quantity_Made', 'Quantity made required' ).isNumeric(),
    check( 'Unit_Cost', 'Unit cost required' ).not().isEmpty(),
    check( 'Unit_Cost', 'Unit cost required' ).isFloat(),
    validate_data
], FormulaInsert )

//--------- Routes ---------\\

module.exports = router