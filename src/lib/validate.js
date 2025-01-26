const { CustomError } = require( "./customError.js")

function validate(schema, config){
    const {error} = schema.validate(config)

        if (error) {
            throw new CustomError(500, error.details[0].message)
        }
}

module.exports = {validate}