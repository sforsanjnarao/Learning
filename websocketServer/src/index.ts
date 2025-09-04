import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 3000});

let connectedUser=0;
wss.on('connection',(socket)=>{
        connectedUser=connectedUser+1
        console.log('connected to the users',connectedUser)

        socket.on('message',(message)=>{
            console.log('message recived',message.toString())
            setTimeout(()=>{
                socket.send(`hello from server, you are user number ${connectedUser} with message: '${message}'`)
            },1000)
        })

})

