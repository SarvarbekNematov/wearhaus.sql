const {Router} = require("express")
const {authController} = require("./auth.controller")

const auth_router = Router()

auth_router.post("/login", authController.login.bind(authController))
auth_router.post("/refreshToken", authController.refresh.bind(authController))


module.exports = {auth_router}