const { check_Validate } = require( '../Models/Get_Validate' )

const Exist_Role = async ( Role = '' ) => {
    if( Role == '' ) throw new Error('Insert Rol')
    else if( 
        !await check_Validate(
            'SP_GET_EXIST_ROL' ,
            `( ${Role} );`
        )
    ) throw new Error('Rol not found in the DB')
}

const Exist_User = async ( Id_User = '' ) => {
    if( Role == '' ) throw new Error('Insert Id User')
    else if( 
        !await check_Validate(
            'SP_GET_EXIST_USER',
            `( ${Id_User} );`
        )
    ) throw new Error('Id User not found in the DB')
}

const Exist_Payroll = async ( Payroll_Number = '' ) => {
    if( Payroll_Number == '' ) throw new Error('Insert Payroll Number')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_PAYROLL' ,
            `( ${Payroll_Number} );`
        )
    ) throw new Error('Payroll not found in the DB')
}

const Exist_Email = async( Email = '' ) => {
    if( Email == '' ) throw new Error('Insert Email')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_EMAIL' ,
            `( "${Email}" );`,
        )
    ) throw new Error('Email not found in the DB')
}

const Exist_Bill = async( Bill = '' ) => {
    if( Bill == '' ) throw new Error('Insert customer bill')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_CUSTOMER_BILL' ,
            `( "${Bill}" );`,
        )
    ) throw new Error('Customer bill client not found in the DB')
}

const Exist_Code_Product = async( Code_Product = '' ) => {
    if( Code_Product == '' ) throw new Error('Insert Code Product')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_CODE_PRODUCT' ,
            `( "${Code_Product}" );`,
        )
    ) throw new Error('Code Product not found in the DB')
}

const Exist_Formula = async( Id_Formula = '' ) => {
    if( Id_Formula == '' ) throw new Error('Insert id formula')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_FORMULA' ,
            `( "${Id_Formula}" );`,
        )
    ) throw new Error('Id formula not found in the DB')
}

const Exist_Lot = async( Id_Lot = '' ) => {
    if( Id_Lot == '' ) throw new Error('Insert id lot')
    else if(
        !await check_Validate(
            'SP_GET_EXIST_LOT' ,
            `( "${Id_Lot}" );`,
        )
    ) throw new Error('Id lot not found in the DB')
}

module.exports = {
    Exist_Role,
    Exist_User,
    Exist_Payroll,
    Exist_Email,
    Exist_Bill,
    Exist_Code_Product,
    Exist_Formula,
    Exist_Lot
}