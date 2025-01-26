const {categoryController} = require("./category.controller")
const {Router} = require("express")
const {auth_middlwares} = require("../../middleware/auth.middlware")
const {guard_middlwares} = require("../../middleware/guard.middlware")
const category_router = Router()

category_router.get("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    categoryController.get.bind(categoryController))
category_router.post("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    categoryController.create.bind(categoryController))
category_router.delete("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    categoryController.delete.bind(categoryController))
module.exports = {category_router}