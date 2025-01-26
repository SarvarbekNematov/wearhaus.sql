const Joi = require("joi")


const schema = Joi.object({
    PORT:Joi.number().min(1000).max(9999).required()
})

module.exports = {schema}