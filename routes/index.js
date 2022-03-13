const router = require("express").Router();
const userRoute = require("./user.route")
const memberRoute = require("./member.route")

router.use('/users',userRoute)
router.use('/members',memberRoute)



module.exports = router