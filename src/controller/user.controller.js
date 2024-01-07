import User from "../models/user.model.js"
import { sign } from "../utils/jwt.js";

const login = async (req,res)=>{
    const {username,password} = req.body 
    const user = await User.findOne({where:{username}});
    if(!user || user.password != password){
        return res.status(404).json('user is not found')
    }
    const Token = sign({username, isAdmin:user.isAdmin})
    return res.status(200).json(Token)
}
export const getUser = async (req,res)=>{
    const user = await User.findAll();
    
    return res.status(200).json({data:user})
}
const register = async (req,res)=>{
    try {
        const {username,password} = req.body 
        const userfind = await User.findOne({where:{username}});
        if(userfind){
            return res.status(409).json('user is already exist')
        }
        const user = await User.create({username,password})
        if (user.id == 1) {
            await User.update( {isAdmin: true},{where:{id:1}})
        }
        const Token = sign({username, isAdmin:false})  
        return res.status(201).json(Token)
    } catch (error) {
        return res.status(500).json(error.message)
    }
    
} 


export{
    login,
    register
}