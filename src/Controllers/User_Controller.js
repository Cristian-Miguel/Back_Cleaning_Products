const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const UserList = async ( req, res = response ) => {
    const SP = 'CALL SP_GET_LIST_USERS();'
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            data: list[0],
            msg: 'Sucessful Request',
        })
    } else {
        res.status(501).json({
            error: 'Error en el servidor'
        })
    }
}

const UserLogin = async ( req = request, res = response ) => {
    const SP_VERIFY = `CALL SP_GET_VERIFY_USER( "${req.body.Email}", "${req.body.Password}" );`
    const isUser = await QueryManager.List_Information( SP_VERIFY )
    if( isUser[0][0].isValid == 1 ){
    const SP_INFO = `CALL SP_GET_LOGIN_USER_INFO( "${req.body.Email}" );`
    const Info = await QueryManager.List_Information( SP_INFO )
        return res.status(200).json({
            token: 1,
            Name: Info[0][0].All_Name,
            Rol: Info[0][0].idRol,
            msg: 'correct user'
        })
    } else
        return res.status(401).json({
            error: 'Credencials invalid'
        })
}

const UserCreate = ( req = request, res = response ) => {
    const SP = `CALL SP_CREATE_USER( "${req.body}" );`
    return res.status(200).json({
        msg: 'correct user'
    })
}

const UserDelete = ( req = request, res = response ) => {
    
}

const UserUpdate = ( req = request, res = response ) => {
    
} 

module.exports = {
    UserList,
    UserLogin,
    UserCreate,
    UserDelete,
    UserUpdate
}