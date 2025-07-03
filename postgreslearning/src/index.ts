import { Client } from "pg"; //it's like mongoose(ODM) to which helps talk to the database
const pgClient= new Client('postgresql://neondb_owner:npg_dGukJq30yrRQ@ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')
//buildinging connection
import { Response, Request } from "express";
import express from 'express'
const app= express()

app.use(express.json())

//another way of building connection

// const pgClient2= new Client({
//     user:"neondb_owner",
//     password:"npg_dGukJq30yrRQ",
//     port:5432,
//     database:'neondb',
//     host:"ep-royal-sea-a1seykjz-pooler.ap-southeast-1.aws.neon.tech",
//     ssl: true

// })

async function main() {
    await pgClient.connect() //like mongoose.connect()
}
main()

app.post('/signup', async (res: Response, req: Request)=>{
    const {username, email, password}=req.body
    //we can use the validation
    const User=await pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`)
    res.status(200).json(
        console.log('YOU are going write')
    )

})

app.listen(3000,()=>{
    console.log('server is on the run')
})
