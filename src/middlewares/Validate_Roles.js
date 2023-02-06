const { response, request } = require( 'express' )//it's redundant
const jwt = require( 'jsonwebtoken' )
const server_config = require( 'config' );
const QueryManager = require( '../Models/QureryManager' )

const isAdmin = ( res = response, req = request, next ) => {

}

const accessRol = ( ...AllRoles ) => {
    return async ( req = request, res = response, next ) => {
        try {
            const secret = server_config.get('security.secretprivatekey')
            const { uid }  = jwt.verify( token, secret )
            const User = req.body.User
            const Exist = await QueryManager.List_Information( `CALL SP_GET_EXIST_EMAIL( "${User}" );` )//check if the user exist
            if( Exist[0][0].inTable == 1 ) {
                const Info = await QueryManager.List_Information( `CALL SP_GET_LOGIN_USER_INFO( "${User}" );` ) //check if id it's the same
                if( Info[0][0].idUsuarios != uid ) {
                    return res.status(401).json({
                        msg: 'User denied'
                    })
                } else {
                    let i = 0 
                    while ( i < AllRoles.length ) {
                        if (Info[0][0].idRol != AllRoles[i]) {
                            return res.status(401).json({
                                msg: 'Role user denied'
                            })  
                        }
                        i++
                    }
                }
            } else {
                return res.status(401).json({
                    msg: 'User denied'
                })
            }
            next()
        } catch (error) {
            console.log(error)
            return res.status(401).json({
                msg: 'Invalida Action'
            })
        }
    }
}

module.exports = {
    isAdmin,
    accessRol,
}