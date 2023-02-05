const { check_Role } = require( '../Models/Rol' )
const { check_Payroll } = require( '../Models/PayRoll' )

const isValidRole = async ( Role = '' ) => {
    let inDB = await check_Role( Role )
    if( !inDB )
        throw new Error('Rol not found in the DB')
} 

const isValidPayroll = async ( Payroll_Number = '' ) => {
    let inDB = await check_Payroll( Payroll_Number )
    if( !inDB )
        throw new Error('Payroll not found in the DB')
} 

module.exports = {
    isValidRole,
    isValidPayroll,
}