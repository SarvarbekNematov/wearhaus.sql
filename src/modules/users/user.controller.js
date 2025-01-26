const { userService } = require ("./user.service.js");
const { ResData } = require ("../../lib/resData.js");
const {userSchemaValidate} = require("./dto/dto.js")
const {validate} = require("../../lib/validate.js")
const {bcryptInstance} = require("../../lib/bcrypt")

class UserController {
    #service
    constructor(service){
        this.#service = service
    }


    async get(req, res, next){
        const quary = 'select * from user_s'
        try {
            const data = await this.#service.getData(quary)
            const resdata = new ResData(200, "malumotlar olindi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }



    async create(req, res, next){
        const dto = req.body
        const quary = 'insert into user_s(email, password, role) values($1, $2, $3) returning *;'
        try {
            validate(userSchemaValidate, dto)
            dto.password = await bcryptInstance.hash(dto.password)
            
            const data = await this.#service.createData(quary, dto)            
            const resdata = new ResData(201, "malumot qo'shildi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }




    async update(req, res, next){
        const dto = req.body
        const id = req.params.id
        const quary = 'update user_s set email=$1, password=$2 where id=$3 returning *;'
        try {
            const data = await this.#service.updateData(quary, dto, id)            
            const resdata = new ResData(200, "malumot yangilandi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }




    async delete(req, res, next){
        const id = req.params.id
        const quary = 'delete from user_s where id=$1 returning *;'
        try {
            await this.#service.deleteData(quary, id)            
            const resdata = new ResData(200, "malumot o'chirildi...")
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }




    async getOne(req, res, next){
        const id = req.params.id
        const quary = 'select * from user_s where id=$1;'
        try {
            const data = await this.#service.getOneData(quary, id)
            console.log("data:", data);
            
            const resdata = new ResData(200, "malumot olindi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const userController = new UserController(userService)

module.exports = {userController}