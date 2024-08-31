require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Token is missing"
        })
    }

    // try{
    //     const decode = jwt.verify(token,process.env.JWT_SECRET);
    //     req.user = decode.user;
    //     next();
    // }catch(error){
    //     return res.status(401).json({
    //         success:false,
    //         message:"Invalid token"
    //     })
    // }
}

exports.isBusiness = async (req, res,next) =>{
    try{
        if(req.user.AccountType !== "Business"){
            return res.status(401).json({
                success:false,
                message:'This is Protected route for Business'
            });
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"AccountType is not verified.please try again "
        })
    }
}
exports.isPersonal = async (req,res,next)=>{
    try{
        if(req.user.AccountType !== "Personal"){
            return res.status(401).json({
                success:false,
                message:"This is Protected route for Customer"
            });
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Customer is not verified.please try again"
        })
    }
}

