const express = require( 'express' )
const server_config = require( 'config' )
const cors = require( 'cors' )

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || server_config.get( 'server.port' )
        this.paths = {
           Auth : '/Auth',
           User : '/User',
           Sell : '/Sell',
           Customer : '/Customer',
           Product : '/Product',
           Employee : '/Employee',
           Inventory : '/Inventory',
           Supplier : '/Supplier',
        }
        this.middlewares ()
        this.routes()
    }

    middlewares () {

        //CORS
        this.app.use( cors() )

        //Reading and parsing from body
        this.app.use( express.json() )

        //Dir public, is for the html files
        this.app.use( express.static('public') )

    }

    routes () {
        this.app.use( this.paths.Auth, require( '../Routes/Auth_Routes' ) )
        this.app.use( this.paths.User, require( '../Routes/User_Routes' ) )
        this.app.use( this.paths.Sell, require( '../Routes/Sell_Products_Routes' ) )
        this.app.use( this.paths.Customer,  require( '../Routes/Customer_Routes' ) )
        this.app.use( this.paths.Product,  require( '../Routes/Products_Routes' ) )
        this.app.use( this.paths.Employee,  require( '../Routes/Employee_Routes' ) )
        this.app.use( this.paths.Inventory,  require( '../Routes/Inventory_Routes' ) )
        this.app.use( this.paths.Supplier,  require( '../Routes/Supplier_Routes' ) )
    }

    listen () {
        this.app.listen( this.port, () => {
            const datetime = new Date()
            const message = "Server enable at Port: " + this.port + " at date " + datetime
            console.log( message );
        })
    }
}

module.exports = Server