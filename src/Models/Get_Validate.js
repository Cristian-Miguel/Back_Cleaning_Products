const QueryManager = require( '../Models/QureryManager' )

async function check_Validate ( Name_SP, data ) {
    const SP = `CALL ${Name_SP} ${data} `
    const inTable = await QueryManager.List_Information( SP )
    if( inTable[0][0].inTable == 1 )  return true
    else return false
}

module.exports = {
    check_Validate
}