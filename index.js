
const app = require('./app')
const http = require('http')
const https = require('https');
const server = http.createServer(app)




server.listen(3000, () => {
    console.log(`Server running on port 3000`)
  })