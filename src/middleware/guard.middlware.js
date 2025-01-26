const { CustomError } = require("../lib/customError")

class GuardMiddlwares {

    verifyRole(...roles) {
        return function (req, res, next) {
            try {
                if (roles.length === 0) {
                    return next()
                }

                const currentUser = req.currentUser
                
                if (!currentUser) {
                    throw new CustomError(500, "currentUser is not provided")
                }

                
                
                if (currentUser[0].role !== "admin") {
                    throw new CustomError(403, "sizga ruxsat yo'q!")
                }
                

                next()
            } catch (error) {
                next(error)
            }
        }
    }
}

const guard_middlwares = new GuardMiddlwares()

module.exports = { guard_middlwares }
