import express from "express"
import cors from "cors"
import dotenv  from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import { UserRouter } from "./routes/user.js"
dotenv.config()



const app = express()
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true,
    optionsSuccessStatus:200
}))
app.use(express.json())

app.use(cookieParser())
app.use('/auth',UserRouter)

mongoose.connect('mongodb://localhost:27017/authentication')

app.listen(process.env.PORT,()=> {
    console.log('server is running')
})