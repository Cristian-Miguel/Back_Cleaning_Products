const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const SupplierGet = async ( req, res = response ) => { 
    const SP = `CALL SP_GET_LIST_SUPPLIER();`
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

const SupplierInsert = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_SUPPLIER('${body}')`
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

const SupplierUpdate = async ( req = request, res = response ) => {
    let body = JSON.stringify(req.body);
    const SP = `CALL SP_UPDATE_SUPPLIER('${body}')`
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

const SupplierDelete = async ( req = request, res = response ) => {
    const SP = `CALL SP_DELETE_SUPPLIER('${req.body.id}')`
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
    SupplierGet,
    SupplierInsert,
    SupplierUpdate,
    SupplierDelete
}