const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const InventoryGet = async ( req, res = response ) => { 
    const SP = `CALL SP_GET_LIST_LOT();`
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

const InventoryInsert = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_LOT('${body}')`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            msg: 'Sucessful Insert',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

const InventoryUpdate = async ( req = request, res = response ) => {
    let body = JSON.stringify(req.body);
    const SP = `CALL SP_UPDATE_LOT('${body}')`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            msg: 'Sucessful Update',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

const InventoryDelete = async ( req = request, res = response ) => {
    const SP = `CALL SP_DELETE_LOT('${req.body.id}')`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            msg: 'Sucessful Delete',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

module.exports = {
    InventoryGet,
    InventoryInsert,
    InventoryUpdate,
    InventoryDelete
}