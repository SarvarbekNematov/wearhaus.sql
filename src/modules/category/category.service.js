const {database} = require("../../lib/connectionSQL")


class CategoryService {
    #repository
    constructor(repository){
        this.#repository = repository
    }

    async findData(quary){
        const data = await this.#repository.findData(quary)
        return data
    }

    async createData(quary, dto){
        const data = await this.#repository.createData(quary, dto.name)
        return data
    }

    async deleteData(quary, id){
        const data = await this.#repository.deleteData(quary, id)
        return data
    }
}

const categoryService = new CategoryService(database)
module.exports = {categoryService}