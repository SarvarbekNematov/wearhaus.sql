
const Joi = require("joi")

const userSchemaValidate = Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required(),
    role:Joi.string().required()
})

module.exports = {userSchemaValidate}