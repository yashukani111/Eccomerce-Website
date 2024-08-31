const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config

exports.signup = async (req,res) => {
    try{

        const{
            email,
            password,
            confirmPassword,
            AccountType
        } = req.body;

        if(
            !email ||
            !password ||
            !confirmPassword ||
            !AccountType
        ){
            return res.status(403).send({
                success:false,
                message:'all fields are required',
            })
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password and Confirm password do not match. please try again"
            });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already exists. Please sign in to continue.',
            })
        }
        
        const hashedPassword  = await bcrypt.hash(password,10);

        const user = User.create({
            email,
            AccountType,
            password:hashedPassword,
        })
        return res.status(200).json({
            success:true,
            message:"User registered successfully",
        });


    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Please try again. Signup failed"
        })
    }
}

exports.login = async (req,res) => {
    try{
        const {
            email,
            password
        } = req.body;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill up all the required fileds'
            })
        }

         const user = await User.findOne({email});
         if(!user){
            return res.status(401).json({
                success:false,
                message:'User is not registered Please signup first'
            })
         }

         if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(
                {email:user.email},
                process.env.JWT_SECRET,
                {
                    expiresIn:'24h',
                }
            )
            res.status(201).json({
                success:true,
                token,
                user
                })
         }
         else{
            return res.status(500).json({
                success:false,
                message:'Server Error'
            })
         }

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Please try again. login failed"
        })
    }
}