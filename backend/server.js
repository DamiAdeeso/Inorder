import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js"

mongoose.connect("mongodb://127.0.0.1:27017/inorder").then(()=>{
    console.log("connected to db")
  }).catch((err)=>{
    console.log(err.message);
  })

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//initial routes

app.use('/api/users',userRouter);

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})
const port = 5000
app.listen(port,()=>{
    console.log('server is running')
});
