import dotenv from "dotenv"
// import express  from "express";
import {app} from "./app.js"
import logger from "morgan";
//import userRouter from "./routes/user.routes.js"
import connectDB from "./db/index.js";

// const app = express();


dotenv.config({
    path:'./env'
})
app.use(logger("dev"));
//app.use("/api/v1/users",userRouter)
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb connection failed !!!",err)
})


