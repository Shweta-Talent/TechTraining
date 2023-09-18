
import express,{Request ,Response} from "express"
import bodyParser from "body-parser"
import { pool,create_tables } from "./database"
import "dotenv/config"
import LoginRoute from "./Routes/login"

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(LoginRoute)
app.listen(process.env.PORT,()=>(
    create_tables(),
    console.log("connected to server")
))
