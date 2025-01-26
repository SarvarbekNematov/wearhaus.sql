const {categoryService} = require("./category.service")
const {ResData} = require("../../lib/resData")

class CategoryController {
    #service
    constructor(service){
        this.#service = service
    }

    async get(req, res, next){
        const quary = 'select * from category;'

        try {
            const data = await this.#service.findData(quary)
            const resdata = new ResData(200, "malumotlar olindi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }


    async create(req, res, next){
        const dto = req.body
        const quary = 'insert into category(name) values($1) returning *;'

        try {
            const data = await this.#service.createData(quary, dto)
            const resdata = new ResData(201, "malumot yaratildi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }


    async delete(req, res, next){
        const id = req.params.id
        const quary = 'delete from category where id=$1 returning *;'

        try {
            await this.#service.deleteData(quary, id)
            const resdata = new ResData(200, "malumot ochirildi...")
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const categoryController = new CategoryController(categoryService)
module.exports = {categoryController}