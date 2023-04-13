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
            error: 'Error in the server'
        })
    }
}

const UserCreate = ( req = request, res = response ) => {
    const SP = `CALL SP_CREATE_USER( "${req.body}" );`
    return res.status(200).json({
        msg: 'User create'
    })
}

const UserDelete = ( req = request, res = response ) => {
    
}

const UserUpdate = ( req = request, res = response ) => {
    
} 

module.exports = {
    UserList,
    UserCreate,
    UserDelete,
    UserUpdate
}