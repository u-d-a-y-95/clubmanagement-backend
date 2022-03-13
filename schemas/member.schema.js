const joi = require('joi')

exports.create = joi.object({
    name:joi.string().required("Name is required"),
    email:joi.string().email().required("Email is required"),
    password:joi.string().required("password is required"),
    mobile:joi.string().optional(),
    address:joi.string().optional(),
    imgUrl:joi.string().optional()
})


