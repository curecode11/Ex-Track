const express =require('express')
const cors=require("cors")
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const { log } = require('console')
const connectDB=require("./config/connectDB")
// config dot env file
dotenv.config();

// database call
connectDB();

// rest object
const app=express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/users',require('./routes/userRoute'))

// transaction routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));
// port
const PORT=8080 || process.env.PORT


// listen server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})