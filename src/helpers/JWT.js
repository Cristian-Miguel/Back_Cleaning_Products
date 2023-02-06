const jwt = require( 'jsonwebtoken' )
const server_config = require( 'config' );

const get_JWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {
        const payload = { uid }
        jwt.sign( 
            payload,
            server_config.get('security.secretprivatekey'), 
            { expiresIn: '24h' },
            ( error, token ) => {
                if(error){
                    console.log(error)
                    reject('Problems getting the token')
                } else resolve( token )
            }
        )
    } )
}

module.exports = {
    get_JWT,
}