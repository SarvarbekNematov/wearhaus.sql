const { Pool } = require( "pg");
const { CustomError } = require( "./customError.js");

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"wearhaus",
    password:"ok",
    port:5432,


    // connectionString:"postgres://postgres:ok@localhost:5432/usersss"
})



class DatabaseSql {

    async findData(quary){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary)
            return rows
        } catch (error) {
            throw new CustomError(500, error)
        } finally {
            connection.release()
        }
    }

    async createData(quary, ...params){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary, params)       
            return rows[0]
        } catch (error) {
            throw new CustomError(500, error)
        } finally {
            connection.release()
        }
    }

    async updateData(quary, ...params){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary, params)   
            
            if(!rows[0]){
                throw new CustomError(404, "bunday id li malumot mavjud emas...")
            }

            
            return rows[0]
        } catch (error) {
            throw new CustomError(500, error)
        } finally {
            connection.release()
        }
    }

    async deleteData(quary, ...params){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary, params)  
            
            if(!rows[0]){
                throw new CustomError(404, "bunday id li malumot mavjud emas...")
            }

        } catch (error) {
            throw new CustomError(500, error)
        } finally {
            connection.release()
        }
    }

    async findOneData(quary, ...params){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary, params)
            
            if(!rows[0]){
                throw new CustomError(404, "bunday id li malumot mavjud emas...")
            }

            return rows[0]
        } catch (error) {
            throw new CustomError(500, error)
        } finally {
            connection.release()
        }
    }

    async login(quary, ...params){
        const connection = await pool.connect()

        try {
            const {rows} = await connection.query(quary, params)
            
            if(!rows[0]){
                throw new CustomError(404, "bunday email ro'yxatdan o'tmagan...")
            }

            return rows
        } catch (error) {
            throw new CustomError(404, error)
        }
    }
}

const database = new DatabaseSql()


module.exports = {database}