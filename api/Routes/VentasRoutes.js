const { response } = require('express')
const express = require('express')
const app = express()
const port = process.env.port || 8080
import SellController from '../Controllers/VentasController'

app.get('/sell_list', (res, req) => { 
    
})

app.post('/insert_sell', (res, req) => { 

})

app.delete('/delete_sell', (res, req) => { 

})



