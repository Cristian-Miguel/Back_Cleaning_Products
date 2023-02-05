const { validationResult } = require( 'express-validator' )
const { response, request } = require( 'express' )//it's redundant

const validate_data = ( req = request, res = response, next ) => {
    const errors = validationResult( req )
    if( !errors.isEmpty() )
        return res.status(400).json({ error: errors })
    next()
}

module.exports = {
    validate_data,
}