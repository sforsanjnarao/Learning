/// using http lib to create websocket lib
const http= require('http')
const webSocket=require('ws')
const server=http.createServer((req, res)=>{
    console.log((new Date())+ 'recived request for'+ req.url)
    res.end(' hi their')
})

const wss = new webSocket.WebSocketServer({server})


wss.on('connection',function connection(ws){
    ws.on('error',(err)=> console.error('Error:', err))
    ws.on('message',(data, isbinary)=>{
        wss.clients.forEach(client => {
            if(client.readyState===webSocket.WebSocket.OPEN){
                client.send(data,{isbinary})
            }
        });
    })

    ws.send('hello! message from the Server')
})


server.listen(8080,()=>{
    console.log((new Date.now())+'server listing on the port 8080')
})