
const express = require('express')
const app = express()
const rout = require('./route')
const url = "http://open-api.myhelsinki.fi/v1/activities/"
const cors = require('cors')
const bodyParser = require('body-parser')




app.use(bodyParser.json())

app.use(express.static('build'))
app.use(cors())
app.use('/events', rout)






module.exports = app
