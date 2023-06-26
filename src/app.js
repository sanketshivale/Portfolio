const express = require("express")
const bodyParser = require('body-parser')
const homeRouter = require('./routes/homeRoute')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.use('/', homeRouter)

app.listen(port, function () {
    console.log(`Server running on port ${port}, http://localhost:${port}`)
    })