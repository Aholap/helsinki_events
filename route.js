const router = require('express').Router()
const http = require('http')



router.get('/', async(req, res) => {
    console.log('Trying')
    let data = ''


    const request = http.request({
        Accept: 'application/json',
        method: 'GET',
        path : '/v1/activities/',
        host : 'open-api.myhelsinki.fi',
        
    
    },
    resp => {
        
        console.log(`statusCode: ${resp.statusCode}`)
        
        
    
        resp.on('data', d => {
    
            data += d
            console.log(typeof(data))
            console.log('AHHAHHAHA')
            
    
            
        })
    
        resp.on("end", x => {
            res.send(data)
            console.log(data)
        });
    })
    
    request.on('error', error => {
        console.error(error)
        
        })
    
    
    request.end()
    
    




}
)

module.exports = router