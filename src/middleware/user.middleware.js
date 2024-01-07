export const checkUser = (req,res,next)=>{
    const {username,password} = req.body;
    if(username.length < 3){
        res.status(401).json('username is not enough')
        return
    }
    if(password.length < 7){
        return res.status(401).json('password is not enough')
    }
    next()
}