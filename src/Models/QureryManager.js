const conection = require( '../setting/Database' )()

//SP = Store Procedure
async function List_Information ( SP ) {
    try {
        let list = ''
        await conection.query( SP ).then( rows => { 
            // console.log(rows)
            list = rows 
        })
        return list
    } catch ( error ) {
        return 501
    }
} 

async function Manipulate_Data ( SP ) {
    try {
        await conection.query( SP )``
        return 200
    } catch ( error ) {
        return 501
    }
}

module.exports = {
    List_Information,
    Manipulate_Data
}