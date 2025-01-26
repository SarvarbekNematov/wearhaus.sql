const {config} = require("dotenv")
config()

const configV = {
    PORT:process.env.PORT
}

module.exports = {configV}