import express from 'express'
import cookieParser from 'cookie-parser'
import  { config } from 'dotenv'
import mongoConnection from './src/db/db.js'

import router from './src/routes/items.js'


config()
mongoConnection()

const app=express()




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/items', router)



app.get('/', (req,res)=>{

})



app.listen(process.env.PORT, ()=>{
    console.log('server is on the run')
})