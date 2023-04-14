const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const CustomerGet = async ( req, res = response ) => { 
    const SP = `CALL SP_GET_LIST_CUSTOMER();`
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

const CustomerInsert = async ( req = request, res = response ) => {
    let body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_CUSTOMER('${body}')`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            msg: 'Sucessful Request',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

const CustomerUpdate = async ( req = request, res = response ) => {
    let body = JSON.stringify(req.body);
    const SP = `CALL SP_UPDATE_CUSTOMER('${body}')`
    const list = await QueryManager.List_Information( SP )
    if(list != 501){
        return res.status(200).json({
            msg: 'Sucessful Request',
        })
    } else {
        res.status(501).json({
            error: 'Error in the server'
        })
    }
}

const CustomerDelete = ( req = request, res = response ) => {
    const id = req.params.id
    res.json({
        msg: 'hello world'
    })
}

module.exports = {
    CustomerGet,
    CustomerInsert,
    CustomerUpdate,
    CustomerDelete
}
