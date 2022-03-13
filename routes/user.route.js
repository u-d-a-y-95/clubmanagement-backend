const router = require("express").Router()

const Schema = require("../schemas")
const Controller = require("../controllers")

const requestValidationMiddleware = require("../middleware/requestValidationMiddleWare")
const {authMiddleWare} = require("../middleware/authMiddleware")

router.post('/login',requestValidationMiddleware.body(Schema.user.login),Controller.user.login)

router.post('/registration',requestValidationMiddleware.body(Schema.user.registration),Controller.user.registration)

router.get('/',authMiddleWare,Controller.user.getAllUser)



module.exports = router