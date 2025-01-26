const Joi = require("joi")


const productSchema = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    count:Joi.number().required(),
    categoryID:Joi.number().required()
})

module.exports = {productSchema}