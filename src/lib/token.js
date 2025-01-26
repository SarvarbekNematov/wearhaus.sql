const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

class JWT {
    #accKey
    #refKey
    #accTime
    #refTime
    constructor(accKey, refKey, accTime, refTime) {
        this.#accKey = accKey;
        this.#refKey = refKey;
        this.#accTime = accTime;
        this.#refTime = refTime;
    }

    generateAccToken(data) {
        const token = { data, exp: Math.trunc(Date.now() / 1000) + this.#accTime };
        return jwt.sign(token, this.#accKey);
    }

    generateRefToken(data) {
        const token = { data, exp: Math.trunc(Date.now() / 1000) + this.#refTime };
        return jwt.sign(token, this.#refKey);
    }

    verifyAccToken(token) {
        const { data } = jwt.verify(token, this.#accKey);
        return data;
    }

    verifyRefToken(token) {
        const { data } = jwt.verify(token, this.#refKey);
        return data;
    }
}

const jwtInstance = new JWT("acc", "ref", 3600, 18400);

module.exports = { jwtInstance };
