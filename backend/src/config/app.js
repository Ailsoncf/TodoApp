const port = process.env.PORT || 3000

const express = require('express')

const app = express()
 
app.use(express.json())

app.listen(port);

module.exports = app
 
