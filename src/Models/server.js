const express = require( 'express' )
// const server_config = require( 'config' )
const cors = require( 'cors' )

class Server {

    constructor() {
        this.app = express()
        this.port = 8080 || server_config.get( 'server.port' )//process.env.PORT || server_config.get( 'server.port' )
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
        this.app.use( "/Auth", require( '../Routes/Auth_Routes' ) )
        this.app.use( "/User", require( '../Routes/User_Routes' ) )
        this.app.use( "/Sell", require( '../Routes/Sell_Products_Routes' ) )
        this.app.use( "/Customer",  require( '../Routes/Customer_Routes' ) )
        this.app.use( "/Product",  require( '../Routes/Products_Routes' ) )
        this.app.use( "/Employee",  require( '../Routes/Employee_Routes' ) )
        this.app.use( "/Inventory",  require( '../Routes/Inventory_Routes' ) )
        this.app.use( "/Supplier",  require( '../Routes/Supplier_Routes' ) )
        this.app.use( "/Raw_Material", require( '../Routes/Raw_Material_Routes' ) )
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