import express from 'express'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
configDotenv()
const app= express()

app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use(cookieParser)

app.use('/',)

app.listen(process.env.PORT,()=>{
    console.log('port is on the run')
})