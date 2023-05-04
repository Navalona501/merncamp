import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const register = async (req, res) => {
   const { userName, email, password, secret } = req.body;

   //validation
   if(!userName) return res.status(400).send("UserName is required");
   if(!email) return res.status(400).send("Email is required");
   if(!password) return res.status(400).send("Password is required");
   if(password.length < 6) return res.status(400).send("Password should be 6 characters long");
   if(!secret) return res.status(400).send("Answer is required");

   const exist = await User.findOne({ email });
   if(exist) return res.status(400).send("Email already taken");

   //hash password
   const hashedPassword = await hashPassword(password);

   //create user
   const user = new User({
      userName,
      email,
      password: hashedPassword,
      secret,
   });

   try{
      await user.save();
      console.log("REGISTERED USER => ", user);
      res.status(201).send("User created");
   }catch(error){
        console.log("REGISTER FAILED => ", error);
      res.status(400).send(error);
   }
};