const { Router } = require ("express");
const { user_router } = require ("./users/user.routes.js");
const { auth_router } = require("./auth/auth.routes.js")
const { product_router } = require("./product/product.routes.js")
const { category_router } = require("./category/category.routes.js")
const router = Router()

router.use("/user", user_router)
router.use("/auth", auth_router)
router.use("/product", product_router)
router.use("/category", category_router)
module.exports = {router}