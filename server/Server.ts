import connectDB from './config/mongodb';
import 'dotenv/config'
const express = require("express")

const app = express();
const port  = process.env.PORT||4000
connectDB();




app.use(express.json())
 
