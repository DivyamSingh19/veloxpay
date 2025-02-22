 
import 'dotenv/config'
const express = require("express")

const app = express();
const port  = process.env.PORT||4000
 




app.use(express.json())






app.listen(port,()=>(`Server started on port :${port} - http://localhost:${port}`))
