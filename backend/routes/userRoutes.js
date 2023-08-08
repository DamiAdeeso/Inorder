import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js"

const userRouter = express.Router();
userRouter.post("/signup", expressAsyncHandler(async (req, res) => {
   
   try{console.log(req.body)
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.lastName,
        password: req.body.password
    }) 
   const user = await newUser.save();
   res.status(201).send({
    _id: user._id,
    name: user.name,
    email: user.email,
   })
   } catch(err){
    console.log(err)
   }

   
}))
userRouter.post("/signin", expressAsyncHandler(async(req, res) => { console.log("here")
    const user = await User.findOne({email:req.body.email});

    if (user.password===req.body.passWord){
        res.send({
            _id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
        })
        return;
    }
 res.status(201).send({message:"Invalid Username or Password"})
}))

export default userRouter;