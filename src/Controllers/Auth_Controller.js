const { response, request } = require( 'express' )//it's redundant
const { get_JWT } = require('../helpers/JWT')
const QueryManager = require( '../Models/QureryManager' )

const UserLogin = async ( req = request, res = response ) => {
    try {
        const SP_VERIFY = `CALL SP_GET_VERIFY_USER( "${req.body.Email}", "${req.body.Password}" );`
        const isUser = await QueryManager.List_Information( SP_VERIFY )
        if( isUser[0][0].isValid == 1 ){
        const SP_INFO = `CALL SP_GET_LOGIN_USER_INFO( "${req.body.Email}" );`
        const Info = await QueryManager.List_Information( SP_INFO )
        const token = await get_JWT(Info[0][0].idUsuarios, req.body.Email)
            return res.status(200).json({
                token: token,
                Email: Info[0][0].Email,
                Name: Info[0][0].All_Name,
                Rol: Info[0][0].idRol,
                msg: 'Valid credentials'
            })
        } else
            return res.status(401).json({
                error: 'Credencials invalid'
            })
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            error: 'Contact the administrator'
        })
    }
    
}

module.exports = {
    UserLogin,
}