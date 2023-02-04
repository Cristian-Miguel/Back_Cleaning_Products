const express = require('express'),
    server_config = require('config'),
    app = express(),
    port = process.env.PORT || server_config.get('server.port')
    // sesion = require('express-sesion')

app.listen(port, () => {
    const datetime = new Date()
    const message = "Server enable on Port: " + port + " in the date: " + datetime
    console.log(message);
})