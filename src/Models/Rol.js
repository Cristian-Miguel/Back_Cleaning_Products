const QueryManager = require( '../Models/QureryManager' )

async function check_Role ( Role ) {
    if(Role != ''){
        const SP = `CALL SP_GET_EXIST_ROL( ${Role} );`
        const inTable = await QueryManager.List_Information( SP )
        if( inTable[0][0].inTable == 1 )  return true
        else return false
    } else  return false
    
}

module.exports = {
    check_Role
}