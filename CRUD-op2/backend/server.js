import express from 'express'
import cookieParser from 'cookie-parser'
import  { config } from 'dotenv'
import itemModel from './src/model/item.js'
import mongoConnection from './src/db/db.js'

config()
mongoConnection()

const app=express()




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



app.get('/', (req,res)=>{

})



app.listen(process.env.PORT, ()=>{
    console.log('server is on the run')
})