const bcrypt = require("bcrypt")

class Bcrypt {
    constructor(saltRoundes){
        this.saltRoundes = saltRoundes
    }


    async hash(password){        
        return await bcrypt.hash(password, this.saltRoundes)
    }

    async compare(password, hash){
        return await bcrypt.compare(password, hash)
    }
}

const bcryptInstance = new Bcrypt(10)

module.exports = {bcryptInstance}