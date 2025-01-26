const {productService} = require("./product.service")
const {ResData} = require("../../lib/resData")
const {validate} = require("../../lib/validate")
const {productSchema} = require("./dto/dto")

class ProductController {
    #service
    constructor(servcie){
        this.#service = servcie
    }

    async get(req, res, next){
        const quary = 'select * from products;'
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
        const quary = 'insert into products(name, price, count, category_id) values($1, $2, $3, $4) returning *;'

        try {
            validate(productSchema, dto)
            const data = await this.#service.createData(quary, dto)
            const resdata = new ResData(201, "malumot yaratildi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        } 
    }

    
    async update(req, res, next){
        const dto = req.body
        const id = req.params.id
        const quary = 'update products set price=$1 where id=$2 returning *;'
        
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
        const quary = 'delete from products where id=$1 returning *;'

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
        const quary = 'select * from products where id=$1;'

        try {
            const data = await this.#service.findOneData(quary, id)
            const resdata = new ResData(200, "malumot olindi...", data)
            res.status(resdata.statusCode).json(resdata)
        } catch (error) {
            next(error)
        }
    }
}

const productController = new ProductController(productService)
module.exports = {productController}