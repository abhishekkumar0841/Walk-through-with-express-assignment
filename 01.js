const http = require('http')
const PORT = 3000
const host = 'localhost'

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader("Content-type", "text/plain")
        res.end("Welcome to Men & Women Dummy Data")
    }else if(req.url === '/men'){
        res.statusCode = 200
        res.setHeader("Content-type", "text/plain")
        res.end("Men's product section")
    }else if(req.url === '/women'){
        res.statusCode = 200
        res.setHeader("Content-type", "text/plain")
        res.end("Women's product section")
    }else{
        res.statusCode = 500
        res.setHeader("Content-type", "text/plain")
        res.end("***send response as page not found!!!")
    }

})

server.listen(PORT, ()=>{
    console.log(`This server is successfully runs on ${host}:${PORT}`)
})