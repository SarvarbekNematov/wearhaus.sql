const { Router } = require ("express");
const { userController } = require ("./user.controller.js");
const { auth_middlwares } =require("../../middleware/auth.middlware.js")
const {guard_middlwares} = require("../../middleware/guard.middlware.js")
const user_router = Router()

user_router.get("/",
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    userController.get.bind(userController))
user_router.post("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    userController.create.bind(userController))
user_router.put("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    userController.update.bind(userController))
user_router.delete("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    userController.delete.bind(userController))
user_router.get("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    userController.getOne.bind(userController))



module.exports = {user_router}