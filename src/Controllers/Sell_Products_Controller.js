const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const SellGet = async ( req, res = response ) => { 
    const SP = `CALL SP_GET_LIST_SELL();`
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

const SellPost = async ( req = request, res = response ) => {
    let body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_SELL('${body}')`
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

const SellDelete = ( req = request, res = response ) => {
    const id = req.params.id
    res.json({
        msg: 'hello world'
    })
}

module.exports = {
    SellGet,
    SellPost,
    SellDelete
}
