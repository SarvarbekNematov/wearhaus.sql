const {authService} = require("./auth.service")
const {ResData} = require("../../lib/resData")
const {jwtInstance} = require("../../lib/token")

class AuthController {
    #service
    constructor(service){
        this.#service = service
    }

    async login(req, res, next){
        const dto = req.body
        const quary = 'select * from user_s where email=$1;'
        try {
            const data = await this.#service.login(quary, dto)
            const accToken =  jwtInstance.generateAccToken(data)
            const refToken =  jwtInstance.generateRefToken(data)

            const token = {
                accToken, 
                refToken
            }

            const resdata = new ResData(200, "token yaratildi...", token)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }


    async refresh(req, res, next){
        const dto = req.body

        try {
        const payload = jwtInstance.verifyRefToken(dto.token)
        const accessToken = jwtInstance.generateAccToken({ id: payload.id, role: payload.role });
        const newRefreshToken = jwtInstance.generateRefToken({ id: payload.id });

        const newToken = {
            accessToken,
            newRefreshToken
        }
            const resdata = new ResData(200, "token yangilandi...", newToken)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            
        }
    }
}

const authController = new AuthController(authService)
module.exports = {authController}