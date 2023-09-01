const http=require('http')
const routeHandler = require("./day3")

const server = http.createServer(routeHandler)

server.listen(3005)