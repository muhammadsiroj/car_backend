import jwt from 'jsonwebtoken'
const sign = (payload)=>{
    return jwt.sign(payload,process.env.JWT_KEY)
}

const verify = (token)=>{
    return jwt.verify(token,process.env.JWT_KEY)
}


export {
    sign,
    verify
}