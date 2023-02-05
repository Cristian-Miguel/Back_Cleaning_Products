const { response, request } = require( 'express' )//it's redundant
const QueryManager = require( '../Models/QureryManager' )

const SellGet = ( req = request, res = response ) => { 

    res.json({
        data: res.params,
        msg: 'hello world'
    })
}

const SellPost = ( req = request, res = response ) => { 
    res.json({
        msg: 'hello world'
    })
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
