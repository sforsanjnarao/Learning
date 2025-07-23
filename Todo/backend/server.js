import express from 'express'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import router from './src/routes/todo.route'
import cors from 'cors'
configDotenv()
const app= express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/',router)

app.listen(process.env.PORT,()=>{
    console.log('port is on the run')
})