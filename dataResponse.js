const http = require('http')
const port = process.env.PORT || 3000

const data = [{
    id: 1,
    name: "Roy",

},{
    id: 2,
    name: "Yin",

},{
    id: 3,
    name: "Chin",

},]

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({success : 'true', data}))
})

server.listen(port, ()=> {
    console.log('Server is started')
})
