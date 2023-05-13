const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const FormulaGet = async ( request = req, res = response ) => { 
    const SP = `CALL SP_GET_LIST_FORMULA();`
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

const FormulaInsert = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_INSERT_FORMULA('${body}')`
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

const FormulaUpdate = async ( req = request, res = response ) => {
    const body = JSON.stringify(req.body);
    const SP = `CALL SP_UPDATE_FORMULA('${body}')`
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

module.exports = {
    FormulaGet,
    FormulaInsert,
    FormulaUpdate,
    FormulaDelete
}