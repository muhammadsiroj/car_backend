import { verify } from "../utils/jwt.js";

const checkToken = async (req,res,next)=>{
    try {
        const token = req.headers['authorization'];
        if(!token){
            return res.status(401).json('no token')
        }
        const user = verify(token)
        if (user.isAdmin == false) {
            return res.status(401).json({data:"you don't create"})
        }
        req.user = user

        next()
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export default checkToken