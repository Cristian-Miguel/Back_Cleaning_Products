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
//--------- Routes ---------\\

module.exports = router