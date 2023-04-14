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
module.exports = {
    Exist_Role,
    Exist_Payroll,
    Exist_Email,
    Exist_Bill,
    Exist_Code_Product
}