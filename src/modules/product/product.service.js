const {database} = require("../../lib/connectionSQL")

class ProductService {
    #repository
    constructor(repository){
        this.#repository = repository
    }

    async findData(quary){
        const data = await this.#repository.findData(quary)
        return data
    }

    async createData(quary, dto){
        const data = await this.#repository.createData(quary, dto.name, dto.price, dto.count, dto.categoryID)
        return data
    }

    async updateData(quary, dto, id){
        const data = await this.#repository.updateData(quary, dto.price, id)
        return data
    }

    async deleteData(quary, id){
        const data = await this.#repository.deleteData(quary, id)
        return data
    }

    async findOneData(quary, id){
        const data = await this.#repository.findOneData(quary, id)
        return data
    }
}

const productService = new ProductService(database)
module.exports = {productService}