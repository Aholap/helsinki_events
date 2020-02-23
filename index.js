

const app = require('./App.js')
const http = require('http')
const https = require('https');
const server = http.createServer(app)
require('dotenv').config()




server.listen(process.env.PORT, () => {
    console.log(`Server running on port` + process.env.PORT)
  })