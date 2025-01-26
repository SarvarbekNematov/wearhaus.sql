const { database } = require ("../../lib/connectionSQL.js");

class UserService {
    #repository
    constructor(repository){
        this.#repository = repository
    }


    async getData(quary){
        const data = await this.#repository.findData(quary)
        return data
    }

    async createData(quary, dto){
        const data = await this.#repository.createData(quary, dto.email, dto.password, dto.role)
        return data
    }

    async updateData(quary, dto, id){        
        const data = await this.#repository.updateData(quary, dto.email, dto.password, id)
        return data
    }

    async deleteData(quary, id){
        const data = await this.#repository.deleteData(quary, id)
        return data
    }

    async getOneData(quary, id){
        const data = await this.#repository.findOneData(quary, id)
        return data
    }   
}




const userService = new UserService(database)

module.exports = {userService}