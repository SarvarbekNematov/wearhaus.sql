const {Router} = require("express")
const {productController} = require("../product/product.controller")
const {auth_middlwares} = require("../../middleware/auth.middlware")
const {guard_middlwares} = require("../../middleware/guard.middlware")

const product_router = Router()

product_router.get("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    productController.get.bind(productController))
product_router.post("/", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    productController.create.bind(productController))
product_router.put("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    productController.update.bind(productController))
product_router.delete("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    productController.delete.bind(productController))
product_router.get("/:id", 
    auth_middlwares.verifyToken.bind(auth_middlwares),
    guard_middlwares.verifyRole("admin"),
    productController.getOne.bind(productController))
module.exports = {product_router}