
const bcrypt = require("bcrypt")



exports.getHash = (value,round=process.env.APP_SALT_ROUND)=>{
    return bcrypt.hash(value,Number(round))
}

exports.compareHash=(value,hash)=>{
    return bcrypt.compare(value,hash)
}


