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

const UserCreate = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_USER( "${body}" );`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            data: list[0],
            msg: 'Sucessful Insert',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

const UserUpdate = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_UPDATE_USER( "${body}" );`
    const list = await QueryManager.List_Information( SP )
    if(list != 501) {
        return res.status(200).json({
            data: list[0],
            msg: 'Sucessful Insert',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
} 

const UserDelete = async ( req = request, res = response ) => {
    const id = JSON.stringify(req.body.id);
    const SP = `CALL SP_DELETE_USER( "${id}" );`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            data: list[0],
            msg: 'Sucessful Insert',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

module.exports = {
    UserList,
    UserCreate,
    UserDelete,
    UserUpdate
}