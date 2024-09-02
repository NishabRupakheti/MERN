const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const protect = (req,res,next)=>{

    const authHead = req.headers['authorization']; 
    const token = authHead && authHead.split(' ')[1]; 
    

    if(!token){
        return res.status(401).json({
            message : "No token found"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET )
        req.user = decoded
        next();
    }
    catch(err){
        console.error(err)
        res.status(401).json({
            message : "Token failed"
        })
    }

}

module.exports = protect