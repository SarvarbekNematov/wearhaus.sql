const { CustomError } = require("../lib/customError");
const { jwtInstance } = require("../lib/token");

class AuthMiddlwares {
    async verifyToken(req, res, next) {
        try {
            const token = req.headers.authorization;

            if (!token) {
                throw new CustomError(401, "token kirgazing..!");
            }

            const [type, tokenValue] = token.split(" ");
            
            if (type !== "Bearer") {
                throw new CustomError(401, "token type noto'g'ri...!");
            }
            
            const payload = await jwtInstance.verifyAccToken(tokenValue);
            req.currentUser = payload;
            next();
        } catch (error) {
            next(error);
        }
    }
}

const auth_middlwares = new AuthMiddlwares();
module.exports = { auth_middlwares };
