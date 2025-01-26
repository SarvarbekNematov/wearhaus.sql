const {database} = require("../../lib/connectionSQL")


class AuthService {
    #repository
    constructor(repository){
        this.#repository = repository
    }

    async login(quary, dto){
        const data = await this.#repository.login(quary, dto.email)
        return data
    }
}

const authService = new AuthService(database)

module.exports = {authService}