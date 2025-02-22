import express from "express"
import { Request , Response } from "express";
import 'dotenv/config'


const app = express();
const port  = process.env.PORT||4000
 




app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send("API WORKING")
})





app.listen(port,()=>(console.log(`Server started on port :${port} - http://localhost:${port}`)))
