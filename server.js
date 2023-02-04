const express = require('express'),
    app = express(),
    port = process.env.PORT || 8080
app.listen(port, () => {
    const datetime = new Date()
    const message = "Server enable on Port: " + port + " in the date: " + datetime
    console.log(message);
})