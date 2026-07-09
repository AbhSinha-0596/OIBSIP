import jwt from "jsonwebtoken";

const userAuth =async (req,res,next) =>{
    if(req.body===undefined)
    {
        req.body={};
    }
    else{
        req.body=req.body;
    }
    if(req.body.email)
    {
        req.body.email=req.body.email;
    }
    else{
        req.body.email="";
    }
    
    if(req.body.otp)
    {
        req.body.otp=req.body.otp;
    }
    else{
        req.body.otp="";
    }
    
    const {token} = req.cookies;
    if(!token)
    {
        return res.json({success:false, message:'Not Authorized. Login Again'})
    }

    try{
        const tokenDecode=jwt.verify(token, process.env.JWT_SECRET)
        if(tokenDecode.id)
        {
            req.body.userId=tokenDecode.id;
            
        }else{
            return res.json({success:false, message:'Not Authorized, Login Again'});
        }

        next();

    }catch(error)
    {
        return res.json({success: false,message:error.message});
    }


}
    export default userAuth;
